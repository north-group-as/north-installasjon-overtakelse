"use client";

import { cn } from "@/lib/utils";
import { formatKr } from "@/lib/calculator-utils";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  name: string;
  price: number;
  description: string;
  isOpen: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
}

export function AccordionItem({
  name,
  price,
  description,
  isOpen,
  isSelected,
  onToggle,
  onSelect,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border-2 rounded-xl mb-2 overflow-hidden bg-white transition-colors",
        isSelected ? "border-teal-accent bg-teal-accent/5" : "border-navy-light/20"
      )}
    >
      <div
        onClick={onToggle}
        className="p-3 px-4 cursor-pointer flex justify-between items-center select-none hover:bg-navy-dark/5 transition-colors"
      >
        <span className="text-sm font-semibold text-navy-dark">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-navy-light whitespace-nowrap">
            fra {formatKr(price)}
          </span>
          <ChevronDown
            size={18}
            className={cn(
              "text-navy-light transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[300px]" : "max-h-0"
        )}
      >
        <div className="px-4 pb-3">
          <p className="text-sm text-navy-light/80 leading-relaxed mb-2.5">
            {description}
          </p>
          <p className="text-xs text-navy-light/60 mb-1.5">
            Inkludert: Oppmote, montering/arbeid, testing og enkel
            dokumentasjon
          </p>
          <p className="text-xs text-navy-light/50 mb-3">
            Forutsetning: Standard installasjon og normal tilgjengelighet
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="py-2 px-4 bg-teal-accent text-white border-none rounded-lg text-sm font-semibold cursor-pointer hover:bg-teal-accent/90 transition-colors"
          >
            Velg denne
          </button>
        </div>
      </div>
    </div>
  );
}
