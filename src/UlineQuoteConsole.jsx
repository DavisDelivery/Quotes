import React, { useState, useMemo, useEffect, useRef } from "react";
import M from "./model.json";

// ─────────────────────────────────────────────────────────────
// Uline final-mile rate console — Davis Delivery Service
// Now UI Dashboard styling: light canvas, soft white cards,
// Montserrat, dark gradient hero with a live rate curve, pill
// controls, switchable accent. Pricing model from 226,073 Uline
// DAS shipments (Jan 2025 – Jun 2026). Customer profiles persist via browser storage.
// ─────────────────────────────────────────────────────────────
const APP_VERSION = "v0.9";

const br = (a, x) => { let lo = 0, hi = a.length; while (lo < hi) { const m = (lo + hi) >> 1; if (a[m] <= x) lo = m + 1; else hi = m; } return lo; };
const bnd = (a, x) => br(a, x) - 1;
function interp(kn, w) {
  if (w <= kn[0][0]) return kn[0][1];
  const L = kn.length;
  if (w >= kn[L - 1][0]) { const [x0, y0] = kn[L - 2], [x1, y1] = kn[L - 1]; return x1 === x0 ? y1 : y0 + (y1 - y0) * (w - x0) / (x1 - x0); }
  for (let i = 1; i < L; i++) { if (w <= kn[i][0]) { const [x0, y0] = kn[i - 1], [x1, y1] = kn[i]; return x1 > x0 ? y0 + (y1 - y0) * (w - x0) / (x1 - x0) : y0; } }
  return kn[L - 1][1];
}
const ZN = { 65.77: "Z1", 68.67: "Z2", 71.58: "Z3", 103.01: "Z4" };
const zoneLabel = (zb) => ZN[Math.round(zb * 100) / 100] || "Z?";
const money = (n) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const intc = (n) => Math.round(n).toLocaleString("en-US");

// --- pure pricing over an explicit model (single source of truth) ---
const zbaseM = (m, z) => { z = String(z); return m.zone5[z] ?? m.zone3[z.slice(0, 3)] ?? m.global_; };
const spineM = (m, zb, w) => Math.max(interp(m.curves[String(Math.round(zb * 100) / 100)] || m.pk, w), zb / 1.28);
function residM(m, zb, sk, lo, w) {
  const B = Math.round(zb * 100) / 100, sb = bnd(m.SKB, Math.max(sk, 1)), lb = bnd(m.LOB, lo), wb = bnd(m.WBc, w);
  const k1 = `${B}|${sb}|${lb}|${wb}`; if (k1 in m.resM) return m.resM[k1];
  const k2 = `${sb}|${lb}|${wb}`; if (k2 in m.resG) return m.resG[k2];
  const k3 = `${sb}|${lb}`; if (k3 in m.resW) return m.resW[k3];
  return 0;
}
function computeM(m, zip, w, sk, lo) {
  const zb = zbaseM(m, zip);
  return { zb, lh: spineM(m, zb, w) + residM(m, zb, sk, lo, w) };
}
function buildZonesM(m) {
  const z = { Z1: { min: 65.77, zips: [], pfx: [] }, Z2: { min: 68.67, zips: [], pfx: [] }, Z3: { min: 71.58, zips: [], pfx: [] }, Z4: { min: 103.01, zips: [], pfx: [] } };
  for (const [zip, base] of Object.entries(m.zone5)) { const l = ZN[Math.round(base * 100) / 100]; if (z[l]) z[l].zips.push(zip); }
  for (const [p, base] of Object.entries(m.zone3)) { const l = ZN[Math.round(base * 100) / 100]; if (z[l]) z[l].pfx.push(p); }
  for (const k in z) { z[k].zips.sort(); z[k].pfx.sort(); }
  return z;
}

// Pure quote function — exported so host apps can price without the UI.
export function priceQuote(model, { zip, weight, skids = 1, loose = 0, fuelPct = 28, marginPct = 0 }) {
  const w = Number(weight) || 0, f = (Number(fuelPct) || 0) / 100, p = (Number(marginPct) || 0) / 100;
  const c = computeM(model, zip, w, skids, loose);
  const allIn = c.lh * (1 + f);
  return { zone: ZN[Math.round(c.zb * 100) / 100] || "Z?", zb: c.zb, linehaul: c.lh, fuelAmt: c.lh * f, allIn, quoted: allIn * (1 + p) };
}

// Active model: the bundled one by default; overridable per-instance via the
// `model` or `modelUrl` props on UlineQuoteConsole. The console reads this so a
// live model fetch updates the same pricing path the standalone app uses.
export const defaultModel = M;
let MODEL = M;
const zbase = (z) => zbaseM(MODEL, z);
const spine = (zb, w) => spineM(MODEL, zb, w);
const resid = (zb, sk, lo, w) => residM(MODEL, zb, sk, lo, w);
const compute = (zip, w, sk, lo) => computeM(MODEL, zip, w, sk, lo);

