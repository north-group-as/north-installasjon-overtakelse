"use client";

import { useMemo } from "react";
import { type OPLConfig, IMAGE_CATEGORIES } from "@/lib/calculator-data";
import { calcOPL } from "@/lib/calculator-utils";
import { RadioCardGroup } from "./ui/RadioCardGroup";
import { NumberStepper } from "./ui/NumberStepper";
import { ImageUploadSection } from "./ui/ImageUploadSection";
import { StickyPrice } from "./ui/StickyPrice";
import { Info } from "lucide-react";

interface StepTwoOppleggProps {
  config: OPLConfig;
  onChange: (config: OPLConfig) => void;
  onBack: () => void;
  onNext: () => void;
}

const ANLEGG_OPTIONS = [
  { value: "aapent", label: "Åpent anlegg", sublabel: "Synlig rørføring langs vegg/tak" },
  { value: "skjult", label: "Skjult anlegg", sublabel: "Innfrest eller skjult i vegg" },
];

export function StepTwoOpplegg({
  config,
  onChange,
  onBack,
  onNext,
}: StepTwoOppleggProps) {
  const result = useMemo(() => calcOPL(config), [config]);

  return (
    <div>
      <StickyPrice
        label="Estimat inkl. mva:"
        minAmount={result.minIncVat}
        maxAmount={result.maxIncVat}
      />

      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Opplegg til
      </h2>
      <p className="text-sm text-navy-light/60 leading-relaxed mb-6">
        Nye elektriske punkter i rom
      </p>

      {/* ── Konfigurasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Konfigurasjon
      </div>

      {/* Anlegg-type */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Type anlegg
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Åpent anlegg er raskere og billigere. Skjult anlegg gir et renere utseende.
        </p>
        <RadioCardGroup
          options={ANLEGG_OPTIONS}
          value={config.anleggType}
          onChange={(anleggType) =>
            onChange({
              ...config,
              anleggType: anleggType as OPLConfig["anleggType"],
            })
          }
        />
      </div>

      {/* Antall punkter */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Antall punkter
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Antall nye elektriske bokser/punkter som skal legges.
        </p>
        <NumberStepper
          value={config.antallPunkter}
          onChange={(antallPunkter) => onChange({ ...config, antallPunkter })}
          min={1}
          max={20}
          step={1}
          unit="stk"
        />
      </div>

      {/* Meter per punkt */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Meter per punkt
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Estimert avstand per punkt fra nærmeste tilkoblingspunkt.
        </p>
        <NumberStepper
          value={config.meterPerPunkt}
          onChange={(meterPerPunkt) => onChange({ ...config, meterPerPunkt })}
          min={1}
          max={30}
          step={1}
          unit="meter"
        />
        <p className="mt-2 text-xs text-navy-light/50 flex items-center gap-1.5">
          <Info size={12} />
          Standard inntil 5 meter. 100 kr ekstra per meter utover.
        </p>
      </div>

      {/* Infoboks */}
      <div className="mb-7 p-4 bg-navy-dark/5 rounded-xl border border-navy-light/20">
        <p className="text-sm text-navy-dark leading-relaxed">
          Hver punkt inkluderer rør, kabel, boks og arbeid.
          Pris 1 450 kr per punkt (inntil 5 meter).
        </p>
      </div>

      {/* ── Dokumentasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Dokumentasjon
      </div>

      {/* Bildeopplasting */}
      <ImageUploadSection
        categories={IMAGE_CATEGORIES.opplegg}
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
