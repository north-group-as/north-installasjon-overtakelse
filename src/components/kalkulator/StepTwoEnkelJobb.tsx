"use client";

import { useMemo, useRef } from "react";
import {
  type ENKConfig,
  ENKEL_SERVICES,
  IMAGE_CATEGORIES,
} from "@/lib/calculator-data";
import { calcENK } from "@/lib/calculator-utils";
import { RadioCardGroup } from "./ui/RadioCardGroup";
import { NumberStepper } from "./ui/NumberStepper";
import { ImageUploadSection } from "./ui/ImageUploadSection";
import { StickyPrice } from "./ui/StickyPrice";
import { ShieldCheck, Calendar } from "lucide-react";

interface StepTwoEnkelJobbProps {
  config: ENKConfig;
  onChange: (config: ENKConfig) => void;
  onBack: () => void;
  onNext: () => void;
}

export function StepTwoEnkelJobb({
  config,
  onChange,
  onBack,
  onNext,
}: StepTwoEnkelJobbProps) {
  const result = useMemo(() => calcENK(config), [config]);
  const preferredFromRef = useRef<HTMLInputElement>(null);
  const preferredToRef = useRef<HTMLInputElement>(null);

  const selectedService = ENKEL_SERVICES.find((s) => s.id === config.serviceType);

  const serviceOptions = ENKEL_SERVICES.map((s) => ({
    value: s.id,
    label: s.label,
    sublabel: `fra ${s.basePrice.toLocaleString("nb-NO")} kr`,
  }));

  const openDatePicker = (input: HTMLInputElement | null) => {
    if (!input) return;

    try {
      input.showPicker();
    } catch {
      input.focus();
    }
  };

  return (
    <div>
      <StickyPrice
        label="Estimat inkl. mva:"
        minAmount={result.minIncVat}
        maxAmount={result.maxIncVat}
      />

      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Velg tjeneste
      </h2>
      <p className="text-sm text-navy-light/60 leading-relaxed mb-4">
        Velg type jobb og antall
      </p>

      {/* Materiell-infoboks */}
      <div className="flex items-start gap-3 py-3 px-4 bg-navy-dark/5 rounded-xl border border-navy-light/20 mb-5">
        <ShieldCheck size={20} className="text-teal-accent shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-navy-dark">
            Konkurransedyktig pris på jobben
          </p>
          <p className="text-sm text-navy-light/60 leading-relaxed">
            Prisen inkluderer oppmøte, arbeid og dokumentasjon. Materiell kommer i tillegg.
          </p>
        </div>
      </div>

      {/* ── Tjeneste ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Tjeneste
      </div>

      {/* Tjeneste-valg */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Hva trenger du?
        </label>
        <RadioCardGroup
          options={serviceOptions}
          value={config.serviceType}
          onChange={(serviceType) => onChange({ ...config, serviceType, quantity: 1 })}
        />
      </div>

      {/* Antall */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Antall
        </label>
        <NumberStepper
          value={config.quantity}
          onChange={(quantity) => onChange({ ...config, quantity })}
          min={1}
          max={50}
          step={1}
          unit="stk"
        />
        {selectedService && (
          <p className="mt-2 text-xs text-navy-light/60">
            Første enhet: {selectedService.basePrice.toLocaleString("nb-NO")} kr.
            Ekstra: {selectedService.extraPrice.toLocaleString("nb-NO")} kr per stk.
            {config.quantity > 1 && " Rabatt ved større antall."}
          </p>
        )}
      </div>

      {/* Ønsket tidsperiode */}
      <div className="mb-7">
        <label className="block font-bold text-base text-navy-dark mb-1">
          Ønsket tidsperiode
        </label>
        <p className="text-sm text-navy-light/60 mb-3">
          Velg omtrentlig periode for når jobben passer
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="enk-from" className="block text-xs text-navy-dark/50 mb-1">
              Fra
            </label>
            <div className="relative">
              <input
                id="enk-from"
                ref={preferredFromRef}
                type="date"
                value={config.preferredFrom}
                onChange={(e) => onChange({ ...config, preferredFrom: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                className="py-3 px-3.5 border-2 border-navy-light/20 rounded-xl text-base text-navy-dark bg-white outline-none focus:border-teal-accent transition-colors w-full cursor-pointer pr-11 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
              <button
                type="button"
                aria-label="Åpne kalender for fra-dato"
                onClick={() => openDatePicker(preferredFromRef.current)}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy-dark/50 transition-colors hover:bg-navy-dark/5 hover:text-navy-dark focus:outline-none focus:ring-2 focus:ring-teal-accent/50"
              >
                <Calendar className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="enk-to" className="block text-xs text-navy-dark/50 mb-1">
              Til
            </label>
            <div className="relative">
              <input
                id="enk-to"
                ref={preferredToRef}
                type="date"
                value={config.preferredTo}
                onChange={(e) => onChange({ ...config, preferredTo: e.target.value })}
                min={config.preferredFrom || new Date().toISOString().split("T")[0]}
                className="py-3 px-3.5 border-2 border-navy-light/20 rounded-xl text-base text-navy-dark bg-white outline-none focus:border-teal-accent transition-colors w-full cursor-pointer pr-11 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
              <button
                type="button"
                aria-label="Åpne kalender for til-dato"
                onClick={() => openDatePicker(preferredToRef.current)}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy-dark/50 transition-colors hover:bg-navy-dark/5 hover:text-navy-dark focus:outline-none focus:ring-2 focus:ring-teal-accent/50"
              >
                <Calendar className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estimate notice */}
      <div className="mb-7 py-3 px-4 bg-white/60 rounded-lg border-l-[3px] border-teal-accent text-sm text-navy-light/80 leading-relaxed">
        Prisene er veiledende, endelig pris avtales etter befaring.
      </div>

      {/* ── Dokumentasjon ── */}
      <div className="text-xs font-bold uppercase tracking-widest text-navy-light/40 mt-10 mb-4 pb-2 border-b border-navy-light/10">
        Dokumentasjon
      </div>

      {/* Bildeopplasting */}
      <ImageUploadSection
        categories={IMAGE_CATEGORIES.enkel}
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
