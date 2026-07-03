"use client";

import { useState } from "react";
import type {
  CalculatorState,
  CrossSellItem,
} from "@/lib/calculator-data";
import { CROSS_SELL_ITEMS, ENKEL_SERVICES } from "@/lib/calculator-data";
import { formatKr } from "@/lib/calculator-utils";
import type { CalcPriceResult } from "./Calculator";
import { PriceBox } from "./ui/PriceBox";
import { ContactForm } from "./ui/ContactForm";
import type { AddressValue } from "./ui/AddressAutocompleteField";

interface StepThreeProps {
  state: CalculatorState;
  priceResult: CalcPriceResult;
  onCrossSellToggle: (itemId: string) => void;
  onNorthTryggToggle: () => void;
  onBack: () => void;
  onRestart: () => void;
  onSubmitLead: (data: {
    name: string;
    phone: string;
    email: string;
    address: AddressValue;
    haster: boolean;
    files: File[];
  }) => void;
  isSubmitted: boolean;
}

function getServiceHeader(state: CalculatorState): string {
  switch (state.service) {
    case "elbillader":
      return "Elbillader";
    case "spotter":
      return "Spotter installasjon";
    case "sikringsskap":
      return "Sikringsskap";
    case "enkel": {
      const svc = ENKEL_SERVICES.find(
        (s) => s.id === state.enkConfig.serviceType
      );
      return svc?.label ?? "Enkel jobb";
    }
    case "opplegg":
      return "Opplegg til";
    case "varmematte":
      return "Varmematte / varmekabel";
    default:
      return "";
  }
}

