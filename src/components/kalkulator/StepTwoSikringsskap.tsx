"use client";

import { useMemo } from "react";
import { type PANConfig, IMAGE_CATEGORIES } from "@/lib/calculator-data";
import { calcPAN } from "@/lib/calculator-utils";
import { RadioCardGroup } from "./ui/RadioCardGroup";
import { NumberStepper } from "./ui/NumberStepper";
import { ImageUploadSection } from "./ui/ImageUploadSection";
import { StickyPrice } from "./ui/StickyPrice";
import { CheckCircle } from "lucide-react";

interface StepTwoSikringsskapProps {
  config: PANConfig;
  onChange: (config: PANConfig) => void;
  onBack: () => void;
  onNext: () => void;
}

const FASE_OPTIONS = [
  { value: "tofase", label: "Tofase", sublabel: "2-polet automat" },
  { value: "trefase", label: "Trefase", sublabel: "3-polet automat" },
];
/* TODO: Erstatt sublabel med illustrasjonsbilde av automater */

export function StepTwoSikringsskap({
  config,
  onChange,
  onBack,
  onNext,
}: StepTwoSikringsskapProps) {
  const result = useMemo(() => calcPAN(config), [config]);

  return (
    <div>
      <StickyPrice
        label="Estimat inkl. mva:"
        minAmount={result.minIncVat}
        maxAmount={result.maxIncVat}
      />

      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Oppgradering av eksisterende sikringskap
      </h2>
      <p className="text-sm text-navy-light/60 leading-relaxed mb-6">
        Gi oss informasjon om ditt sikringskap, så gir vi deg et godt tilbud
      </p>

      {/* ── Konfigurasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Konfigurasjon
      </div>

      {/* Tofase / Trefase */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Tofase eller trefase?
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Sjekk automatene i sikringsskapet. Tofase har 2 poler, trefase har 3 poler.
        </p>
        <RadioCardGroup
          options={FASE_OPTIONS}
          value={config.faseType}
          onChange={(faseType) =>
            onChange({
              ...config,
              faseType: faseType as PANConfig["faseType"],
            })
          }
        />
      </div>

      {/* Antall sikringer */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Antall sikringer
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Hvor mange sikringer/kurser har du i skapet?
        </p>
        <NumberStepper
          value={config.fuseCount}
          onChange={(fuseCount) => onChange({ ...config, fuseCount })}
          min={1}
          max={40}
          step={1}
          unit="stk"
        />
      </div>

      {/* Prisinformasjon */}
      <div className="mb-7 py-3 px-4 bg-white/60 rounded-lg border-l-[3px] border-teal-accent text-sm text-navy-light/80 leading-relaxed">
        Grunnpris ca. 8 009 kr inkl. 5 sikringer og overspenningsvern.
        Ekstra sikringer fra 500 kr per stk.
      </div>

      {/* Inkludert */}
      <div className="mb-7 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <p className="text-sm font-semibold text-navy-dark mb-2">Inkludert i prisen</p>
        <ul className="space-y-2">
          {[
            "Overspenningsvern",
            "Nye jordfeilautomater",
            "Arbeid og installasjon",
            "Dokumentasjon",
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
        categories={IMAGE_CATEGORIES.sikringsskap}
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
