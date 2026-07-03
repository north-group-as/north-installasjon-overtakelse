"use client";

import { cn } from "@/lib/utils";
import { ServiceId, SERVICE_TYPES } from "@/lib/calculator-data";
import { Zap, Lightbulb, Shield, Wrench, Cable, Thermometer } from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  Zap,
  Lightbulb,
  Shield,
  Wrench,
  Cable,
  Thermometer,
};

interface StepOneProps {
  selected: ServiceId | null;
  onSelect: (service: ServiceId) => void;
  onNext: () => void;
}

const priceHint: Record<string, string> = {
  elbillader: "fra 12 000 kr",
  spotter: "fra 2 390 kr",
  sikringsskap: "fra 8 009 kr",
  enkel: "fra 1 400,-",
  opplegg: "fra 1 450 kr",
  varmematte: "fra 3 000 kr",
};

export default function StepOne({ selected, onSelect, onNext }: StepOneProps) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-navy-dark mb-1">
        Hva trenger du hjelp med?
      </h2>
      <p className="text-sm text-navy-light/60 mb-7">
        Velg tjeneste for å komme i gang
      </p>

      <div className="grid grid-cols-2 gap-3.5 mb-7 max-[480px]:grid-cols-1">
        {SERVICE_TYPES.map((service) => {
          const Icon = iconMap[service.icon];
          const isActive = selected === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => {
                onSelect(service.id);
                onNext();
              }}
              className={cn(
                "rounded-2xl p-6 cursor-pointer text-center bg-white transition-all select-none",
                "hover:shadow-md hover:-translate-y-0.5",
                isActive
                  ? "border-2 border-teal-accent bg-teal-accent/5 shadow-sm"
                  : "border border-gray-200 hover:border-gray-300"
              )}
            >
              {Icon && (
                <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={24} className="text-teal-accent" />
                </div>
              )}
              <div className="text-base font-bold text-navy-dark mb-1">
                {service.label}
              </div>
              <div className="text-xs text-navy-light/60 leading-relaxed mb-2">
                {service.description}
              </div>
              <div className="text-xs font-semibold text-teal-accent">
                {priceHint[service.id]}
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
