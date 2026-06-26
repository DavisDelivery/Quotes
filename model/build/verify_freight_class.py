#!/usr/bin/env python3
"""
Verify that freight class / density does NOT predict the Uline charge.

Joins a per-shipment density export (must contain `pro` and a
`freight_class_palletest` column) to the billing rows in data/, de-fuels each
charge, compares it to the model prediction, and reports the median
actual/predicted ratio by freight class plus the correlation.

Result on Davis data (4,737 shipments): the ratio is flat at ~1.00 for every
class from 70 to 500, and the correlation is ~0. Conclusion: Uline bills this
lane on weight + zone only. Density is recorded for reference but never priced.

Usage:
    python3 model/build/verify_freight_class.py path/to/per_shipment.csv
"""
import csv, json, glob, collections, statistics as st, math, sys, os

DATA = os.path.join(os.path.dirname(__file__), "..", "..", "data")
MODEL = os.path.join(os.path.dirname(__file__), "..", "..", "src", "model.json")
CSVP = sys.argv[1] if len(sys.argv) > 1 else None
if not CSVP:
    raise SystemExit("Pass the per-shipment CSV path (needs columns: pro, freight_class_palletest).")

M = json.load(open(MODEL))
zbase = lambda z: M["zone5"].get(str(z)) or M["zone3"].get(str(z)[:3]) or M["global_"]


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


def spine(zb, w):
    return max(interp(M["curves"].get(str(round(zb, 2))) or M["pk"], w), zb / 1.28)


def bd(a, x):
    i = 0
    while i < len(a) and a[i] <= x:
        i += 1
    return i - 1


def resid(zb, sk, lo, w):
    B = round(zb, 2); sb, lb, wb = bd(M["SKB"], max(sk, 1)), bd(M["LOB"], lo), bd(M["WBc"], w)
    return (M["resM"].get("%s|%s|%s|%s" % (B, sb, lb, wb))
            or M["resG"].get("%s|%s|%s" % (sb, lb, wb))
            or M["resW"].get("%s|%s" % (sb, lb)) or 0.0)


def div(d):
    d = str(d)
    if d < "2025-06-14": return 1.23
    if d < "2026-03-21": return 1.20
    if d < "2026-04-20": return 1.25
    return 1.28


das = {}
for fn in glob.glob(os.path.join(DATA, "*.json")):
    for r in json.load(open(fn)):
        if r.get("is_accessorial") or (r.get("cost") or 0) <= 1:
            continue
        das[str(r.get("pro") or "").lstrip("0")] = r

joined = []
for s in csv.DictReader(open(CSVP)):
    d = das.get(str(s.get("pro", "")).lstrip("0"))
    if not d:
        continue
    try:
        cls = float(s["freight_class_palletest"])
    except (KeyError, ValueError, TypeError):
        continue
    w = float(d.get("weight") or 0)
    if w <= 0:
        continue
    zb = zbase(d["zip"]); lh = float(d["cost"]) / div(d["pu_date"])
    pred = spine(zb, w) + resid(zb, int(float(d.get("skid") or 0)), int(float(d.get("loose") or 0)), w)
    if pred > 0:
        joined.append((lh / pred, cls))

print("joined shipments:", len(joined))
byc = collections.defaultdict(list)
for ratio, c in joined:
    byc[c].append(ratio)
print("\nmedian actual/predicted ratio by freight class:")
for c in sorted(byc):
    if len(byc[c]) >= 15:
        print("  class %-4d n=%4d  median %.3f" % (int(c), len(byc[c]), st.median(byc[c])))

rs = [j[0] for j in joined]; cs = [j[1] for j in joined]
n = len(rs); mx = sum(rs) / n; my = sum(cs) / n
num = sum((a - mx) * (b - my) for a, b in zip(rs, cs))
dx = math.sqrt(sum((a - mx) ** 2 for a in rs)); dy = math.sqrt(sum((b - my) ** 2 for b in cs))
print("\nPearson r (ratio vs class): %.3f  ->  ~0 means class does not move the charge" % (num / (dx * dy) if dx * dy else float("nan")))
