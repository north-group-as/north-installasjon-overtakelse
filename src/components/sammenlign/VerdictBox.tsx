import { ArrowRight } from "lucide-react";

interface Props {
  winner: string;
  reason: string;
}

export default function VerdictBox({ winner, reason }: Props) {
  return (
    <div className="bg-navy-dark/5 border-l-4 border-teal-accent rounded-xl p-6 md:p-8 my-10">
      <p className="text-lg font-bold text-navy-dark mb-1">Vår anbefaling</p>
      <p className="text-teal-accent font-bold text-xl mb-2">{winner}</p>
      <p className="text-navy-dark/70 leading-relaxed mb-4">{reason}</p>
      <a
        href="/kalkulator"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-accent hover:underline"
      >
        Beregn pris i kalkulatoren
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
