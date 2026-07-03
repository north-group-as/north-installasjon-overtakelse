import { formatKr } from "@/lib/calculator-utils";
import { Check } from "lucide-react";

interface PriceLine {
  label: string;
  val: number;
}

interface PriceBoxProps {
  title?: string;
  lines: PriceLine[];
  exVat?: number;
  incVat?: number;
  minIncVat?: number;
  maxIncVat?: number;
  isFixedPrice?: boolean;
}

const INCLUDED_ITEMS_DISPLAY = [
  "Befaring og oppmøte",
  "Samsvarserklæring",
  "Garanti på arbeid",
  "Rydding etter jobb",
];

export function PriceBox({
  title,
  lines,
  exVat,
  incVat,
  minIncVat,
  maxIncVat,
  isFixedPrice,
}: PriceBoxProps) {
  const isRange = minIncVat != null && maxIncVat != null;
  const displayTotal = isRange
    ? `ca. ${formatKr(minIncVat)} – ${formatKr(maxIncVat)}`
    : formatKr(incVat ?? 0);

  const mva =
    !isRange && incVat != null && exVat != null ? incVat - exVat : null;
  const monthlyBase = isRange
    ? (minIncVat + maxIncVat) / 2
    : (incVat ?? 0);
  const monthlyAmount = monthlyBase > 10000 ? Math.round(monthlyBase / 12) : null;

  return (
    <div className="bg-gradient-to-br from-navy-dark/5 to-navy-dark/10 border-2 border-navy-light rounded-2xl p-5 mt-6">
      {(title || isFixedPrice) && (
        <div className="text-sm font-bold text-navy-light uppercase tracking-wider mb-3.5 pb-2.5 border-b border-navy-light/30">
          {isFixedPrice
            ? "Pris inkl. mva, oppmøte og dokumentasjon"
            : title}
        </div>
      )}

      {lines.map((line, i) => (
        <div
          key={i}
          className="flex justify-between items-baseline py-1.5 text-sm text-navy-light/80 border-b border-black/[0.04] last:border-b-0"
        >
          <span>{line.label}</span>
          <span>{formatKr(line.val)}</span>
        </div>
      ))}

      {!isFixedPrice && !isRange && mva != null && (
        <>
          <div className="flex justify-between items-baseline py-1.5 text-sm font-semibold text-navy-dark pt-2.5 mt-1 border-t border-navy-light/30">
            <span>Sum eks. mva</span>
            <span>{formatKr(exVat ?? 0)}</span>
          </div>
          <div className="flex justify-between items-baseline py-1.5 text-sm font-semibold text-navy-dark">
            <span>MVA (25%)</span>
            <span>{formatKr(mva)}</span>
          </div>
        </>
      )}

      <div className="flex justify-between items-baseline text-lg font-extrabold text-navy-dark pt-3 mt-1 border-t-2 border-navy-light">
        <span>{isRange ? "Prisestimat" : "Totalt"}</span>
        <span className="text-navy-light text-xl">{displayTotal}</span>
      </div>

      {isRange && (
        <div className="mt-2 text-xs text-navy-light/60 text-center">
          Endelig pris avtales etter befaring
        </div>
      )}

      {monthlyAmount && (
        <div className="mt-3 p-2.5 bg-green-light rounded-xl border border-green text-sm text-navy-dark text-center">
          Tilsvarer ca. {formatKr(monthlyAmount)}/mnd over 12 mnd
        </div>
      )}

      <div className="mt-3.5 p-3 bg-white/60 rounded-xl border border-navy-light/20">
        <div className="text-xs font-semibold text-navy-light/70 mb-1.5">
          Inkludert i prisen
        </div>
        {INCLUDED_ITEMS_DISPLAY.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 text-sm text-navy-light/70 py-0.5"
          >
            <Check size={14} className="text-green shrink-0" />
            <span>{item}</span>
          </div>
        ))}
        {isRange && (
          <div className="mt-2 pt-2 border-t border-navy-light/20 text-xs text-navy-light/70">
            Merk: <strong>Materiell er ikke inkludert</strong> i prisestimatet ovenfor.
          </div>
        )}
      </div>

      {isFixedPrice && (
        <div className="mt-2.5 text-xs text-navy-light/60 text-center">
          Prisen inkluderer oppmøte, arbeid, materiell og dokumentasjon
        </div>
      )}
    </div>
  );
}
