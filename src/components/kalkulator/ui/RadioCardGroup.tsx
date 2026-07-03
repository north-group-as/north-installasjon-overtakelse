"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface RadioOption {
  value: string;
  label: string;
  sublabel?: string;
  image?: string;
}

interface RadioCardGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export function RadioCardGroup({
  options,
  value,
  onChange,
}: RadioCardGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex-1 min-w-[100px] rounded-2xl p-4 cursor-pointer transition-all",
              option.image ? "flex items-center gap-3 text-left" : "text-center",
              isActive
                ? "border-2 border-navy-dark bg-navy-dark/[0.03]"
                : "border border-gray-200 hover:border-gray-300 hover:shadow-sm"
            )}
          >
            {option.image && (
              <Image
                src={option.image}
                alt={option.label}
                width={56}
                height={56}
                className="rounded-lg shrink-0"
              />
            )}
            <div>
              <span className="text-[0.95rem] font-semibold text-navy-dark">
                {option.label}
              </span>
              {option.sublabel && (
                <span className="block text-xs text-navy-light/60 mt-0.5">
                  {option.sublabel}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