function confidence(zipFound, tp, weight, loose) {
  if (!zipFound) return { key: "est", label: "estimate", note: "This ZIP isn't in the recent Uline data — rate is estimated from the surrounding area zone." };
  const tail = tp > 6 || weight > 2500 || loose > 4;
  if (tail) return { key: "est", label: "estimate", note: "Heavy or high-piece freight prices with wider variance — treat this as a starting figure." };
  if (loose > 0) return { key: "std", label: "has loose freight", note: "Loose pieces run looser than pallet freight — within $5 on ~69% vs ~94% pallet-only." };
  const core = tp <= 4 && weight <= 1500;
  if (core) return { key: "core", label: "high confidence", note: "Pallet freight in the core range — matches Uline within $5 on ~94% of shipments." };
  return { key: "std", label: "standard", note: "Weight-and-zone estimate — Uline's basis for this lane." };
}

const ACCENTS = { orange: "#f96332", blue: "#2ca8ff", green: "#18ce0f", purple: "#9368e9", red: "#ff3636" };
const ACCENTS_D = { orange: "#e8521f", blue: "#1f93e6", green: "#15b30d", purple: "#7e52d8", red: "#e62a2a" };
const ACCENTS_RING = { orange: "#f9633233", blue: "#2ca8ff33", green: "#18ce0f33", purple: "#9368e933", red: "#ff363633" };

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.rc-root{ --s1:4px;--s2:8px;--s3:12px;--s4:16px;--s5:20px;--s6:24px;--s8:32px;
  --rc:12px;--ri:10px;--pill:30px; --t:200ms cubic-bezier(.2,.7,.3,1);
  --bg:#f5f6fa; --card:#ffffff;
  --ink:#2c2c2c; --muted:#8a8a8a; --faint:#b3b3b3; --line:#ededed; --line-2:#e3e3e3;
  --ok:#18ce0f; --warn:#ffb236;
  --hero1:#1f2148; --hero2:#2c2f63;
  font-family:'Montserrat',-apple-system,BlinkMacSystemFont,sans-serif;
  min-height:100vh; background:var(--bg); color:var(--ink); -webkit-font-smoothing:antialiased; }
.rc-root *{ box-sizing:border-box; }
.rc-root button{ font:inherit;cursor:pointer;border:none;background:none;color:inherit; }
.rc-root input,.rc-root select{ font:inherit; }
@media (prefers-reduced-motion: reduce){ .rc-root *{ transition:none !important; animation:none !important; } }
.rc-root.rc-embedded{ min-height:0; background:transparent; }
.rc-root.rc-embedded .rc-wrap{ padding-top:var(--s4); padding-bottom:var(--s5); }

.rc-wrap{ max-width:468px;margin:0 auto;padding:var(--s6) var(--s4) var(--s8); }

/* header */
.rc-head{ display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s5); }
.rc-brand{ display:flex;align-items:center;gap:var(--s3); }
.rc-logo{ width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent-d));display:grid;place-items:center;color:#fff;font-weight:700;font-size:16px;box-shadow:0 4px 12px -2px var(--accent-ring); }
.rc-bk{ font-size:14px;font-weight:700;line-height:1.1;color:var(--ink); }
.rc-bs{ font-size:11px;color:var(--muted);font-weight:500; }
.rc-right{ display:flex;align-items:center;gap:var(--s3); }
.rc-ver{ font-size:11px;font-weight:600;color:var(--muted);padding:3px 9px;border-radius:var(--pill);background:var(--card);box-shadow:0 1px 6px rgba(0,0,0,.05); }

/* accent picker */
.rc-accents{ display:inline-flex;gap:6px;padding:5px 7px;background:var(--card);border-radius:var(--pill);box-shadow:0 1px 6px rgba(0,0,0,.05); }
.rc-acc{ width:16px;height:16px;border-radius:50%;transition:transform var(--t),box-shadow var(--t);box-shadow:0 0 0 0 rgba(0,0,0,0); }
.rc-acc:hover{ transform:scale(1.15); }
.rc-acc.on{ box-shadow:0 0 0 2px var(--card),0 0 0 4px currentColor;transform:scale(1.05); }
.rc-acc:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--card),0 0 0 4px var(--ink); }

/* tabs */
.rc-tabs{ display:flex;gap:var(--s1);background:#eceef3;border-radius:var(--pill);padding:5px;margin-bottom:var(--s5); }
.rc-tab{ flex:1;text-align:center;font-size:12.5px;font-weight:600;color:var(--muted);padding:9px 0;border-radius:var(--pill);transition:color var(--t),background var(--t),box-shadow var(--t); }
.rc-tab:hover{ color:var(--ink); }
.rc-tab.on{ background:var(--card);color:var(--ink);box-shadow:0 3px 10px -2px rgba(0,0,0,.12); }
.rc-tab:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }

/* cards */
.rc-card{ background:var(--card);border-radius:var(--rc);box-shadow:0 1px 20px 0 rgba(0,0,0,.06);overflow:hidden;margin-bottom:var(--s4); }
.rc-chead{ padding:var(--s5) var(--s5) 0; }
.rc-ccat{ font-size:10.5px;font-weight:600;color:var(--faint);text-transform:uppercase;letter-spacing:.07em; }
.rc-ctitle{ margin:3px 0 0;font-size:17px;font-weight:600;color:var(--ink); }
.rc-csub{ margin:4px 0 0;font-size:12px;color:var(--muted);line-height:1.5; }

