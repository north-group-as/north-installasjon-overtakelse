// ---------------------------------------------------------------------------
// North Installasjon — Priskalkulator: Beregningsfunksjoner
// ---------------------------------------------------------------------------

import {
  MARKUP,
  VAT,
  PRICES,
  CHARGER_NAMES,
  ENKEL_SERVICES,
  type EVConfig,
  type SPConfig,
  type PANConfig,
  type ENKConfig,
  type OPLConfig,
  type VARMConfig,
  type PriceRangeResult,
} from "./calculator-data";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function formatKr(n: number): string {
  return Math.round(n).toLocaleString("nb-NO") + "\u00a0kr";
}

export function formatKrRange(min: number, max: number): string {
  return `ca. ${formatKr(min)} – ${formatKr(max)}`;
}

/** Stegvis rabatt: grunnpris for første enhet(er), ekstraPris for resten */
function stegvisRabatt(grunnpris: number, ekstraPris: number, antall: number, grenseverdi: number = 1): number {
  if (antall <= 0) return 0;
  if (antall <= grenseverdi) return grunnpris;
  return grunnpris + (antall - grenseverdi) * ekstraPris;
}

// ---------------------------------------------------------------------------
// Elbillader (prisintervall — ingen synlige delpriser)
// ---------------------------------------------------------------------------

export function calcEV(config: EVConfig): PriceRangeResult {
  const chargerCost = (PRICES.charger[config.charger] ?? 0) * MARKUP;

  // Gjennomboring fast inkludert (750 kr)
  const drillCost = PRICES.gjennomboring * MARKUP;

  // Automat og OV alltid inkludert i prisen (intern beregning)
  const automatOvCost = 1850 * MARKUP; // ca-verdi for automat + OV

  // Intern beregning: 3-5 timer arbeid + kabel (estimert 10m snitt)
  const cableCost = 10 * 100 * MARKUP; // estimert kabellengde
  const minHours = 3;
  const maxHours = 5;
  const minWorkCost = PRICES.callout + minHours * PRICES.hourly;
  const maxWorkCost = PRICES.callout + maxHours * PRICES.hourly + maxHours * PRICES.hourly * PRICES.risk;

  const materialCost = chargerCost + cableCost + drillCost + automatOvCost;
  const minExVat = materialCost + minWorkCost;
  const maxExVat = materialCost + maxWorkCost;

  return {
    lines: [],
    minIncVat: Math.round(minExVat * VAT),
    maxIncVat: Math.round(maxExVat * VAT),
  };
}

// ---------------------------------------------------------------------------
// Spotter (prisintervall — ingen synlige delpriser)
// ---------------------------------------------------------------------------

export function calcSP(config: SPConfig): PriceRangeResult {
  const spotCost = config.count * PRICES.spotAlfaEco * MARKUP;

  // Dimmer: 1299 kr per stk med stegvis rabatt
  const dimmerCost = config.dimmer
    ? stegvisRabatt(PRICES.dimmerSP * MARKUP, PRICES.dimmerSP * MARKUP * 0.85, config.dimmerCount, 1)
    : 0;

  // Intern timeberegning: 0.3-0.7t per spotter
  const minHoursPerSpot = 0.3;
  const maxHoursPerSpot = 0.7;
  const minHours = Math.max(1, config.count * minHoursPerSpot);
  const maxHours = config.count * maxHoursPerSpot;

  const minLaborCost = minHours * PRICES.hourly;
  const maxLaborCost = maxHours * PRICES.hourly;
  // Stegvis rabatt ved mange spotter (over 10 stk)
  const minDiscount = config.count > 10 ? -(minLaborCost * 0.07) : 0;
  const maxDiscount = config.count > 10 ? -(maxLaborCost * 0.07) : 0;

  const minWorkCost = PRICES.callout + minLaborCost + minDiscount;
  const maxWorkCost = PRICES.callout + maxLaborCost + maxDiscount;

  const materialCost = spotCost + dimmerCost;
  const minExVat = materialCost + minWorkCost;
  const maxExVat = materialCost + maxWorkCost;

  return {
    lines: [],
    minIncVat: Math.round(minExVat * VAT),
    maxIncVat: Math.round(maxExVat * VAT),
  };
}

// ---------------------------------------------------------------------------
// Sikringsskap (prisintervall — grunnpris 8009 for 5 sikringer + OV)
// ---------------------------------------------------------------------------

export function calcPAN(config: PANConfig): PriceRangeResult {
  const ekstra = Math.max(0, config.fuseCount - PRICES.panGratisSikringer);
  const base = PRICES.panGrunnpris + ekstra * PRICES.panEkstraPerSikring;

  // Trefase er noe dyrere enn tofase
  const faseFaktor = config.faseType === "trefase" ? 1.05 : 1.0;

  return {
    lines: [],
    minIncVat: Math.round(base * faseFaktor * 0.9),
    maxIncVat: Math.round(base * faseFaktor * 1.15),
  };
}

// ---------------------------------------------------------------------------
// Enkel jobb (prisspenn med stegvis rabatt)
// ---------------------------------------------------------------------------

export function calcENK(config: ENKConfig): PriceRangeResult {
  const service = ENKEL_SERVICES.find((s) => s.id === config.serviceType);
  if (!service) {
    return { lines: [], minIncVat: 0, maxIncVat: 0 };
  }

  const total = stegvisRabatt(service.basePrice, service.extraPrice, config.quantity, 1);

  return {
    lines: [],
    minIncVat: Math.round(total * 0.9),
    maxIncVat: Math.round(total * 1.1),
  };
}

// ---------------------------------------------------------------------------
// Opplegg til (prisspenn)
// ---------------------------------------------------------------------------

export function calcOPL(config: OPLConfig): PriceRangeResult {
  const ekstraMeter = Math.max(0, config.meterPerPunkt - 5);
  const prPerPunkt = PRICES.oppleggPunkt + ekstraMeter * PRICES.oppleggEkstraMeter;
  const total = config.antallPunkter * prPerPunkt;

  // Åpent anlegg er billigere, skjult er dyrere
  const faktor = config.anleggType === "aapent" ? 0.9 : 1.1;

  return {
    lines: [],
    minIncVat: Math.round(total * faktor * 0.95 * VAT),
    maxIncVat: Math.round(total * faktor * 1.05 * VAT),
  };
}

// ---------------------------------------------------------------------------
// Varmematte (prisspenn)
// ---------------------------------------------------------------------------

export function calcVARM(config: VARMConfig): PriceRangeResult {
  const basePrPerM2 = config.underlag === "betong" ? PRICES.varmeBaseBetong : PRICES.varmeBaseAnnet;
  let areal = config.romStorrelse;

  // Hindringer reduserer effektivt areal med ca 15%
  if (config.harHindringer) areal = Math.max(1, areal * 0.85);

  const total = areal * basePrPerM2;

  return {
    lines: [],
    minIncVat: Math.round(total * 0.9 * VAT),
    maxIncVat: Math.round(total * 1.15 * VAT),
  };
}
