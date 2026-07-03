import { ArrowRight } from "lucide-react";

export default function ComparisonCTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
          Klar for elbillader?
        </h2>
        <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
          Beregn pris i kalkulatoren eller ta kontakt for rådgivning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/kalkulator"
            className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            Beregn pris
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/kontakt"
            className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            Kontakt oss
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