/* hero (dark gradient) */
.rc-hero{ position:relative;background:linear-gradient(135deg,var(--hero1),var(--hero2));border-radius:var(--rc);overflow:hidden;padding:var(--s6) var(--s5) 0;margin-bottom:var(--s4);box-shadow:0 8px 30px -10px rgba(31,33,72,.55); }
.rc-cat{ font-size:10.5px;font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.08em; }
.rc-price{ display:flex;align-items:baseline;gap:6px;margin-top:8px; }
.rc-cur{ font-size:24px;font-weight:600;color:rgba(255,255,255,.6); }
.rc-amt{ font-size:50px;font-weight:600;letter-spacing:-.02em;line-height:1;color:#fff;font-variant-numeric:tabular-nums; }
.rc-sub{ margin-top:9px;font-size:12.5px;color:rgba(255,255,255,.72);font-weight:500; }
@keyframes rc-pop{ 0%{opacity:.4;transform:translateY(3px);} 100%{opacity:1;transform:none;} }
.rc-anim{ animation:rc-pop var(--t); }
.rc-hstatus{ display:flex;flex-wrap:wrap;gap:var(--s2);margin-top:var(--s4); }
.rc-hpill{ display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:var(--pill);background:rgba(255,255,255,.10);color:#fff; }
.rc-hdot{ width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.6); }
.rc-hpill.ok .rc-hdot{ background:var(--ok); } .rc-hpill.warn .rc-hdot{ background:var(--warn); }
.rc-sparkwrap{ margin:16px -20px 0; }
.rc-spark{ display:block;width:100%;height:auto; }

/* ledger */
.rc-ledger{ padding:var(--s4) var(--s5); }
.rc-lrow{ display:flex;justify-content:space-between;align-items:center;padding:7px 0; }
.rc-lk{ font-size:12.5px;color:var(--muted);font-weight:500; }
.rc-lv{ font-size:13px;color:var(--ink);font-weight:600;font-variant-numeric:tabular-nums; }
.rc-lv.disc{ color:var(--ok); }
.rc-lrow.tot{ margin-top:4px;padding-top:13px;border-top:1px solid var(--line); }
.rc-lrow.tot .rc-lk{ font-weight:700;color:var(--ink);font-size:13px; }
.rc-lrow.tot .rc-lv{ font-size:16px;font-weight:700; }

/* form */
.rc-divhd{ padding:var(--s2) var(--s5) 0;font-size:10.5px;font-weight:600;color:var(--faint);text-transform:uppercase;letter-spacing:.07em;border-top:1px solid var(--line);margin-top:var(--s2);padding-top:var(--s4); }
.rc-form{ padding:var(--s4) var(--s5) var(--s5);display:grid;grid-template-columns:1fr 1fr;gap:var(--s4); }
.rc-field{ display:flex;flex-direction:column;gap:7px;min-width:0; }
.rc-field.col{ grid-column:1 / -1; }
.rc-grid2{ display:grid;grid-template-columns:1fr 1fr;gap:var(--s4); }
.rc-label{ font-size:12px;font-weight:600;color:var(--ink);display:flex;flex-direction:column;gap:2px; }
.rc-hint{ font-size:11px;font-weight:500;color:var(--faint);line-height:1.35; }

/* inputs */
.rc-input{ width:100%;font-size:14.5px;font-weight:500;color:var(--ink);background:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:10px 13px;transition:border-color var(--t),box-shadow var(--t);font-variant-numeric:tabular-nums; }
.rc-input::placeholder{ color:var(--faint); }
.rc-input:hover{ border-color:#cfcfcf; }
.rc-input:focus{ outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-ring); }
.rc-sfx{ display:flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:0 13px;transition:border-color var(--t),box-shadow var(--t); }
.rc-sfx:focus-within{ border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-ring); }
.rc-sfx input{ flex:1;min-width:0;border:none;background:transparent;font-size:14.5px;font-weight:500;color:var(--ink);padding:10px 0;outline:none;font-variant-numeric:tabular-nums; }
.rc-unit{ font-size:12px;color:var(--faint);font-weight:600; }
.rc-narrow{ max-width:170px; }
.rc-select{ appearance:none;-webkit-appearance:none;width:100%;font-size:14px;font-weight:500;color:var(--ink);background-color:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:10px 36px 10px 13px;transition:border-color var(--t),box-shadow var(--t);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center; }
.rc-select:hover{ border-color:#cfcfcf; }
.rc-select:focus{ outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-ring); }

/* stepper */
.rc-step{ display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid var(--line-2);border-radius:var(--ri);padding:4px; }
.rc-step button{ width:38px;height:34px;border-radius:8px;font-size:18px;color:var(--muted);display:grid;place-items:center;transition:background var(--t),color var(--t),transform var(--t); }
.rc-step button:hover:not(:disabled){ background:var(--bg);color:var(--ink); }
.rc-step button:active:not(:disabled){ transform:scale(.9); }
.rc-step button:disabled{ opacity:.3;cursor:not-allowed; }
.rc-step button:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
.rc-count{ font-size:16px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--ink); }

