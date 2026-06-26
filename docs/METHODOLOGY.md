# Methodology

How the Uline final-mile rate model was derived from billing data, validated,
and stress-tested. All figures come from DAS billing rows (`das_line_items`)
pulled from Firestore; see `model/DATA_NOTES.md` for the schema.

## 1. Dataset

- **226,073 delivered Uline shipments**, pickup dates **Jan 2025 – Jun 2026**
  (pooled from a 2025 pull and a 2026 pull).
- One billing row = one delivered shipment. The money field `cost` is the
  **all-in charge including fuel**. Rating inputs are destination `zip`,
  `weight`, `skid` (pallets), and `loose` (loose pieces). Origin warehouse does
  not affect price — the rate keys off destination only.
- `freight_class` is always null and there are no dimensions in the billing
  data. That gap drove the freight-class investigation in section 5.

## 2. Fuel timeline and base-rate stability

Every charge is converted to a fuel-free **linehaul** by dividing by the fuel
multiplier in effect on its pickup date:

| Period | Fuel | Divisor |
| --- | --- | --- |
| through 2025-06-13 | 23% | 1.23 |
| 2025-06-14 → 2026-03-20 | 20% | 1.20 |
| 2026-03-21 → 2026-04-19 | 25% | 1.25 |
| 2026-04-20 → present | 28% | 1.28 |

This timeline is not assumed — it is recovered from the data and proven. Anchor
on two independent zone minimums (Z1 de-fueled linehaul $51.38, Z2 $53.65). For
each month, `floor / base − 1` is the implied fuel rate. Z1 and Z2 produce the
**identical implied fuel every month** (23 → 20 → 25 → 28). Two independent
anchors agreeing across the whole window is mathematical proof the **base rate
card never changed** — so all 18 months pool cleanly into one model. The last
base-rate change was in 2024. Reproduce with
`model/build/verify_fuel_timeline.py`.

## 3. Rate structure

On de-fueled linehaul, the rate is a classic LTL tariff:

- **Zones (minimum charge).** For each destination ZIP, the de-fueled minimum
  charge floor (single pallet, no loose, ≤450 lb) snaps to one of four levels:
  $51.38 / $53.65 / $55.92 / $80.48 (×1.28 = the all-in floors $65.77 / $68.67 /
  $71.58 / $103.01). ZIPs with enough volume map directly; sparse ZIPs fall
  back to a 3-digit prefix, then a global default.
- **Weight curve ("spine").** Per zone, the median linehaul at each of ~30
  weight knots forms a continuous per-hundredweight curve, floored at the zone
  minimum, with a pooled fallback for sparse zone/weight cells. Effective
  per-CWT declines from ≈$26/cwt at the floor to ≈$11 at 500–1,000 lb to ≈$7 at
  1,000–2,500 lb.
- **Residual adder.** The leftover (linehaul − spine) is captured as banded
  medians over (zone, skid band, loose band, weight band) with progressively
  coarser fallbacks, covering multi-pallet and loose-piece effects.

`model/build/build_model.py` implements all three and writes `src/model.json`.

## 4. Accuracy (held-out)

| Segment | Within $5 | Within $10 | Notes |
| --- | --- | --- | --- |
| Single-pallet, no loose | 94.3% | 97.2% | 29,415 held-out shipments; portfolio −0.89% |
| All freight (blended) | ~82% | ~88% | median error $0.00 |
| Loose freight | ~69% | — | hand-loaded / irregular |
| Heavy > 2,500 lb | — | — | median ~$16; 4,889 shipments |
| Very heavy > 5,000 lb | — | — | only ~990 shipments; erratic (near-truckload volume breaks) |

Going from a 22k-shipment sample to the full 226k did **not** lower the core
deviation — the limit is not sample size. The rate sheet is real data up to
5,000 lb; the 5,000 lb+ cells are flagged as thin estimates.

## 5. Freight class / density is not priced

The leftover spread on pallet freight was hypothesized to be density (freight
class), which is not in the billing data. Three independent tests, each joining
an external per-SKU density estimate to the actual charges:

1. **Per-shipment primary class** (4,737 shipments): median actual/predicted
   ratio flat at **1.00** for every class 70 → 500; correlation **−0.04**.
