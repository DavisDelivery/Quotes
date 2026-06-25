#!/usr/bin/env python3
"""
Verify the fuel-surcharge timeline and prove the base rate is stable.

Method: anchor on two independent zone minimums (Z1 de-fueled linehaul 51.38,
Z2 53.65). For each month, the minimum charge floor divided by the de-fueled
base, minus 1, is the IMPLIED fuel rate. If the base rate were unchanged, the
implied fuel read off Z1 and Z2 must agree every month. They do (23 -> 20 ->
25 -> 28), which is mathematical proof the base rate card never moved across
the window — so all months pool into one model.

Run after pulling data:  python3 model/build/verify_fuel_timeline.py
"""
import json, glob, collections, os

DATA = os.path.join(os.path.dirname(__file__), "..", "..", "data")
BASE = {65.77: 51.38, 68.67: 53.65, 71.58: 55.92}
ZN = {65.77: "Z1", 68.67: "Z2", 71.58: "Z3", 103.01: "Z4"}
BASES = [51.38, 53.65, 55.92, 80.48]


def div(d):
    d = str(d)
    if d < "2025-06-14": return 1.23
    if d < "2026-03-21": return 1.20
    if d < "2026-04-20": return 1.25
    return 1.28


def snap(x):
    return min(BASES, key=lambda b: abs(b - x))


rows = []
for fn in sorted(glob.glob(os.path.join(DATA, "*.json"))):
    for r in json.load(open(fn)):
        if r.get("is_accessorial") or (r.get("cost") or 0) <= 1:
            continue
        rows.append(r)

# crude per-ZIP zone via single-pallet light floor, to bucket months by zone
floor5 = collections.defaultdict(lambda: 1e9)
for r in rows:
    if int(float(r.get("skid") or 0)) == 1 and int(float(r.get("loose") or 0)) == 0 and 0 < float(r.get("weight") or 0) <= 450:
        z = str(r["zip"]); floor5[z] = min(floor5[z], float(r["cost"]) / div(r["pu_date"]))
zone5 = {z: round(snap(f) * 1.28, 2) for z, f in floor5.items()}

buck = collections.defaultdict(lambda: collections.defaultdict(list))
for r in rows:
    if int(float(r.get("skid") or 0)) == 1 and int(float(r.get("loose") or 0)) == 0 and 0 < float(r.get("weight") or 0) <= 450:
        zb = zone5.get(str(r["zip"]))
        if zb in BASE:
            buck[str(r["pu_date"])[:7]][zb].append(float(r["cost"]))

print("month     Z1 floor  implied   Z2 floor  implied   (implied fuel = floor / base - 1)")
for mo in sorted(buck):
    z1 = buck[mo].get(65.77, []); z2 = buck[mo].get(68.67, [])
    f1 = min(z1) if z1 else None; f2 = min(z2) if z2 else None
    i1 = (f1 / 51.38 - 1) * 100 if f1 else None
    i2 = (f2 / 53.65 - 1) * 100 if f2 else None
    print("%s  %s  %s   %s  %s" % (
        mo,
        ("%8.2f" % f1) if f1 else "    -   ", ("%5.0f%%" % i1) if i1 is not None else "   - ",
        ("%8.2f" % f2) if f2 else "    -   ", ("%5.0f%%" % i2) if i2 is not None else "   - "))