/* presets */
.rc-fuelrow{ display:flex;align-items:center;gap:var(--s2);flex-wrap:wrap; }
.rc-presets{ display:inline-flex;gap:4px;background:#eceef3;border-radius:var(--pill);padding:4px; }
.rc-preset{ font-size:12.5px;font-weight:600;color:var(--muted);padding:6px 12px;border-radius:var(--pill);transition:background var(--t),color var(--t); }
.rc-preset:hover{ color:var(--ink); }
.rc-preset.on{ background:var(--accent);color:#fff;box-shadow:0 4px 10px -3px var(--accent-ring); }
.rc-preset:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
.rc-fuelrow .rc-sfx{ margin-left:auto;width:90px; }

/* buttons + links */
.rc-btn{ font-size:12.5px;font-weight:600;padding:9px 16px;border-radius:var(--pill);background:#eceef3;color:var(--ink);transition:background var(--t),transform var(--t),box-shadow var(--t); }
.rc-btn:hover{ background:#e2e5ec; }
.rc-btn:active{ transform:translateY(1px); }
.rc-btn:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
.rc-btn.primary{ background:var(--accent);color:#fff;box-shadow:0 4px 12px -3px var(--accent-ring); }
.rc-btn.primary:hover{ background:var(--accent-d); }
.rc-link{ align-self:flex-start;font-size:12px;font-weight:600;color:var(--accent);transition:color var(--t); }
.rc-link:hover{ color:var(--accent-d); }
.rc-addbox{ display:flex;gap:var(--s2);flex-wrap:wrap;margin-top:var(--s1); }
.rc-addbox .nm{ flex:1 1 130px; } .rc-addbox .mk{ width:74px;flex:0 0 auto;text-align:center; }

/* disclosure */
.rc-adv{ display:flex;align-items:center;gap:var(--s2);width:100%;padding:13px var(--s5);border-top:1px solid var(--line);color:var(--muted);font-size:12.5px;font-weight:600;text-align:left;transition:color var(--t); }
.rc-adv:hover{ color:var(--ink); }
.rc-tw{ font-size:9px;color:var(--faint);transition:transform var(--t); }
.rc-adv.open .rc-tw{ transform:rotate(90deg); }
.rc-advbody{ padding:0 var(--s5) var(--s4);display:flex;flex-direction:column;gap:var(--s4); }
.rc-advnote{ font-size:11.5px;color:var(--muted);line-height:1.55;background:var(--bg);border-radius:var(--ri);padding:12px 13px; }

/* footer */
.rc-foot{ padding:var(--s4) var(--s5) var(--s5);border-top:1px solid var(--line); }
.rc-note{ display:flex;gap:8px;align-items:flex-start;font-size:12px;color:var(--muted);line-height:1.55;font-weight:500; }
.rc-notedot{ flex:0 0 auto;width:7px;height:7px;border-radius:50%;margin-top:5px;background:var(--muted); }
.rc-note.ok .rc-notedot{ background:var(--ok); } .rc-note.warn .rc-notedot{ background:var(--warn); }
.rc-prov{ margin-top:var(--s3);font-size:11px;color:var(--faint);line-height:1.6;font-weight:500; }
.rc-prov b{ color:var(--muted);font-weight:700; }

/* tables */
.rc-tblwrap{ padding:var(--s2) var(--s5) var(--s4);overflow-x:auto; }
.rc-tbl{ width:100%;border-collapse:collapse; }
.rc-tbl th,.rc-tbl td{ padding:10px 8px;text-align:right;border-bottom:1px solid var(--line); }
.rc-tbl th{ font-size:10px;font-weight:700;color:var(--faint);text-transform:uppercase;letter-spacing:.05em; }
.rc-tbl td{ font-size:13px;font-weight:600;color:var(--ink);font-variant-numeric:tabular-nums; }
.rc-tbl th:first-child,.rc-tbl td:first-child{ text-align:left; }
.rc-tbl td.brk{ font-size:12.5px;color:var(--muted);font-weight:600; }
.rc-tbl td.est{ color:var(--faint);font-style:italic;font-weight:500; }
.rc-tbl tr:last-child td{ border-bottom:none; }

/* charts */
.rc-barlbl{ fill:var(--muted);font-size:11px;font-weight:600;font-family:'Montserrat',sans-serif; }
.rc-barval{ fill:var(--ink);font-size:11px;font-weight:700;font-family:'Montserrat',sans-serif; }

/* zone cards */
.rc-zwrap{ display:flex;flex-direction:column;gap:var(--s4); }
.rc-zhd{ display:flex;justify-content:space-between;align-items:flex-start;padding:var(--s5) var(--s5) 0;gap:var(--s3); }
.rc-zname{ font-size:15px;font-weight:600;color:var(--ink); }
.rc-zct{ font-size:11.5px;color:var(--muted);margin-top:2px;font-weight:500; }
.rc-zmin{ font-size:22px;font-weight:700;color:var(--ink);text-align:right;font-variant-numeric:tabular-nums; }
.rc-zminl{ font-size:10px;color:var(--faint);text-align:right;text-transform:uppercase;letter-spacing:.05em;margin-top:1px;font-weight:600; }
.rc-zbody{ padding:var(--s3) var(--s5) var(--s5); }
.rc-zrate{ font-size:11.5px;color:var(--muted);line-height:1.6;font-weight:500; }
.rc-zrate b{ color:var(--ink);font-weight:700; }
.rc-zips{ display:flex;flex-wrap:wrap;gap:5px;margin-top:var(--s3); }
.rc-zchip{ font-size:11px;font-weight:600;color:var(--muted);background:var(--bg);border-radius:6px;padding:3px 8px; }
.rc-zmore{ margin-top:var(--s3);font-size:11.5px;font-weight:600;color:var(--accent);transition:color var(--t); }
.rc-zmore:hover{ color:var(--accent-d); }
.rc-pfx{ margin-top:var(--s3);font-size:11px;color:var(--faint);font-weight:500; }
.rc-pfx b{ color:var(--muted);font-weight:700; }

.rc-pagefoot{ text-align:center;margin-top:var(--s4);font-size:11px;color:var(--faint);font-weight:500; }
`;

function Stepper({ value, set, min = 0 }) {
  return (
    <div className="rc-step">
      <button onClick={() => set(Math.max(min, value - 1))} disabled={value <= min} aria-label="decrease">−</button>
      <span className="rc-count">{value}</span>
      <button onClick={() => set(value + 1)} aria-label="increase">+</button>
    </div>
  );
}

const STORE_KEY = "uline_customer_profiles_v1";
const DEFAULTS = [
  { id: "list", name: "List (Uline)", markup: 0, locked: true },
  { id: "retail", name: "Retail +15%", markup: 15 },
];
const store = (() => {
  if (typeof window !== "undefined" && window.storage && typeof window.storage.get === "function") {
    return { get: (k) => window.storage.get(k), set: (k, v) => window.storage.set(k, v) };
  }
  if (typeof window !== "undefined" && window.localStorage) {
    return {
      get: async (k) => { const v = window.localStorage.getItem(k); return v == null ? null : { value: v }; },
      set: async (k, v) => { window.localStorage.setItem(k, v); return { value: v }; },
    };
  }
  return { get: async () => null, set: async () => null };
})();
const hasStore = true;

function Field({ label, hint, children, full }) {
  return (
    <div className={"rc-field" + (full ? " col" : "")}>
      <span className="rc-label">{label}{hint && <span className="rc-hint">{hint}</span>}</span>
      {children}
    </div>
  );
}

function AccentSwitcher({ accent, setAccent }) {
  return (
    <div className="rc-accents" role="group" aria-label="Accent color">
      {Object.entries(ACCENTS).map(([k, hex]) => (
        <button key={k} className={"rc-acc" + (accent === k ? " on" : "")} style={{ background: hex, color: hex }} aria-label={k} aria-pressed={accent === k} onClick={() => setAccent(k)} />
      ))}
    </div>
  );
}

function Tabs({ tab, setTab }) {
  return (
    <div className="rc-tabs" role="tablist">
      {[["quote", "Quote"], ["zones", "Zones"], ["sheet", "Rate sheet"]].map(([k, l]) => (
        <button key={k} role="tab" aria-selected={tab === k} className={"rc-tab" + (tab === k ? " on" : "")} onClick={() => setTab(k)}>{l}</button>
      ))}
    </div>
  );
}

function RateCurve({ zip, skids, loose, weight, accentHex }) {
  const W = 320, H = 64, pad = 5;
  const xs = []; for (let w = 120; w <= 2500; w += 95) xs.push(w);
  const ys = xs.map((w) => compute(zip, w, skids, loose).lh);
  const ymin = Math.min(...ys), ymax = Math.max(...ys), span = ymax - ymin || 1;
  const sx = (i) => pad + (W - 2 * pad) * i / (xs.length - 1);
  const sy = (v) => (H - pad) - (H - 2 * pad) * (v - ymin) / span;
  const line = xs.map((w, i) => `${i ? "L" : "M"}${sx(i).toFixed(1)} ${sy(ys[i]).toFixed(1)}`).join(" ");
  const area = `${line} L ${sx(xs.length - 1).toFixed(1)} ${H} L ${sx(0).toFixed(1)} ${H} Z`;
  const cw = Number(weight) || 0; let ci = 0, best = Infinity;
  xs.forEach((w, i) => { const d = Math.abs(w - cw); if (d < best) { best = d; ci = i; } });
  return (
    <svg className="rc-spark" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Rate by weight for the selected zone">
      <defs><linearGradient id="rcfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.20" /><stop offset="100%" stopColor="#fff" stopOpacity="0" /></linearGradient></defs>
      <path d={area} fill="url(#rcfill)" />
      <path d={line} fill="none" stroke="#fff" strokeOpacity="0.92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={sx(ci)} cy={sy(ys[ci])} r="4" fill={accentHex} stroke="#fff" strokeWidth="1.6" />
    </svg>
  );
}

function ZoneBars({ accentHex }) {
  const data = [["Z1", 65.77], ["Z2", 68.67], ["Z3", 71.58], ["Z4", 103.01]];
  const max = 103.01, W = 320, H = 96, bw = 46, gap = (W - 4 * bw) / 5;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }} role="img" aria-label="Minimum charge by zone">
      {data.map(([k, v], i) => {
        const h = (H - 30) * (v / max); const x = gap + i * (bw + gap); const y = (H - 20) - h;
        return (
          <g key={k}>
            <rect x={x} y={y} width={bw} height={h} rx="5" fill={accentHex} opacity="0.88" />
            <text x={x + bw / 2} y={H - 5} textAnchor="middle" className="rc-barlbl">{k}</text>
            <text x={x + bw / 2} y={y - 5} textAnchor="middle" className="rc-barval">${Math.round(v)}</text>
          </g>
        );
      })}
    </svg>
  );
}

function LedgerRow({ k, v, disc }) {
  return <div className="rc-lrow"><span className="rc-lk">{k}</span><span className={"rc-lv" + (disc ? " disc" : "")}>{v}</span></div>;
}

function ProfilePicker({ profiles, profileId, marginPct, curProfile, showAdd, newName, newMk, selectProfile, saveProfile, deleteProfile, setShowAdd, setNewName, setNewMk }) {
  return (
    <Field full label="Customer profile" hint="Applies a saved markup or discount">
      <select className="rc-select" value={profileId} onChange={(e) => selectProfile(e.target.value)}>
        {profiles.map((p) => <option key={p.id} value={p.id}>{p.name}{p.id !== "list" ? `  (${p.markup > 0 ? "+" : ""}${p.markup}%)` : ""}</option>)}
        {profileId === "__custom__" && <option value="__custom__">Custom ({marginPct > 0 ? "+" : ""}{marginPct}%)</option>}
        <option value="__add__">+ Add customer profile…</option>
      </select>
      {showAdd && (
        <div className="rc-addbox">
          <input className="rc-input nm" placeholder="Customer name" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <input className="rc-input mk" inputMode="decimal" placeholder="%" value={newMk} onChange={(e) => setNewMk(e.target.value.replace(/[^0-9.\-]/g, ""))} />
          <button className="rc-btn primary" onClick={saveProfile}>Save</button>
          <button className="rc-btn" onClick={() => { setShowAdd(false); setNewName(""); setNewMk(""); }}>Cancel</button>
        </div>
      )}
      {curProfile && !curProfile.locked && profileId !== "__custom__" && !showAdd && (
        <button className="rc-link" onClick={deleteProfile}>Delete "{curProfile.name}"</button>
      )}
    </Field>
  );
}

function ZoneCard({ name, info, rateRow }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rc-card" style={{ marginBottom: 0 }}>
      <div className="rc-zhd">
        <div>
          <div className="rc-zname">Zone {name}</div>
          <div className="rc-zct">{info.zips.length} ZIPs{info.pfx.length ? ` · ${info.pfx.length} area fallbacks` : ""}</div>
        </div>
        <div>
          <div className="rc-zmin">${money(info.min)}</div>
          <div className="rc-zminl">min charge</div>
        </div>
      </div>
      <div className="rc-zbody">
        <div className="rc-zrate">All-in @ 28%, single pallet — <b>${rateRow["500 - 999"]}</b> at 500–999 lb · <b>${rateRow["1,000 - 2,499"]}</b> at 1,000–2,499 lb</div>
        <div className="rc-zips">{(open ? info.zips : info.zips.slice(0, 24)).map((z) => <span className="rc-zchip" key={z}>{z}</span>)}</div>
        {info.zips.length > 24 && <button className="rc-zmore" onClick={() => setOpen(!open)}>{open ? "Show fewer" : `Show all ${info.zips.length} ZIPs`}</button>}
        {info.pfx.length > 0 && <div className="rc-pfx">Area fallbacks (3-digit): <b>{info.pfx.join(", ")}</b></div>}
      </div>
    </div>
  );
}

function RateTable() {
  return (
    <div className="rc-card">
      <div className="rc-chead"><div className="rc-ccat">All-in @ 28% fuel</div><h3 className="rc-ctitle">Rate sheet by weight break</h3><p className="rc-csub">Single pallet, normalized across 18 months. Italic cells (5,000 lb+) are thin on Uline volume — loose and bulky freight rates higher.</p></div>
      <div className="rc-tblwrap">
        <table className="rc-tbl">
          <thead><tr><th>Weight (lb)</th><th>Z1</th><th>Z2</th><th>Z3</th><th>Z4</th></tr></thead>
          <tbody>
            {MODEL.breaks.map((b) => (
              <tr key={b}>
                <td className="brk">{b}</td>
                {["Z1", "Z2", "Z3", "Z4"].map((zk) => (
                  <td key={zk} className={MODEL.estCells[zk].includes(b) ? "est" : ""}>${money(MODEL.rateSheet[zk][b])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function UlineQuoteConsole({ model, modelUrl, initialZip, initialWeight, initialSkids, initialLoose, embedded } = {}) {
  const [accent, setAccent] = useState("orange");
  const [tab, setTab] = useState("quote");
  const [zip, setZip] = useState(initialZip != null ? String(initialZip).replace(/[^0-9]/g, "").slice(0, 5) : "30127");
  const [weight, setWeight] = useState(initialWeight != null ? String(Math.max(0, Math.round(Number(initialWeight) || 0))) : "1330");
  const [skids, setSkids] = useState(initialSkids != null ? Number(initialSkids) : 3);
  const [loose, setLoose] = useState(initialLoose != null ? Number(initialLoose) : 0);
  const [fuel, setFuel] = useState("28");
  const [margin, setMargin] = useState("0");
  const [profiles, setProfiles] = useState(DEFAULTS);
  const [profileId, setProfileId] = useState("list");
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newMk, setNewMk] = useState("");

  // Live model override: a `model` object wins immediately; otherwise a
  // `modelUrl` is fetched once on mount (falling back to the bundled model on
  // error). Single console instance per page, so a module-level active model
  // is safe and keeps every pricing path — quote, curve, zones, sheet — in sync.
  const [modelTick, setModelTick] = useState(0);
  useEffect(() => {
    if (model && model.zone5) { MODEL = model; setModelTick((t) => t + 1); return; }
    if (modelUrl) {
      let live = true;
      fetch(modelUrl)
        .then((r) => r.json())
        .then((m) => { if (live && m && m.zone5) { MODEL = m; setModelTick((t) => t + 1); } })
        .catch(() => {});
      return () => { live = false; };
    }
  }, [model, modelUrl]);

  useEffect(() => {
    if (!hasStore) return;
    (async () => {
      try {
        const r = await store.get(STORE_KEY);
        if (r && r.value) { const list = JSON.parse(r.value); if (Array.isArray(list) && list.length) setProfiles(list); }
        else { await store.set(STORE_KEY, JSON.stringify(DEFAULTS)); }
      } catch (e) { /* storage unavailable — defaults stay in memory */ }
    })();
  }, []);

  const persist = async (list) => { setProfiles(list); if (!hasStore) return; try { await store.set(STORE_KEY, JSON.stringify(list)); } catch (e) { } };
  const selectProfile = (id) => {
    if (id === "__add__") { setShowAdd(true); return; }
    const p = profiles.find((x) => x.id === id);
    if (p) { setProfileId(id); setMargin(String(p.markup)); }
  };
  const saveProfile = () => {
    const nm = newName.trim(); if (!nm) return;
    const mk = Number(newMk) || 0;
    const id = "p" + Date.now();
    const list = [...profiles, { id, name: nm, markup: mk }];
    persist(list); setProfileId(id); setMargin(String(mk));
    setShowAdd(false); setNewName(""); setNewMk("");
  };
  const deleteProfile = () => {
    const p = profiles.find((x) => x.id === profileId);
    if (!p || p.locked) return;
    const list = profiles.filter((x) => x.id !== profileId);
    persist(list); setProfileId("list"); setMargin("0");
  };
  const onMarginEdit = (v) => { setMargin(v); setProfileId("__custom__"); };

  const q = useMemo(() => {
    const w = Number(weight) || 0;
    const f = (Number(fuel) || 0) / 100;
    const p = (Number(margin) || 0) / 100;
    const c = compute(zip, w, skids, loose);
    const allIn = c.lh * (1 + f);
    const quoted = allIn * (1 + p);
    const tp = Math.max(skids + loose, 1);
    const zipFound = String(zip) in MODEL.zone5;
    return { zb: c.zb, lh: c.lh, fuelAmt: c.lh * f, allIn, quoted, marginAmt: quoted - allIn, zipFound, conf: confidence(zipFound, tp, w, loose) };
  }, [zip, weight, skids, loose, fuel, margin, modelTick]);

  const priceRef = useRef(null);
  useEffect(() => { const el = priceRef.current; if (!el) return; el.classList.remove("rc-anim"); void el.offsetWidth; el.classList.add("rc-anim"); }, [q.quoted]);

  const fuelPct = Number(fuel) || 0;
  const marginPct = Number(margin) || 0;
  const marginLabel = marginPct === 0 ? "" : (marginPct > 0 ? `+${marginPct}% margin` : `${marginPct}% discount`);
  const curProfile = profiles.find((x) => x.id === profileId);
  const profName = curProfile && curProfile.id !== "list" && curProfile.id !== "__custom__" ? " · " + curProfile.name : "";
  const subline = `${marginPct === 0 ? "all-in" : "quote"} · ${fuelPct}% fuel${marginLabel ? " · " + marginLabel : ""}${profName}`;
  const confTone = q.conf.key === "core" ? "ok" : q.conf.key === "est" ? "warn" : "";
  const ZONES = useMemo(() => buildZonesM(MODEL), [modelTick]);
  const accVars = { ["--accent"]: ACCENTS[accent], ["--accent-d"]: ACCENTS_D[accent], ["--accent-ring"]: ACCENTS_RING[accent] };

  return (
    <div className={"rc-root" + (embedded ? " rc-embedded" : "")} style={accVars}>
      <style>{CSS}</style>
      <div className="rc-wrap">
        <header className="rc-head">
          <div className="rc-brand">
            <div className="rc-logo">D</div>
            <div>
              <div className="rc-bk">Davis Delivery</div>
              <div className="rc-bs">Uline Rate Console</div>
            </div>
          </div>
          <div className="rc-right">
            <AccentSwitcher accent={accent} setAccent={setAccent} />
            <span className="rc-ver">{APP_VERSION}</span>
          </div>
        </header>

        <Tabs tab={tab} setTab={setTab} />

        {tab === "quote" && (
          <>
            <div className="rc-hero">
              <div className="rc-cat">{marginPct === 0 ? "All-in quote" : "Customer quote"}</div>
              <div className="rc-price"><span className="rc-cur">$</span><span className="rc-amt" ref={priceRef}>{money(q.quoted)}</span></div>
              <div className="rc-sub">{subline}</div>
              <div className="rc-hstatus">
                <span className={"rc-hpill " + confTone}><span className="rc-hdot" />{q.conf.label}</span>
                <span className="rc-hpill">zone {zoneLabel(q.zb)}</span>
                <span className="rc-hpill">{String(zip).slice(0, 5) || "—"}</span>
              </div>
              <div className="rc-sparkwrap">
                <RateCurve zip={zip} skids={skids} loose={loose} weight={weight} accentHex={ACCENTS[accent]} />
              </div>
            </div>

            <div className="rc-card">
              <div className="rc-chead"><div className="rc-ccat">Breakdown</div><h3 className="rc-ctitle">Charge detail</h3></div>
              <div className="rc-ledger">
                <LedgerRow k="Linehaul" v={"$" + money(q.lh)} />
                <LedgerRow k={`Fuel · ${fuelPct}%`} v={"$" + money(q.fuelAmt)} />
                {marginPct !== 0 && (
                  <LedgerRow k={`${marginPct > 0 ? "Margin" : "Discount"} · ${marginPct > 0 ? "+" : ""}${marginPct}%`} v={(marginPct < 0 ? "−" : "+") + "$" + money(Math.abs(q.marginAmt))} disc={marginPct < 0} />
                )}
                <div className="rc-lrow tot"><span className="rc-lk">Quote</span><span className="rc-lv">${money(q.quoted)}</span></div>
              </div>

              <div className="rc-divhd">Shipment</div>
              <div className="rc-form">
                <ProfilePicker
                  profiles={profiles} profileId={profileId} marginPct={marginPct} curProfile={curProfile}
                  showAdd={showAdd} newName={newName} newMk={newMk}
                  selectProfile={selectProfile} saveProfile={saveProfile} deleteProfile={deleteProfile}
                  setShowAdd={setShowAdd} setNewName={setNewName} setNewMk={setNewMk}
                />
                <Field label="Destination ZIP" hint="Sets the rate zone">
                  <input className="rc-input" inputMode="numeric" maxLength={5} value={zip} onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))} />
                </Field>
                <Field label="Weight" hint="Total pounds">
                  <input className="rc-input" inputMode="numeric" value={weight} onChange={(e) => setWeight(e.target.value.replace(/[^0-9]/g, ""))} />
                </Field>
                <Field label="Skids" hint="Pallet count"><Stepper value={skids} set={setSkids} min={0} /></Field>
                <Field label="Loose pieces" hint="Non-palletized"><Stepper value={loose} set={setLoose} min={0} /></Field>
                <Field full label="Fuel surcharge" hint="2025: 23% → 20% (Jun 14) · 2026: 25% (Mar 21) → 28% (Apr 20)">
                  <div className="rc-fuelrow">
                    <div className="rc-presets">
                      {["20", "23", "25", "28"].map((v) => (
                        <button key={v} className={"rc-preset" + (fuel === v ? " on" : "")} onClick={() => setFuel(v)}>{v}%</button>
                      ))}
                    </div>
                    <div className="rc-sfx"><input inputMode="decimal" value={fuel} onChange={(e) => setFuel(e.target.value.replace(/[^0-9.]/g, ""))} /><span className="rc-unit">%</span></div>
                  </div>
                </Field>
                <Field full label="Margin / discount" hint="+ markup or − discount on the quote">
                  <div className="rc-sfx rc-narrow"><input inputMode="decimal" value={margin} onChange={(e) => onMarginEdit(e.target.value.replace(/[^0-9.\-]/g, ""))} /><span className="rc-unit">%</span></div>
                </Field>
              </div>


              <div className="rc-foot">
                <div className={"rc-note " + confTone}><span className="rc-notedot" />{q.conf.note}</div>
                <div className="rc-prov">
                  Modeled from <b>226,073</b> Uline shipments · <b>Jan 2025 – Jun 2026</b>. Base rate flat 18 months. Uline bills on <b>weight and zone</b> — freight class and density don't change the rate (verified on 4,737 shipments). Pallet freight matches within $5 on ~94%.
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "zones" && (
          <>
            <div className="rc-card">
              <div className="rc-chead"><div className="rc-ccat">Minimum charge</div><h3 className="rc-ctitle">Rate zones</h3><p className="rc-csub">Set by destination ZIP. Zones differ almost entirely by minimum charge — per-pound rates are nearly identical (short-haul metro / North GA). Z4 is the far / special tier.</p></div>
              <div className="rc-tblwrap"><ZoneBars accentHex={ACCENTS[accent]} /></div>
            </div>
            <div className="rc-zwrap">
              {["Z1", "Z2", "Z3", "Z4"].map((zk) => (
                <ZoneCard key={zk} name={zk} info={ZONES[zk]} rateRow={MODEL.rateSheet[zk]} />
              ))}
            </div>
          </>
        )}

        {tab === "sheet" && (
          <>
            <RateTable />
            <div className="rc-card">
              <div className="rc-foot" style={{ borderTop: "none" }}>
                <div className="rc-prov">Per-CWT rates decline by weight break: ≈$26/cwt at the minimum, ≈$11/cwt at 500–1,000 lb, ≈$7/cwt at 1,000–2,500 lb. Quote a live figure on the Quote tab.</div>
              </div>
            </div>
          </>
        )}

        {!embedded && <div className="rc-pagefoot">Modeled estimate from billing history · not a published Uline tariff</div>}
      </div>
    </div>
  );
}
