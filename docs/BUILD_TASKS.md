# Roadmap

Future work, in priority order. The weight-and-zone pricing core is at its
accuracy ceiling, so most of this is about delivery and the few narrow levers
that remain.

## 1. Live model API (no redeploy for data changes)

Today `src/model.json` is bundled at build time. To let fuel %, zones, and the
rate sheet refresh automatically as new billing data lands:

- A scheduled job rebuilds the model from `das_line_items` on a cadence
  (reusing `model/build/build_model.py`) and writes the result to a single
  served location (a Firestore document or a static endpoint).
- The app fetches that model on load. The component already supports this: pass
  a `modelUrl` and it will fetch the live model, falling back to the bundled
  one. Wire `modelUrl` once the endpoint exists.

Then a fuel-rate change appears everywhere instantly with no rebuild.

## 2. Heavy > 5,000 lb volume-break curve

Only ~990 shipments over 5,000 lb in the window, and they are erratic because
near-truckload freight gets volume breaks. Fit a tail that bends toward
truckload pricing instead of extrapolating the LTL line, and keep accumulating
heavy data. Flag the segment until it is dense enough to be defensible.

## 3. Per-consignee effect test

Test whether specific accounts run consistently above or below the model using
the consignee field already in `das_line_items`. Could not be tested on three
weeks of detail (no account had enough shipments); run it against the full
billing history. If a consistent per-account bias exists, add it as an optional
adjustment.

## 4. Optional: embed in other apps

The console is a self-contained component with scoped styles and a bundled
model, so it can be dropped into another internal app as a tab without code
changes. It also exposes the inputs for prefill (e.g. seed the destination ZIP
and weight from a selected stop on a dispatch map). If reuse becomes real,
extract the component into a small internal package so a single edit propagates
on each app's next deploy, and point every consumer at the same live `modelUrl`
so pricing data stays identical across them.

## Not worth pursuing

- **Freight class / density pricing.** Verified inert three independent ways
  (see `docs/METHODOLOGY.md` §5). Uline bills weight + zone. Do not reintroduce
  a class or dimensional-weight multiplier — it over-quotes bulky freight.
- **More billing rows for the core.** Going from 22k to 226k shipments did not
  move the core deviation. The leftover spread is Uline's own rate granularity.

## Conventions

- Bump the version string and keep it visible on any change.
- Keep tables sortable and dates formatted "Mon D, YYYY" / "Mon YYYY".
- Never commit raw billing pulls, source CSVs, HAR captures, or secrets.