2. **Weight-weighted class across the full SKU mix per order** (4,689 orders):
   ratio flat at **1.00** across every class bin 100 → 400; correlation 0.11
   (tail noise only — the central tendency does not move).
3. **SKU count per order**: ratio flat at 1.00 from 1 to 6+ SKUs.

Conclusion: **Uline bills this lane on weight + zone only and does not charge
for low density.** The freight is physically bulky (density implies class
~200) but is rated as if dense. An earlier "supply the class for ~98%" estimate
was circular — it inferred class from the rate itself; with real independent
class joined in, the signal is zero.

Consequence for the app: a freight-class multiplier and a cubic-foot /
dimensional-weight lever were built and then **removed** — both would have
over-quoted bulky freight that Uline actually bills by weight. The model is
purely ZIP → zone, weight curve, fuel, margin. Density values are retained in
`model.json` for reference only and are never applied to a price. Reproduce
with `model/build/verify_freight_class.py <per_shipment.csv>`.

## 6. Where accuracy could still move

The weight-and-zone core is at its ceiling. The remaining honest levers are
narrow:

- **Heavy > 5,000 lb** — only ~990 shipments and erratic because near-truckload
  freight gets volume breaks. More heavy data plus a volume-break curve (one
  that bends toward truckload pricing instead of extrapolating the LTL line)
  would tighten this specific segment.
- **Per-consignee effects** — whether specific accounts run consistently above
  or below the model. Could not be tested on three weeks of detail (no account
  had enough shipments in that window); testable on the full billing history
  using the consignee field already present in `das_line_items`.

Accessorials are not a quote-accuracy gap: only ~1.4% of orders carry one, and
they are returns / reconsignments billed as another minimum charge — not
foreseeable at quote time.

## 7. Scaling beyond the data: the distance regime

The Uline data only spans **~0–81 miles** from the depot (dense to ~55), and
within it the rate is nearly flat — the implied distance gradient is real but
shallow (r≈0.4, ~$0.14/mi at the minimum charge). That is a *delivery-area*
slope, not a *linehaul* slope, so it cannot be extended to price Augusta
(~115 mi), Macon (~91), Greenville SC (~94), Columbia SC (~158), or Savannah
(~211). Beyond the data, any number is an extrapolation, not a Uline fact.

So the model runs in two regimes, decided per ZIP:

- **data** — ZIP is in the Uline billing data. Priced by the data-backed model
  (zone + weight curve + residual). Unchanged from §3.
- **nearby** — ZIP isn't in the data but a neighboring 3-digit prefix is, and it
  is within the envelope. Priced from the nearby zone (the existing prefix
  fallback). Labeled "nearby estimate".
- **oa (out-of-area)** — beyond the envelope, or a prefix we have no data for.
  Priced as the farthest data-backed zone (Z3) at that weight **plus a per-mile
  linehaul for the distance past the envelope**, then fuel and margin as normal:

  ```
  linehaul = Z3_weight_curve(weight) + oaPerMile x max(0, distance - dataRadiusMi)
  ```

  Distance is the great-circle miles from the depot (`origin`) to the ZIP
  centroid (`src/geo.json`, Census ZCTA centroids: every ZIP within 200 mi of the depot plus all of GA + SC, ~2,156 ZIPs). Every
  out-of-area quote is flagged in the UI and carries a confidence note; it is a
  defensible distance-scaled estimate, not a data-backed rate.

Three parameters in `model.json` tune this and are the levers to refine as real
far-lane data arrives (they need no code change, and flow through `modelUrl`):

| Param | Default | Meaning |
| --- | --- | --- |
| `origin` | `[34.12, -83.79]` | depot lat/lng (Buford / Braselton) — the distance basis |
| `dataRadiusMi` | `80` | edge of the data envelope; beyond this a ZIP is out-of-area |
| `oaPerMile` | `1.75` | de-fueled $/mile added per mile beyond the envelope (~$2.24/mi at 28% fuel) |

Calibration: as Davis books real loads to far ZIPs (or gets competitor/Uline
quotes for them), compare the booked rate to the model's out-of-area figure and
adjust `oaPerMile` (and `dataRadiusMi` if the envelope shifts). Each real far
data point makes the extrapolation less of an assumption.
