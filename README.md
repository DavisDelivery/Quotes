# Davis Quote Generator — Uline Final-Mile Rate Console

A mobile-first quoting tool that reproduces Uline's final-mile LTL pricing for
Davis Delivery Service. Type a destination ZIP, weight, and pallet/loose count
and it returns the all-in rate Uline would bill, with fuel and an optional
customer markup applied on top.

The pricing model was reverse-engineered from **226,073 delivered Uline
shipments (Jan 2025 – Jun 2026)** of DAS billing data and validated against
held-out shipments. This repo holds the app, the model, the scripts that
rebuild the model from billing data, and the methodology.

---

## What the model is

Uline bills this lane as a classic LTL tariff:

```
linehaul = zone_minimum(ZIP)  blended into  a continuous per-hundredweight weight curve
                              +  a skid / loose-piece residual adder
all_in   = linehaul x (1 + fuel%)          # 28% current
quote    = all_in   x (1 + margin%)        # + markup or - discount
```

- **Zones** — four distance tiers keyed by destination ZIP (Z1 $65.77 close-in
  metro, Z2 $68.67 mid, Z3 $71.58 far / Athens–Gainesville, Z4 $103.01
  special). Zones differ almost entirely by minimum charge; per-pound rates are
  nearly identical across them (short-haul North GA).
- **Weight** — priced on a continuous per-CWT curve, not coarse bands.
- **Fuel** — a surcharge on top, currently 28%. The full timeline is baked into
  the de-fueling step (see `docs/METHODOLOGY.md`).

### Accuracy

| Segment | Within $5 | Within $10 |
| --- | --- | --- |
| Single-pallet, no loose | ~94% | ~97% |
| All freight (blended) | ~82% | ~88% |

Median error is **$0.00**; the model is essentially unbiased. The leftover
spread is Uline's own rate granularity — not a missing variable (see below).

### What does NOT affect the price

Freight class / density. Uline's freight is physically bulky (density implies
class ~200), but the contract is billed as if it were dense — effectively
**weight + zone only**. This was tested three independent ways (per-shipment
class, weight-weighted class across the full SKU mix, and SKU count); the
actual/predicted ratio is flat at ~1.00 across every class from 70 to 500 and
the correlation is ~0. Density is recorded in the model for reference but is
never priced. Reproduce it with `model/build/verify_freight_class.py`.

---

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

Deploys to Netlify as-is (`netlify.toml` included): build `npm run build`,
publish `dist/`.

The app is a single self-contained React component (`src/UlineQuoteConsole.jsx`)
with scoped styles and the model bundled as `src/model.json`. Customer markup
profiles persist in browser storage. Three tabs: **Quote**, **Zones**,
**Rate sheet**.

---

## Use it inside another Davis app (MarginIQ, dispatch map)

This repo is the single source of truth. Other apps consume it as a dependency
and render the console as a tab — no copied files, so a change here propagates
to both apps on their next deploy.

Add the dependency (pin to a tag):

```bash
npm install github:DavisDelivery/quote-generator#v0.9.0
```

Render it as a tab:

```jsx
import { UlineQuoteConsole } from "@davisdelivery/quote-generator";

<UlineQuoteConsole embedded />
```

All props are optional; with none, it renders exactly like the standalone app.

| Prop | Purpose |
| --- | --- |
| `embedded` | drop the standalone page chrome so it sits cleanly inside a host tab |
| `initialZip` / `initialWeight` / `initialSkids` / `initialLoose` | seed the inputs (e.g. prefill from a selected stop on the dispatch map) |
| `model` | use a model object directly instead of the bundled one |
| `modelUrl` | fetch a live model JSON on mount (falls back to bundled on error) — point every app at one URL and fuel/zone/rate changes appear in all of them with no redeploy |

Price without the UI:

```js
import { priceQuote, defaultModel } from "@davisdelivery/quote-generator";

priceQuote(defaultModel, { zip: "30127", weight: 1330, skids: 3, fuelPct: 28 });
// -> { zone: "Z2", linehaul, allIn: 137.83, quoted: 137.83 }
```

**Propagating a change:** edit `src/`, `npm run build:lib`, commit, bump the tag.
Each consumer moves its dependency to the new tag and redeploys. Data-only
changes (fuel %, zones, rates) need no redeploy if the apps read a `modelUrl`.

### Release automation (one release → both apps redeploy)

`.github/workflows/release-redeploy.yml` fires on a published GitHub Release (or
a pushed `v*` tag) and POSTs the Netlify build hook for each consuming site, so a
single release here rebuilds both apps with the new package ref. Configure two
repository secrets (Settings → Secrets and variables → Actions):

| Secret | Points at |
| --- | --- |
| `NETLIFY_HOOK_MARGINIQ` | build hook for `davis-marginiq.netlify.app` |
| `NETLIFY_HOOK_DISPATCH_MAP` | build hook for `dd-dispatch-map.netlify.app` |

Create each hook in Netlify under **Site configuration → Build & deploy → Build
hooks**. The workflow no-ops gracefully for any secret left unset.

Full release flow:

1. Edit `src/` (component or `model.json`).
2. `npm run build:lib` → regenerates `lib/quote-generator.js`.
3. Commit the `src/` + `lib/` change.
4. Bump the version and cut a new tag / GitHub Release (e.g. `v0.9.1`).
5. The workflow pings both build hooks; each app reinstalls the package at the
   new ref and redeploys. (Move each consumer's dependency ref to the new tag
   when you want it to adopt the release.)

---

## Repo layout

```
src/
  UlineQuoteConsole.jsx   the console (Quote / Zones / Rate sheet tabs) — embeddable
  index.js                library entry: exports UlineQuoteConsole, priceQuote, defaultModel
  model.json              the rate model (canonical, committed)
  App.jsx  main.jsx  index.css   standalone-app shell
lib/
  quote-generator.js      prebuilt ESM library other apps import (rebuild: npm run build:lib)
vite.config.js            standalone app build        vite.lib.config.js   library build
model/
  build/
    pull_das.py             pull DAS billing rows from Firestore for a date range
    build_model.py          rebuild src/model.json from pulled billing rows
    verify_fuel_timeline.py prove the base rate is stable; reconstruct fuel steps
    verify_freight_class.py prove freight class does not affect the charge
  DATA_NOTES.md             billing schema, fuel divisors, data access
docs/
  METHODOLOGY.md            how the model was derived, validated, and stress-tested
  BUILD_TASKS.md            roadmap (live model API, heavy-tail curve, embeds)
```

---

## Rebuilding the model

`src/model.json` is the committed, canonical model. To regenerate it from
fresh billing data:

```bash
export DAVIS_FIRESTORE_KEY=<public web api key>
python3 model/build/pull_das.py 2025-01-01 2026-01-01
python3 model/build/pull_das.py 2026-01-01 2026-06-23
python3 model/build/build_model.py            # writes src/model.json
python3 model/build/verify_fuel_timeline.py   # sanity check
```

Raw billing pulls land in `data/` and are git-ignored — they are never
committed. Only the derived `src/model.json` ships.

See `docs/METHODOLOGY.md` for the full derivation and `model/DATA_NOTES.md` for
the billing schema and the de-fuel timeline.
