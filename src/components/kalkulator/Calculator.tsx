"use client";

import { useReducer, useMemo } from "react";
import {
  type ServiceId,
  type EVConfig,
  type SPConfig,
  type PANConfig,
  type ENKConfig,
  type OPLConfig,
  type VARMConfig,
  type CalculatorState,
  type PriceLine,
  INITIAL_STATE,
  CHARGER_NAMES,
  ENKEL_SERVICES,
} from "@/lib/calculator-data";
import { calcEV, calcSP, calcPAN, calcENK, calcOPL, calcVARM } from "@/lib/calculator-utils";
import StepIndicator from "./StepIndicator";
import StepOne from "./StepOne";
import { StepTwoElbillader } from "./StepTwoElbillader";
import { StepTwoSpotter } from "./StepTwoSpotter";
import { StepTwoSikringsskap } from "./StepTwoSikringsskap";
import { StepTwoEnkelJobb } from "./StepTwoEnkelJobb";
import { StepTwoOpplegg } from "./StepTwoOpplegg";
import { StepTwoVarmematte } from "./StepTwoVarmematte";
import { StepThree } from "./StepThree";
import type { AddressValue } from "./ui/AddressAutocompleteField";

// ---------------------------------------------------------------------------
// Price result type (all services now use range)
// ---------------------------------------------------------------------------

export type CalcPriceResult =
  | { type: "range"; lines: PriceLine[]; minIncVat: number; maxIncVat: number }
  | { type: "fixed"; lines: PriceLine[]; exVat: number; incVat: number };

// ---------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------

type Action =
  | { type: "SET_SERVICE"; service: ServiceId }
  | { type: "SET_STEP"; step: 1 | 2 | 3 }
  | { type: "UPDATE_EV"; config: EVConfig }
  | { type: "UPDATE_SP"; config: SPConfig }
  | { type: "UPDATE_PAN"; config: PANConfig }
  | { type: "UPDATE_ENK"; config: ENKConfig }
  | { type: "UPDATE_OPL"; config: OPLConfig }
  | { type: "UPDATE_VARM"; config: VARMConfig }
  | { type: "TOGGLE_CROSS_SELL"; itemId: string }
  | { type: "TOGGLE_NORTH_TRYGG" }
  | { type: "SET_SUBMITTED" }
  | { type: "RESTART" };

type State = CalculatorState & { isSubmitted: boolean };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SERVICE":
      return { ...state, service: action.service };
    case "SET_STEP":
      return { ...state, step: action.step };
    case "UPDATE_EV":
      return { ...state, evConfig: action.config };
    case "UPDATE_SP":
      return { ...state, spConfig: action.config };
    case "UPDATE_PAN":
      return { ...state, panConfig: action.config };
    case "UPDATE_ENK":
      return { ...state, enkConfig: action.config };
    case "UPDATE_OPL":
      return { ...state, oplConfig: action.config };
    case "UPDATE_VARM":
      return { ...state, varmConfig: action.config };
    case "TOGGLE_CROSS_SELL":
      return {
        ...state,
        crossSell: {
          ...state.crossSell,
          [action.itemId]: !state.crossSell[action.itemId],
        },
      };
    case "TOGGLE_NORTH_TRYGG":
      return { ...state, northTrygg: !state.northTrygg };
    case "SET_SUBMITTED":
      return { ...state, isSubmitted: true };
    case "RESTART":
      return { ...INITIAL_STATE, isSubmitted: false };
    default:
      return state;
  }
}

// ---------------------------------------------------------------------------
// Helper: collect all images from configs
// ---------------------------------------------------------------------------

function collectAllImages(state: CalculatorState): File[] {
  const allFiles: File[] = [];
  const configs = [state.evConfig, state.spConfig, state.panConfig, state.enkConfig, state.oplConfig, state.varmConfig];
  for (const cfg of configs) {
    if ("images" in cfg && cfg.images) {
      for (const files of Object.values(cfg.images)) {
        allFiles.push(...files);
      }
    }
  }
  return allFiles;
}

// ---------------------------------------------------------------------------
// Build config summary for Monday message
// ---------------------------------------------------------------------------

