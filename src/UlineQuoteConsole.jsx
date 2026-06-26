import React, { useState, useMemo, useEffect, useRef } from "react";
import M from "./model.json";

// ─────────────────────────────────────────────────────────────
// Uline final-mile rate console — Davis Delivery Service
// Now UI Dashboard styling: light canvas, soft white cards,
// Montserrat, dark gradient hero with a live rate curve, pill
// controls, switchable accent. Pricing model from 226,073 Uline
// DAS shipments (Jan 2025 – Jun 2026). Customer profiles persist via browser storage.
// ─────────────────────────────────────────────────────────────
const APP_VERSION = "v0.9.2";
const LOGO = "data:image/jpeg;base64,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";

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
const ACCESSORIALS = [{ key: "sameday", label: "Same-day", fee: 100 }, { key: "residential", label: "Residential", fee: 50 }, { key: "liftgate", label: "Liftgate", fee: 25 }];

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
.rc-logoimg{ height:32px;width:auto;display:block; }
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
.rc-accs{ display:flex;flex-wrap:wrap;gap:6px; }
.rc-acc-btn{ font-size:12.5px;font-weight:600;color:var(--ink);padding:7px 12px;border-radius:var(--pill);background:var(--card);border:1px solid var(--line-2);transition:background var(--t),color var(--t),border-color var(--t),box-shadow var(--t); }
.rc-acc-btn:hover{ border-color:var(--accent); }
.rc-acc-btn.on{ background:var(--accent);color:#fff;border-color:var(--accent);box-shadow:0 4px 10px -3px var(--accent-ring); }
.rc-acc-btn:focus-visible{ outline:none;box-shadow:0 0 0 2px var(--accent-ring); }
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

function Tabs({ tab, setTab }) {
  return (
    <div className="rc-tabs" role="tablist">
      {[["quote", "Quote"], ["zones", "Zones"], ["sheet", "Rate sheet"]].map(([k, l]) => (
        <button key={k} role="tab" aria-selected={tab === k} className={"rc-tab" + (tab === k ? " on" : "")} onClick={() => setTab(k)}>{l}</button>
      ))}
    </div>
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
  const [accent] = useState("blue"); // fixed brand accent (matches logo)
  const [tab, setTab] = useState("quote");
  const [zip, setZip] = useState(initialZip != null ? String(initialZip).replace(/[^0-9]/g, "").slice(0, 5) : "30127");
  const [weight, setWeight] = useState(initialWeight != null ? String(Math.max(0, Math.round(Number(initialWeight) || 0))) : "1330");
  const [skids, setSkids] = useState(initialSkids != null ? Number(initialSkids) : 3);
  const [loose, setLoose] = useState(initialLoose != null ? Number(initialLoose) : 0);
  const [fuel, setFuel] = useState("28");
  const [margin, setMargin] = useState("0");
  const [acc, setAcc] = useState({ sameday: false, residential: false, liftgate: false });
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
    const accTotal = ACCESSORIALS.reduce((sum, a) => sum + (acc[a.key] ? a.fee : 0), 0);
    const total = quoted + accTotal;
    const tp = Math.max(skids + loose, 1);
    const zipFound = String(zip) in MODEL.zone5;
    return { zb: c.zb, lh: c.lh, fuelAmt: c.lh * f, allIn, quoted, accTotal, total, marginAmt: quoted - allIn, zipFound, conf: confidence(zipFound, tp, w, loose) };
  }, [zip, weight, skids, loose, fuel, margin, acc, modelTick]);

  const priceRef = useRef(null);
  useEffect(() => { const el = priceRef.current; if (!el) return; el.classList.remove("rc-anim"); void el.offsetWidth; el.classList.add("rc-anim"); }, [q.total]);

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
            <img className="rc-logoimg" src={LOGO} alt="Davis Delivery Service" />
            <div className="rc-bs">Uline Rate Console</div>
          </div>
          <div className="rc-right">
            <span className="rc-ver">{APP_VERSION}</span>
          </div>
        </header>

        <Tabs tab={tab} setTab={setTab} />

        {tab === "quote" && (
          <>
            <div className="rc-hero">
              <div className="rc-cat">{marginPct === 0 ? "All-in quote" : "Customer quote"}</div>
              <div className="rc-price"><span className="rc-cur">$</span><span className="rc-amt" ref={priceRef}>{money(q.total)}</span></div>
              <div className="rc-sub">{subline}</div>
              <div className="rc-hstatus">
                <span className={"rc-hpill " + confTone}><span className="rc-hdot" />{q.conf.label}</span>
                <span className="rc-hpill">zone {zoneLabel(q.zb)}</span>
                <span className="rc-hpill">{String(zip).slice(0, 5) || "—"}</span>
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
                {ACCESSORIALS.filter((a) => acc[a.key]).map((a) => (
                  <LedgerRow key={a.key} k={a.label} v={"+$" + money(a.fee)} />
                ))}
                <div className="rc-lrow tot"><span className="rc-lk">Quote</span><span className="rc-lv">${money(q.total)}</span></div>
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
                <Field full label="Accessorials" hint="Flat add-ons — toggle to add to the quote">
                  <div className="rc-accs">
                    {ACCESSORIALS.map((a) => (
                      <button key={a.key} type="button" className={"rc-acc-btn" + (acc[a.key] ? " on" : "")} aria-pressed={acc[a.key]} onClick={() => setAcc((s) => ({ ...s, [a.key]: !s[a.key] }))}>{a.label} ${a.fee}</button>
                    ))}
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
