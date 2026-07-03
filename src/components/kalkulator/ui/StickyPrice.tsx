import { formatKr } from "@/lib/calculator-utils";

interface StickyPriceProps {
  label?: string;
  amount?: number;
  minAmount?: number;
  maxAmount?: number;
}

export function StickyPrice({
  label = "Estimat:",
  amount,
  minAmount,
  maxAmount,
}: StickyPriceProps) {
  const displayText =
    minAmount != null && maxAmount != null
      ? `ca. ${formatKr(minAmount)} – ${formatKr(maxAmount)}`
      : formatKr(amount ?? 0);

  return (
    <div className="bg-navy-dark text-white py-3 px-5 rounded-xl flex justify-between items-center text-sm font-semibold mb-6">
      <span className="text-white/70">{label}</span>
      <span className="text-xl font-extrabold text-white">{displayText}</span>
    </div>
  );
}