function buildConfigSummary(state: CalculatorState): string {
  const lines: string[] = [];

  if (state.service === "elbillader") {
    const c = state.evConfig;
    const placementLabels: Record<string, string> = {
      husvegg: "Husvegg",
      "garasje-tilknyttet": "Garasje (tilknyttet husvegg)",
      "garasje-frittstaaende": "Frittstående garasje",
      ladestolpe: "Ladestolpe",
    };
    const nettLabels: Record<string, string> = { tn: "TN-nett", it: "IT-nett", unknown: "Vet ikke" };

    lines.push(`Lader: ${CHARGER_NAMES[c.charger] ?? c.charger}`);
    lines.push(`Plassering: ${placementLabels[c.placement] ?? c.placement}`);
    lines.push(`Netttype: ${nettLabels[c.nettType]}`);
  }

  if (state.service === "spotter") {
    const c = state.spConfig;
    const roomLabels: Record<string, string> = { standard: "Standardrom", vatrom: "Våtrom" };

    lines.push(`Farge: ${c.spotColor}`);
    lines.push(`Antall: ${c.count} stk`);
    lines.push(`Romtype: ${roomLabels[c.roomType]}`);
    lines.push(`Montering: ${c.mountType === "eksisterende-hull" ? "Eksisterende hull" : "Nye hull"}`);
    lines.push(`Dimmer: ${c.dimmer ? `Ja (${c.dimmerCount} stk)` : "Nei"}`);
  }

  if (state.service === "sikringsskap") {
    const c = state.panConfig;
    lines.push(`Fasetype: ${c.faseType === "tofase" ? "Tofase" : "Trefase"}`);
    lines.push(`Antall sikringer: ${c.fuseCount}`);
  }

  if (state.service === "enkel") {
    const c = state.enkConfig;
    const svc = ENKEL_SERVICES.find((s) => s.id === c.serviceType);
    if (svc) lines.push(`Tjeneste: ${svc.label}`);
    lines.push(`Antall: ${c.quantity} stk`);
    if (c.preferredFrom || c.preferredTo) {
      lines.push(`Ønsket periode: ${c.preferredFrom || "?"} – ${c.preferredTo || "?"}`);
    }
  }

  if (state.service === "opplegg") {
    const c = state.oplConfig;
    lines.push(`Type: ${c.anleggType === "aapent" ? "Åpent anlegg" : "Skjult anlegg"}`);
    lines.push(`Antall punkter: ${c.antallPunkter}`);
    lines.push(`Meter per punkt: ${c.meterPerPunkt}`);
  }

  if (state.service === "varmematte") {
    const c = state.varmConfig;
    lines.push(`Romstørrelse: ${c.romStorrelse} m²`);
    lines.push(`Romtype: ${c.romType}`);
    lines.push(`Hindringer: ${c.harHindringer ? "Ja" : "Nei"}`);
    lines.push(`Underlag: ${c.underlag}`);
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    isSubmitted: false,
  });

  // Calculate current price based on selected service
  const priceResult: CalcPriceResult = useMemo(() => {
    switch (state.service) {
      case "elbillader": {
        const r = calcEV(state.evConfig);
        return { type: "range", lines: r.lines, minIncVat: r.minIncVat, maxIncVat: r.maxIncVat };
      }
      case "spotter": {
        const r = calcSP(state.spConfig);
        return { type: "range", lines: r.lines, minIncVat: r.minIncVat, maxIncVat: r.maxIncVat };
      }
      case "sikringsskap": {
        const r = calcPAN(state.panConfig);
        return { type: "range", lines: r.lines, minIncVat: r.minIncVat, maxIncVat: r.maxIncVat };
      }
      case "enkel": {
        const r = calcENK(state.enkConfig);
        return { type: "range", lines: r.lines, minIncVat: r.minIncVat, maxIncVat: r.maxIncVat };
      }
      case "opplegg": {
        const r = calcOPL(state.oplConfig);
        return { type: "range", lines: r.lines, minIncVat: r.minIncVat, maxIncVat: r.maxIncVat };
      }
      case "varmematte": {
        const r = calcVARM(state.varmConfig);
        return { type: "range", lines: r.lines, minIncVat: r.minIncVat, maxIncVat: r.maxIncVat };
      }
      default:
        return { type: "fixed", lines: [] as PriceLine[], exVat: 0, incVat: 0 };
    }
  }, [
    state.service,
    state.evConfig,
    state.spConfig,
    state.panConfig,
    state.enkConfig,
    state.oplConfig,
    state.varmConfig,
  ]);

  // Navigation helper
  const goToStep = (step: 1 | 2 | 3) => {
    dispatch({ type: "SET_STEP", step });
    const el = document.getElementById("calculator-top");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmitLead = async (data: {
    name: string;
    phone: string;
    email: string;
    address: AddressValue;
    haster: boolean;
    files: File[];
  }) => {
    const formData = new FormData();
    formData.append("source", "kalkulator");
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    if (data.address.address.trim()) {
      formData.append("address", data.address.address.trim());
      if (data.address.placeId) formData.append("addressPlaceId", data.address.placeId);
      if (typeof data.address.lat === "number") formData.append("addressLat", String(data.address.lat));
      if (typeof data.address.lng === "number") formData.append("addressLng", String(data.address.lng));
    }
    formData.append("haster", String(data.haster));
    if (state.service) formData.append("service", state.service);
    if (state.service === "enkel") {
      if (state.enkConfig.preferredFrom) formData.append("preferredFrom", state.enkConfig.preferredFrom);
      if (state.enkConfig.preferredTo) formData.append("preferredTo", state.enkConfig.preferredTo);
    }

    // Estimate: use average of range or exact value
    const estimate = priceResult.type === "range"
      ? Math.round((priceResult.minIncVat + priceResult.maxIncVat) / 2)
      : Math.round(priceResult.incVat);
    formData.append("estimate", String(estimate));

    // Bygg oppsummering av alle valg fra steg 2
    const configSummary = buildConfigSummary(state);
    if (configSummary) {
      formData.append("message", configSummary);
    }

    // Add files from contact form
    for (const file of data.files) formData.append("files", file);

    // Add images from step 2 configs
    const step2Images = collectAllImages(state);
    for (const file of step2Images) formData.append("files", file);

    try {
      await fetch("/api/submit-lead", { method: "POST", body: formData });
    } catch {
      console.error("[kalkulator] Feil ved innsending av lead");
    }

    dispatch({ type: "SET_SUBMITTED" });
  };

  return (
    <div id="calculator-top">
      {/* Step Indicator - sticky */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <StepIndicator currentStep={state.step} />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 py-10 max-[560px]:px-4 max-[560px]:py-6">
        {state.step === 1 && (
          <StepOne
            selected={state.service}
            onSelect={(svc) =>
              dispatch({ type: "SET_SERVICE", service: svc })
            }
            onNext={() => goToStep(2)}
          />
        )}

        {state.step === 2 && state.service === "elbillader" && (
          <StepTwoElbillader
            config={state.evConfig}
            onChange={(config) => dispatch({ type: "UPDATE_EV", config })}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {state.step === 2 && state.service === "spotter" && (
          <StepTwoSpotter
            config={state.spConfig}
            onChange={(config) => dispatch({ type: "UPDATE_SP", config })}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {state.step === 2 && state.service === "sikringsskap" && (
          <StepTwoSikringsskap
            config={state.panConfig}
            onChange={(config) => dispatch({ type: "UPDATE_PAN", config })}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {state.step === 2 && state.service === "enkel" && (
          <StepTwoEnkelJobb
            config={state.enkConfig}
            onChange={(config) => dispatch({ type: "UPDATE_ENK", config })}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {state.step === 2 && state.service === "opplegg" && (
          <StepTwoOpplegg
            config={state.oplConfig}
            onChange={(config) => dispatch({ type: "UPDATE_OPL", config })}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {state.step === 2 && state.service === "varmematte" && (
          <StepTwoVarmematte
            config={state.varmConfig}
            onChange={(config) => dispatch({ type: "UPDATE_VARM", config })}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {state.step === 3 && (
          <StepThree
            state={state}
            priceResult={priceResult}
            onCrossSellToggle={(itemId: string) =>
              dispatch({ type: "TOGGLE_CROSS_SELL", itemId })
            }
            onNorthTryggToggle={() =>
              dispatch({ type: "TOGGLE_NORTH_TRYGG" })
            }
            onBack={() => goToStep(2)}
            onRestart={() => {
              dispatch({ type: "RESTART" });
              goToStep(1);
            }}
            onSubmitLead={(data: { name: string; phone: string; email: string; address: AddressValue; haster: boolean; files: File[] }) => {
              handleSubmitLead(data);
            }}
            isSubmitted={state.isSubmitted}
          />
        )}
      </div>
    </div>
  );
}