export function StepThree({
  state,
  priceResult,
  onCrossSellToggle,
  onNorthTryggToggle,
  onRestart,
  onSubmitLead,
  isSubmitted,
}: StepThreeProps) {
  const [pdfLoading, setPdfLoading] = useState(false);

  const isEnkel = state.service === "enkel";
  const crossSellItems: CrossSellItem[] =
    !isEnkel && state.service
      ? (CROSS_SELL_ITEMS[state.service] ?? []).filter((item) => {
          if (
            state.service === "spotter" &&
            item.id === "cs-dimmer" &&
            state.spConfig.dimmer
          ) {
            return false;
          }
          return true;
        })
      : [];

  // Build PriceBox props based on result type
  const priceBoxProps =
    priceResult.type === "range"
      ? {
          lines: priceResult.lines,
          minIncVat: priceResult.minIncVat,
          maxIncVat: priceResult.maxIncVat,
        }
      : {
          lines: priceResult.lines,
          exVat: priceResult.exVat,
          incVat: priceResult.incVat,
          isFixedPrice: isEnkel,
        };

  // For PDF: use average or exact
  const pdfIncVat =
    priceResult.type === "range"
      ? (priceResult.minIncVat + priceResult.maxIncVat) / 2
      : priceResult.incVat;
  const pdfExVat =
    priceResult.type === "range"
      ? pdfIncVat / 1.25
      : priceResult.exVat;

  return (
    <div>
      {/* Title */}
      <h2 className="text-2xl font-extrabold text-navy-dark text-center mb-1">
        Ditt prisestimat
      </h2>
      <p className="text-sm text-navy-light/70 text-center mb-4">
        Basert på dine valg, endelig pris avtales ved befaring
      </p>

      {/* Service name header */}
      <h3 className="text-lg font-bold text-navy-dark mb-2">
        {getServiceHeader(state)}
      </h3>

      {/* PriceBox */}
      <PriceBox {...priceBoxProps} />

      {/* Estimate notice */}
      <div className="mt-4 py-3 px-4 bg-white/60 rounded-lg border-l-[3px] border-teal-accent text-sm text-navy-light/80 leading-relaxed">
        Dette er et estimat. Endelig pris avtales etter befaring.
      </div>

      {/* Trust signals */}
      <ul className="mt-4.5 py-4 px-4 pl-8 bg-white/50 rounded-xl border-l-[3px] border-teal-accent list-none">
        {[
          "Autorisert elektroinstallatør",
          "Garanti på alt arbeid",
          "Samsvarserklæring inkludert",
          "5.0/5 stjerner på Google",
        ].map((text) => (
          <li
            key={text}
            className="text-sm text-navy-light/80 leading-[1.8] pl-3.5 relative before:content-['–'] before:absolute before:left-0 before:text-teal-accent"
          >
            {text}
          </li>
        ))}
      </ul>

      {/* Export buttons */}
      <div className="flex gap-2.5 mt-4 flex-wrap">
        <button
          type="button"
          disabled={pdfLoading}
          onClick={async () => {
            setPdfLoading(true);
            try {
              const { generatePDF } = await import("./pdf/generate-pdf");
              const selectedCrossSell = crossSellItems.filter(
                (item) => !!state.crossSell[item.id]
              );
              await generatePDF({
                serviceHeader: getServiceHeader(state),
                lines: priceResult.lines,
                exVat: pdfExVat,
                incVat: pdfIncVat,
                isRange: priceResult.type === "range",
                minIncVat: priceResult.type === "range" ? priceResult.minIncVat : undefined,
                maxIncVat: priceResult.type === "range" ? priceResult.maxIncVat : undefined,
                crossSellItems:
                  selectedCrossSell.length > 0 ? selectedCrossSell : undefined,
                northTrygg: state.northTrygg,
              });
            } catch (err) {
              console.error("PDF generation failed:", err);
            } finally {
              setPdfLoading(false);
            }
          }}
          className="flex-1 py-2.5 px-3.5 border-2 border-navy-light/20 rounded-xl bg-white text-navy-light text-sm font-semibold cursor-pointer hover:border-navy-light hover:bg-navy-dark/5 transition-all text-center min-w-[140px] disabled:opacity-50 disabled:cursor-wait"
        >
          {pdfLoading ? "Genererer PDF..." : "Lagre prisestimatet"}
        </button>
      </div>

      {/* Cross-sell section */}
      {crossSellItems.length > 0 && (
        <div className="mt-5 p-4 bg-white/50 rounded-2xl border border-navy-light/20">
          <h4 className="text-base font-bold text-navy-dark mb-2.5">
            Relaterte tjenester
          </h4>
          {crossSellItems.map((item) => {
            const active = !!state.crossSell[item.id];
            return (
              <div
                key={item.id}
                onClick={() => onCrossSellToggle(item.id)}
                className={`flex justify-between items-center p-2.5 px-3 border-2 rounded-xl mb-2 last:mb-0 bg-white cursor-pointer transition-all ${
                  active
                    ? "border-green-dark bg-green-light/30"
                    : "border-navy-light/20"
                }`}
              >
                <label htmlFor={`cross-sell-${item.id}`} className="flex items-center gap-2 cursor-pointer">
                  <input
                    id={`cross-sell-${item.id}`}
                    type="checkbox"
                    checked={active}
                    onChange={(e) => { e.stopPropagation(); onCrossSellToggle(item.id); }}
                    className="w-4 h-4 accent-green-dark"
                  />
                  <span className="text-sm font-medium text-navy-dark">
                    {item.name}
                  </span>
                </label>
                <span className="text-sm font-semibold text-navy-light whitespace-nowrap">
                  {formatKr(item.price)}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* North Trygg section */}
      <div
        onClick={() => onNorthTryggToggle()}
        className="mt-5 p-4.5 bg-gradient-to-br from-navy-dark/5 to-navy-dark/10 rounded-2xl border-2 border-navy-light cursor-pointer transition-all"
      >
        <h4 className="text-base font-bold text-navy-dark">
          North Trygg, serviceavtale
        </h4>
        <ul className="list-none mt-2 mb-3">
          {[
            "Årlig elkontroll",
            "Prioritert responstid (24t)",
            "10% rabatt på fremtidige jobber",
            "Samsvarserklæring oppdatert årlig",
          ].map((text) => (
            <li
              key={text}
              className="text-sm text-navy-dark/70 py-0.5 before:content-['✓_'] before:text-green-dark before:font-bold before:mr-1.5"
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-navy-dark">
            fra 199 kr/mnd
          </span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-navy-light">
            <input
              id="north-trygg"
              type="checkbox"
              checked={state.northTrygg}
              onChange={() => onNorthTryggToggle()}
              onClick={(e) => e.stopPropagation()}
              className="w-4 h-4 accent-navy-light cursor-pointer"
            />
            Ja, jeg er interessert
          </span>
        </div>
      </div>

      {/* Contact form */}
      <div className="mt-6">
        <ContactForm onSubmit={onSubmitLead} isSubmitted={isSubmitted} />
      </div>

      {/* Restart button */}
      <button
        type="button"
        onClick={onRestart}
        className="w-full py-2.5 bg-transparent text-navy-light/60 text-sm font-semibold rounded-lg border border-navy-light/20 cursor-pointer mt-2 hover:bg-navy-dark/5 hover:text-navy-light transition-all"
      >
        Start kalkulatoren på nytt
      </button>
    </div>
  );
}
