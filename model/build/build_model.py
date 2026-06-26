#!/usr/bin/env python3
"""
Build the Uline final-mile rate model from de-fueled DAS billing rows.

Reads every JSON array under data/ (pulled via pull_das.py), normalizes each
charge to a fuel-free "linehaul", then fits:
  - 4 distance zones keyed by destination ZIP (minimum charge)
  - a continuous per-hundredweight weight curve per zone ("spine")
  - skid/loose residual adders (banded medians)
  - an all-in rate sheet by weight break
and writes the result to src/model.json (the file the app imports).

DE-FUEL TIMELINE  (validated against the data; base rate has not changed since 2024):
    pu_date <  2025-06-14   ->  /1.23   (23% fuel)
    pu_date <  2026-03-21   ->  /1.20   (20%)
    pu_date <  2026-04-20   ->  /1.25   (25%)
    else                    ->  /1.28   (28%)

QUOTE FORMULA (mirrored in src/UlineQuoteConsole.jsx):
    linehaul = spine(zone, weight) + resid(zone, skids, loose, weight)
    all_in   = linehaul * (1 + fuel)        # 28% current
    quote    = all_in   * (1 + margin)

Freight class / density is recorded for reference only. It is NOT used in
pricing: Uline bills this lane on weight + zone, and class was shown to have
zero correlation with the charge (see verify_freight_class.py).
"""
import json, glob, bisect, statistics as st, collections, os

OUT = os.path.join(os.path.dirname(__file__), "..", "..", "src", "model.json")
DATA = os.path.join(os.path.dirname(__file__), "..", "..", "data")

# de-fueled zone minimums; x1.28 = the all-in floors 65.77 / 68.67 / 71.58 / 103.01
BASES = [51.38, 53.65, 55.92, 80.48]
ZN = {65.77: "Z1", 68.67: "Z2", 71.58: "Z3", 103.01: "Z4"}
KN = [0, 100, 200, 300, 400, 460, 500, 540, 580, 620, 660, 700, 740, 780, 840, 920,
      1000, 1080, 1160, 1240, 1320, 1420, 1520, 1650, 1800, 2000, 2300, 2800, 3500, 5000, 8000, 99999]
SKB = [1, 2, 3, 4, 6, 9, 99]
LOB = [0, 1, 2, 4, 8, 16, 999]
WBc = [0, 500, 800, 1200, 2000, 4000, 99999]
# standard NMFC class scale, anchored class 85 = 1.00 (reference only, not priced)
CLASSMULT = {50: 0.63, 55: 0.69, 60: 0.74, 65: 0.80, 70: 0.86, 77.5: 0.94, 85: 1.00,
             92.5: 1.06, 100: 1.14, 110: 1.22, 125: 1.35, 150: 1.51, 175: 1.71,
             200: 1.94, 250: 2.29, 300: 2.69}


def div(d):
    d = str(d)
    if d < "2025-06-14": return 1.23
    if d < "2026-03-21": return 1.20
    if d < "2026-04-20": return 1.25
    return 1.28


def snap(x):
    return min(BASES, key=lambda b: abs(b - x))


def load_rows():
    rows = []
    for fn in sorted(glob.glob(os.path.join(DATA, "*.json"))):
        for r in json.load(open(fn)):
            if r.get("is_accessorial") or (r.get("cost") or 0) <= 1:
                continue
            rows.append(dict(zip=str(r.get("zip") or ""),
                             w=float(r.get("weight") or 0),
                             sk=int(float(r.get("skid") or 0)),
                             lo=int(float(r.get("loose") or 0)),
                             lh=float(r["cost"]) / div(r.get("pu_date"))))
    return rows


def build_zones(rows):
    floor5 = collections.defaultdict(lambda: 1e9)
    cnt5 = collections.Counter()
    for r in rows:
        if r["sk"] == 1 and r["lo"] == 0 and 0 < r["w"] <= 450:
            floor5[r["zip"]] = min(floor5[r["zip"]], r["lh"])
            cnt5[r["zip"]] += 1
    zone5 = {z: snap(f) for z, f in floor5.items() if cnt5[z] >= 25}
    z3 = collections.defaultdict(list)
    for z, f in floor5.items():
        if cnt5[z] >= 5:
            z3[z[:3]].append(f)
    zone3 = {p: snap(st.median(v)) for p, v in z3.items()}
    return zone5, zone3


def interp(kn, w):
    if w <= kn[0][0]: return kn[0][1]
    if w >= kn[-1][0]:
        (x0, y0), (x1, y1) = kn[-2], kn[-1]
        return y1 if x1 == x0 else y0 + (y1 - y0) * (w - x0) / (x1 - x0)
    for i in range(1, len(kn)):
        if w <= kn[i][0]:
            (x0, y0), (x1, y1) = kn[i - 1], kn[i]
            return y0 + (y1 - y0) * (w - x0) / (x1 - x0) if x1 > x0 else y0
    return kn[-1][1]


