"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 50, suffix: "+", label: "Ansatte", decimals: 0 },
  { value: 10, suffix: "+", label: "Års erfaring", decimals: 0 },
  { value: 4.9, suffix: "", label: "Snittkarakter", decimals: 1 },
];

export default function StatsRow() {
  return (
    <div className="bg-navy-dark/5 rounded-2xl p-8 md:p-10">
      <h3 className="text-lg font-bold text-navy-dark mb-8">
        North i tall
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-1">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimals}
              />
              {stat.suffix}
            </p>
            <p className="text-xs text-navy-dark/40 font-semibold uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
