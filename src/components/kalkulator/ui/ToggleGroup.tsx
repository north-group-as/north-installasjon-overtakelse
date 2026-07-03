"use client";

import { cn } from "@/lib/utils";

interface ToggleGroupProps {
  value: boolean;
  onChange: (value: boolean) => void;
  yesLabel?: string;
  noLabel?: string;
}

export function ToggleGroup({
  value,
  onChange,
  yesLabel = "Ja, inkluder",
  noLabel = "Nei",
}: ToggleGroupProps) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          "flex-1 py-2.5 px-3 border-2 border-navy-light/20 rounded-xl cursor-pointer text-center text-sm font-semibold transition-all",
          value
            ? "border-navy-light bg-navy-dark/10 text-navy-dark"
            : "text-navy-light/60 bg-white"
        )}
      >
        {yesLabel}
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          "flex-1 py-2.5 px-3 border-2 border-navy-light/20 rounded-xl cursor-pointer text-center text-sm font-semibold transition-all",
          !value
            ? "border-red-400 bg-red-50 text-red-800"
            : "text-navy-light/60 bg-white"
        )}
      >
        {noLabel}
      </button>
    </div>
  );
}