def main():
    rows = load_rows()
    if not rows:
        raise SystemExit("No rows in data/. Run model/build/pull_das.py first.")
    print("delivery rows:", len(rows))

    zone5, zone3 = build_zones(rows)
    GLOBAL = 53.65
    zbase = lambda z: zone5.get(z) or zone3.get(z[:3]) or GLOBAL

    # spine: per-zone median linehaul vs weight, with pooled fallback
    sp = [r for r in rows if r["sk"] <= 1 and r["lo"] <= 1]
    pooled = collections.defaultdict(list)
    perbase = collections.defaultdict(lambda: collections.defaultdict(list))
    for r in sp:
        ki = bisect.bisect_right(KN, r["w"]) - 1
        pooled[ki].append(r["lh"])
        perbase[round(zbase(r["zip"]), 2)][ki].append(r["lh"])
    pmed = {k: st.median(v) for k, v in pooled.items()}
    pk = sorted([KN[i], round(pmed[i], 3)] for i in pmed)
    curves = {}
    for B in set(round(zbase(r["zip"]), 2) for r in sp):
        kn = []
        for i in range(len(KN)):
            v = perbase[B].get(i, [])
            if len(v) >= 4:
                kn.append([KN[i], round(st.median(v), 3)])
            elif i in pmed:
                kn.append([KN[i], round(pmed[i] + (B - 68.67) / 1.28, 3)])
        curves[str(B)] = sorted(kn)

    def spine(zb, w):
        return max(interp(curves.get(str(round(zb, 2))) or pk, w), zb / 1.28)

    # residual adders (banded medians, with progressively coarser fallbacks)
    bd = lambda a, x: bisect.bisect_right(a, x) - 1
    res = collections.defaultdict(list)
    rg = collections.defaultdict(list)
    rw = collections.defaultdict(list)
    for r in rows:
        d = r["lh"] - spine(zbase(r["zip"]), r["w"])
        sb, lb, wb = bd(SKB, max(r["sk"], 1)), bd(LOB, r["lo"]), bd(WBc, r["w"])
        B = round(zbase(r["zip"]), 2)
        res[(B, sb, lb, wb)].append(d)
        rg[(sb, lb, wb)].append(d)
        rw[(sb, lb)].append(d)
    resM = {f"{k[0]}|{k[1]}|{k[2]}|{k[3]}": round(st.median(v), 3) for k, v in res.items() if len(v) >= 3}
    resG = {f"{k[0]}|{k[1]}|{k[2]}": round(st.median(v), 3) for k, v in rg.items() if len(v) >= 3}
    resW = {f"{k[0]}|{k[1]}": round(st.median(v), 3) for k, v in rw.items() if len(v) >= 2}

    # all-in rate sheet by weight break (single pallet)
    BR = [(0, 500), (500, 1000), (1000, 2500), (2500, 5000), (5000, 10000), (10000, 99999)]
    labels = ["< 500", "500 - 999", "1,000 - 2,499", "2,500 - 4,999", "5,000 - 9,999", "10,000 +"]
    mids = {"< 500": 400, "500 - 999": 750, "1,000 - 2,499": 1500, "2,500 - 4,999": 3500, "5,000 - 9,999": 7000, "10,000 +": 12000}
    zones = [(65.77, "Z1"), (68.67, "Z2"), (71.58, "Z3"), (103.01, "Z4")]
    sheet, est = {}, {}
    for B, zn in zones:
        sub = [r for r in rows if abs(zbase(r["zip"]) - B) < .005 and r["sk"] == 1 and r["lo"] == 0]
        row, ec = {}, []
        for (lo, hi), lab in zip(BR, labels):
            lhs = [r["lh"] for r in sub if lo <= r["w"] < hi]
            if len(lhs) >= 8:
                row[lab] = round(st.median(lhs) * 1.28, 2)
            elif lhs:
                row[lab] = round(st.median(lhs) * 1.28, 2); ec.append(lab)
            else:
                row[lab] = round(max(interp(curves.get(str(B)) or pk, mids[lab]), B / 1.28) * 1.28, 2); ec.append(lab)
        sheet[zn] = row; est[zn] = ec

    # freight class mix (reference only): density-proxy share of weight-driven pallet freight
    classmix = {"70": 6.2, "77.5": 39.0, "85": 30.2, "92.5": 13.2, "100": 5.3,
                "110": 2.0, "125": 1.4, "150": 1.3, "175": 0.8}

    out = dict(zone5=zone5, zone3=zone3, global_=GLOBAL, fuel_embedded=0.28,
               KN=KN, curves=curves, pk=pk, SKB=SKB, LOB=LOB, WBc=WBc,
               resM=resM, resG=resG, resW=resW, rateSheet=sheet, breaks=labels,
               estCells=est, zoneMin={z: b for b, z in zones},
               classMult=CLASSMULT, classDefault=85, classMix=classmix)
    json.dump(out, open(OUT, "w"), separators=(",", ":"))
    print("zones: zip5=%d zip3=%d" % (len(zone5), len(zone3)))
    print("wrote", os.path.relpath(OUT))


if __name__ == "__main__":
    main()
