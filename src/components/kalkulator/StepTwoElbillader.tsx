"use client";

import { useState, useMemo } from "react";
import {
  type EVConfig,
  CHARGER_DESCRIPTIONS,
  CHARGER_PRICE_RANGES,
  IMAGE_CATEGORIES,
} from "@/lib/calculator-data";
import { calcEV } from "@/lib/calculator-utils";
import { RadioCardGroup } from "./ui/RadioCardGroup";
import { ImageUploadSection } from "./ui/ImageUploadSection";
import { StickyPrice } from "./ui/StickyPrice";
import { Info, CheckCircle } from "lucide-react";

interface StepTwoElbilladerProps {
  config: EVConfig;
  onChange: (config: EVConfig) => void;
  onBack: () => void;
  onNext: () => void;
}

const CHARGER_OPTIONS = [
  { value: "zaptec-go", label: "Zaptec Go", sublabel: CHARGER_PRICE_RANGES["zaptec-go"], image: "/images/kalkulator/zaptec-go.svg" },
  { value: "zaptec-go2", label: "Zaptec Go 2", sublabel: CHARGER_PRICE_RANGES["zaptec-go2"], image: "/images/kalkulator/zaptec-go2.svg" },
  { value: "easee", label: "Easee", sublabel: CHARGER_PRICE_RANGES["easee"], image: "/images/kalkulator/easee.svg" },
];

const PLACEMENT_OPTIONS = [
  { value: "husvegg", label: "Husvegg" },
  { value: "garasje-tilknyttet", label: "Garasje (tilknyttet)" },
  { value: "garasje-frittstaaende", label: "Frittstående garasje" },
  { value: "ladestolpe", label: "Ladestolpe" },
];

const NETT_OPTIONS = [
  { value: "unknown", label: "Vet ikke" },
  { value: "tn", label: "TN-nett" },
  { value: "it", label: "IT-nett" },
];

export function StepTwoElbillader({
  config,
  onChange,
  onBack,
  onNext,
}: StepTwoElbilladerProps) {
  const [showDescription, setShowDescription] = useState(false);
  const result = useMemo(() => calcEV(config), [config]);

  return (
    <div>
      <StickyPrice
        label="Estimat inkl. mva:"
        minAmount={result.minIncVat}
        maxAmount={result.maxIncVat}
      />

      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Konfigurer elbilladerinstallasjon
      </h2>
      <p className="text-sm text-navy-light/60 leading-relaxed mb-6">
        Velg lader og gi oss informasjon om installasjonen, så gir vi deg et
        godt tilbud
      </p>

      {/* ── Velg lader ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Velg lader
      </div>

      {/* Velg ladertype */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Velg ladertype
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Prisene er ca-priser inkl. mva for komplett installasjon
        </p>
        <RadioCardGroup
          options={CHARGER_OPTIONS}
          value={config.charger}
          onChange={(charger) => onChange({ ...config, charger })}
        />

        {/* Lader-beskrivelse */}
        <button
          type="button"
          onClick={() => setShowDescription(!showDescription)}
          className="mt-2 flex items-center gap-1.5 text-sm text-teal-accent hover:text-teal-accent/80 transition-colors cursor-pointer"
        >
          <Info size={14} />
          <span>{showDescription ? "Skjul beskrivelse" : "Les mer om laderen"}</span>
        </button>
        {showDescription && (
          <div className="mt-2 p-3 bg-navy-dark/5 rounded-xl text-sm text-navy-light/80 leading-relaxed">
            {CHARGER_DESCRIPTIONS[config.charger]}
          </div>
        )}
      </div>

      {/* ── Om installasjonen ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Om installasjonen
      </div>

      {/* Plassering */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Plassering
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Hvor ønsker du at ladestasjonen skal plasseres?
        </p>
        <RadioCardGroup
          options={PLACEMENT_OPTIONS}
          value={config.placement}
          onChange={(placement) =>
            onChange({
              ...config,
              placement: placement as EVConfig["placement"],
            })
          }
        />
      </div>

      {/* ── Ditt anlegg ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Ditt anlegg
      </div>

      {/* Netttype */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Hva slags nett har du?
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Kabeltypen avhenger av netttype. Hvis du er usikker, velg &quot;Vet
          ikke&quot; og last opp bilde av sikringsskapet.
        </p>
        <RadioCardGroup
          options={NETT_OPTIONS}
          value={config.nettType}
          onChange={(nettType) =>
            onChange({
              ...config,
              nettType: nettType as EVConfig["nettType"],
            })
          }
        />
      </div>

      {/* ── Inkludert i prisen ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Inkludert i prisen
      </div>

      <div className="mb-7 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <ul className="space-y-2.5">
          {[
            "Gjennomboring (750 kr)",
            "Dokumentasjon og samsvarserklæring",
            "Automatsikring",
            "Overspenningsvern",
            "Kabel og arbeid",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-navy-dark">
              <CheckCircle size={16} className="text-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Dokumentasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Dokumentasjon
      </div>

      {/* Bildeopplasting */}
      <ImageUploadSection
        categories={IMAGE_CATEGORIES.elbillader}
        images={config.images}
        onChange={(images) => onChange({ ...config, images })}
      />

      <div className="flex gap-2.5 mt-7 flex-wrap">
        <button
          type="button"
          onClick={onBack}
          className="py-3.5 px-6 rounded-2xl text-base font-bold cursor-pointer bg-transparent text-navy-light border-2 border-navy-light flex-1 flex items-center justify-center gap-1.5 hover:bg-navy-dark/5 transition-colors"
        >
          ← Tilbake
        </button>
        <button
          type="button"
          onClick={onNext}
          className="py-3.5 px-6 rounded-2xl text-base font-bold cursor-pointer bg-teal-accent text-white border-none flex-[2] flex items-center justify-center gap-1.5 hover:bg-teal-accent/90 shadow-sm hover:shadow-md transition-all"
        >
          Se oppsummering →
        </button>
      </div>
    </div>
  );
}
