"use client";

import { useMemo } from "react";
import {
  type SPConfig,
  IMAGE_CATEGORIES,
} from "@/lib/calculator-data";
import { calcSP } from "@/lib/calculator-utils";
import { RadioCardGroup } from "./ui/RadioCardGroup";
import { ToggleGroup } from "./ui/ToggleGroup";
import { NumberStepper } from "./ui/NumberStepper";
import { ImageUploadSection } from "./ui/ImageUploadSection";
import { StickyPrice } from "./ui/StickyPrice";
import { Info } from "lucide-react";

interface StepTwoSpotterProps {
  config: SPConfig;
  onChange: (config: SPConfig) => void;
  onBack: () => void;
  onNext: () => void;
}

const ROOM_TYPE_OPTIONS = [
  { value: "standard", label: "Standardrom", sublabel: "Stue, soverom, kjøkken" },
  { value: "vatrom", label: "Våtrom", sublabel: "Bad eller vaskerom" },
];

const COLOR_OPTIONS = [
  { value: "hvit", label: "Hvit" },
  { value: "svart", label: "Svart" },
];

const MOUNT_OPTIONS = [
  { value: "eksisterende-hull", label: "Eksisterende hull", sublabel: "1-til-1-bytte" },
  { value: "nye-hull", label: "Nye hull", sublabel: "Boring nødvendig" },
];

export function StepTwoSpotter({
  config,
  onChange,
  onBack,
  onNext,
}: StepTwoSpotterProps) {
  const result = useMemo(() => calcSP(config), [config]);

  return (
    <div>
      <StickyPrice
        label="Estimat inkl. mva:"
        minAmount={result.minIncVat}
        maxAmount={result.maxIncVat}
      />

      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Konfigurer spotter-installasjon
      </h2>
      <p className="text-sm text-navy-light/60 leading-relaxed mb-6">
        Standard spot: Alfa Eco (hvit eller svart)
      </p>

      {/* ── Om rommet ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Om rommet
      </div>

      {/* Romtype */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Romtype
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Hva slags rom skal spotterne monteres i?
        </p>
        <RadioCardGroup
          options={ROOM_TYPE_OPTIONS}
          value={config.roomType}
          onChange={(roomType) =>
            onChange({
              ...config,
              roomType: roomType as SPConfig["roomType"],
            })
          }
        />
      </div>

      {/* ── Velg spotter ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Velg spotter
      </div>

      {/* Farge */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Farge
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Velg farge på spotene (Alfa Eco)
        </p>
        <RadioCardGroup
          options={COLOR_OPTIONS}
          value={config.spotColor}
          onChange={(spotColor) =>
            onChange({
              ...config,
              spotColor: spotColor as SPConfig["spotColor"],
            })
          }
        />
      </div>

      {/* Antall spotter */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Antall spotter
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Antall spotter som skal byttes.
        </p>
        <NumberStepper
          value={config.count}
          onChange={(count) => onChange({ ...config, count })}
          min={1}
          max={200}
          step={1}
          unit="stk"
        />
        <p className="mt-2 text-xs text-navy-light/50 flex items-center gap-1.5">
          <Info size={12} />
          Tillegg 129 kr per borehull over 68-83 mm (ved behov)
        </p>
      </div>

      {/* Monteringstype */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Monteringstype
        </label>
        <p className="text-sm text-navy-light/60 leading-relaxed mb-2">
          Brukes eksisterende hull eller må det bores nye?
        </p>
        <RadioCardGroup
          options={MOUNT_OPTIONS}
          value={config.mountType}
          onChange={(mountType) =>
            onChange({
              ...config,
              mountType: mountType as SPConfig["mountType"],
            })
          }
        />
      </div>

      {/* ── Dimmer ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Dimmer
      </div>

      {/* Dimmer anbefaling */}
      <div className="mb-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <p className="text-sm text-navy-dark leading-relaxed">
          Vi garanterer ikke at eksisterende dimmer fungerer optimalt med nye LED-spotter.
          Anbefaler bytte.
        </p>
        <p className="text-sm font-semibold text-navy-dark mt-1">
          1 299 kr per dimmer
        </p>
      </div>

      <div className="mb-4">
        <ToggleGroup
          value={config.dimmer}
          onChange={(dimmer) => onChange({ ...config, dimmer })}
          yesLabel="Ja, bytt dimmer"
          noLabel="Nei takk"
        />
      </div>

      {config.dimmer && (
        <div className="mb-7">
          <label className="block font-bold text-base text-navy-dark mb-1">
            Antall dimmere
          </label>
          <NumberStepper
            value={config.dimmerCount}
            onChange={(dimmerCount) => onChange({ ...config, dimmerCount })}
            min={1}
            max={20}
            step={1}
            unit="stk"
          />
          {config.dimmerCount > 1 && (
            <p className="mt-2 text-xs text-teal-accent font-medium">
              Rabatt ved flere dimmere
            </p>
          )}
        </div>
      )}

      {/* ── Dokumentasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Dokumentasjon
      </div>

      {/* Bildeopplasting */}
      <ImageUploadSection
        categories={IMAGE_CATEGORIES.spotter}
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
