"use client";

import { useMemo } from "react";
import { type VARMConfig, IMAGE_CATEGORIES } from "@/lib/calculator-data";
import { calcVARM } from "@/lib/calculator-utils";
import { RadioCardGroup } from "./ui/RadioCardGroup";
import { ToggleGroup } from "./ui/ToggleGroup";
import { NumberStepper } from "./ui/NumberStepper";
import { ImageUploadSection } from "./ui/ImageUploadSection";
import { StickyPrice } from "./ui/StickyPrice";

interface StepTwoVarmematteProps {
  config: VARMConfig;
  onChange: (config: VARMConfig) => void;
  onBack: () => void;
  onNext: () => void;
}

const ROM_TYPE_OPTIONS = [
  { value: "bad", label: "Bad/toalett" },
  { value: "kjokken", label: "Kjøkken" },
  { value: "gang", label: "Gang/entre" },
  { value: "annet", label: "Annet" },
];

const UNDERLAG_OPTIONS = [
  { value: "betong", label: "Betong", sublabel: "Betonggulv eller påstøp" },
  { value: "annet", label: "Annet", sublabel: "Tre, fliser eller annet" },
];

export function StepTwoVarmematte({
  config,
  onChange,
  onBack,
  onNext,
}: StepTwoVarmematteProps) {
  const result = useMemo(() => calcVARM(config), [config]);

  return (
    <div>
      <StickyPrice
        label="Estimat inkl. mva:"
        minAmount={result.minIncVat}
        maxAmount={result.maxIncVat}
      />

      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Varmematte / varmekabel
      </h2>
      <p className="text-sm text-navy-light/60 leading-relaxed mb-6">
        Gi oss informasjon om rommet, så estimerer vi prisen
      </p>

      {/* ── Om rommet ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Om rommet
      </div>

      {/* Romstørrelse */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Romstørrelse
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Omtrentlig areal i kvadratmeter.
        </p>
        <NumberStepper
          value={config.romStorrelse}
          onChange={(romStorrelse) => onChange({ ...config, romStorrelse })}
          min={1}
          max={50}
          step={0.5}
          unit="m²"
        />
      </div>

      {/* Romtype */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Romtype
        </label>
        <RadioCardGroup
          options={ROM_TYPE_OPTIONS}
          value={config.romType}
          onChange={(romType) => onChange({ ...config, romType })}
        />
      </div>

      {/* Hindringer */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Har rommet hindringer?
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Toalett, badekar, skap eller andre faste installasjoner.
          Hindringer reduserer effektivt areal med ca. 15%.
        </p>
        <ToggleGroup
          value={config.harHindringer}
          onChange={(harHindringer) => onChange({ ...config, harHindringer })}
          yesLabel="Ja"
          noLabel="Nei"
        />
      </div>

      {/* ── Underlag ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Underlag
      </div>

      {/* Underlag-type */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Hva slags underlag?
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Betong krever annen installasjon enn tregulv.
        </p>
        <RadioCardGroup
          options={UNDERLAG_OPTIONS}
          value={config.underlag}
          onChange={(underlag) =>
            onChange({
              ...config,
              underlag: underlag as VARMConfig["underlag"],
            })
          }
        />
      </div>

      {/* ── Dokumentasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Dokumentasjon
      </div>

      {/* Bildeopplasting */}
      <ImageUploadSection
        categories={IMAGE_CATEGORIES.varmematte}
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
