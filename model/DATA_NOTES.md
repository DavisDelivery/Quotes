# Data notes

## Source

- **Firestore project:** `davismarginiq`
- **Collection:** `das_line_items` — one document per delivered Uline shipment.
- **Access:** read-only via the Firestore REST `runQuery` endpoint using the
  public web API key. Set it in the environment as `DAVIS_FIRESTORE_KEY`; it is
  the public web config (the database has public read rules) and is not
  committed here.

## Fields used by the model

| Field | Meaning |
| --- | --- |
| `is_accessorial` | true on accessorial rows; the model uses base rows only (`is_accessorial` false and `cost` > 1) |
| `cost` | all-in charge **including fuel** (equals `rate` / `new_cost` on base rows; `extra_cost` is 0) |
| `zip` | destination ZIP — the only geography that drives price |
| `weight` | pounds |
| `skid` | pallet count |
| `loose` | loose (non-palletized) piece count |
| `pu_date` | pickup date, `YYYY-MM-DD` string — selects the fuel divisor |
| `pro` | shipment / PRO number — join key to per-shipment exports |

`freight_class` is always null and there are no dimensions in the billing data
(this is why density had to be sourced externally for the verification step).

## De-fuel divisors

Convert `cost` to a fuel-free linehaul by dividing by the multiplier for the
pickup date:

```
pu_date <  2025-06-14   ->  / 1.23   (23% fuel)
pu_date <  2026-03-21   ->  / 1.20   (20%)
pu_date <  2026-04-20   ->  / 1.25   (25%)
else                    ->  / 1.28   (28%)
```

The base rate card is constant across this entire window (proven in
`docs/METHODOLOGY.md` §2 / `verify_fuel_timeline.py`), so every month pools.

## Pulling data

```bash
export DAVIS_FIRESTORE_KEY=<public web api key>
python3 model/build/pull_das.py 2025-01-01 2026-01-01   # all of 2025
python3 model/build/pull_das.py 2026-01-01 2026-06-23   # 2026 to date
```

Pulls write to `data/das_<start>_<end>.json`. The `data/` directory and any
`*.csv` are git-ignored — raw billing is never committed. Only the derived
`src/model.json` ships.

## ZIP centroids (distance regime)

`src/geo.json` maps ZIP -> `[lat, lng]` for the area we quote (every ZIP
within 200 mi of the depot plus all of GA + SC, ~2,156 ZIPs), used to compute depot-to-destination distance for
out-of-area pricing. Source is the public U.S. Census ZCTA Gazetteer.

Rebuild / add states:

```bash
python3 model/build/build_geo.py        # edit RADIUS_MI / KEEP_WHOLE to change coverage
```

`geo.json` is a static lookup (it changes only when the Census updates
centroids), so it is committed alongside the model rather than rebuilt from
billing data.
