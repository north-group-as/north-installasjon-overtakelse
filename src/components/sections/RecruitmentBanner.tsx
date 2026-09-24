import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";

export default function RecruitmentBanner() {
  return (
    <section className="bg-white border-b border-navy-dark/10 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green/15 flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6 text-green-dark" />
          </div>
          <div>
            <p className="text-lg md:text-xl font-extrabold text-navy-dark tracking-tight">
              Vi søker serviceelektriker
            </p>
            <p className="text-sm text-navy-dark/60">
              Ledig stilling i Oslo-området. Fast ansettelse.
            </p>
          </div>
        </div>
        <Link
          href="/serviceelektriker"
          className="bg-green text-navy-dark font-semibold px-6 py-3.5 rounded-xl hover:bg-green-dark transition-colors text-sm inline-flex items-center gap-2 whitespace-nowrap shrink-0"
        >
          Søk på ledige stillinger her
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
