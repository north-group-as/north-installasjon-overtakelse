"use client";

import { Minus, Plus } from "lucide-react";

interface NumberStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

export function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  unit,
}: NumberStepperProps) {
  function clamp(n: number) {
    return Math.min(max, Math.max(min, n));
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(clamp(value - step))}
        aria-label="Reduser verdi"
        className="w-11 h-11 rounded-lg border-2 border-navy-light/20 bg-white text-navy-light font-bold text-lg flex items-center justify-center cursor-pointer hover:bg-navy-dark/5 hover:border-navy-light active:bg-navy-dark/10 active:scale-95 transition-all shrink-0"
      >
        <Minus size={18} />
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value);
          if (!isNaN(n)) onChange(clamp(n));
        }}
        className="w-[72px] h-11 border-2 border-navy-light/20 rounded-lg text-base font-bold text-center text-navy-dark outline-none focus:border-navy-light bg-white leading-none"
      />
      <button
        type="button"
        onClick={() => onChange(clamp(value + step))}
        aria-label="Øk verdi"
        className="w-11 h-11 rounded-lg border-2 border-navy-light/20 bg-white text-navy-light font-bold text-lg flex items-center justify-center cursor-pointer hover:bg-navy-dark/5 hover:border-navy-light active:bg-navy-dark/10 active:scale-95 transition-all shrink-0"
      >
        <Plus size={18} />
      </button>
      {unit && <span className="text-sm text-navy-light/60 ml-0.5">{unit}</span>}
    </div>
  );
}
