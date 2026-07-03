"use client";

import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

const CTA_TEXT = "Bestill gratis befaring";
const SUBTITLE_TEXT =
  "Autorisert elektroinstallatør for privat, bedrift og borettslag. Tydelig pris, ingen overraskelser.";

export default function HeroCTAs() {

  return (
    <>
      <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-10 leading-relaxed font-light bg-white/[0.08] backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
        {SUBTITLE_TEXT}
      </p>

      <a
        href={BUSINESS.phoneHref}
        className="inline-flex items-center gap-3 text-white font-extrabold text-3xl sm:text-4xl px-8 py-4 rounded-2xl mb-3 hover:bg-white/10 transition-all"
      >
        <Phone className="w-8 h-8 sm:w-9 sm:h-9 text-green" />
        {BUSINESS.phoneDisplay}
      </a>
      <p className="text-sm text-white/50 mb-8">Vi svarer raskt, ring oss direkte</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a
          href="/kontakt"
          className="bg-green text-white font-bold px-10 py-4 rounded-xl transition-all hover:bg-green-dark text-base cursor-pointer text-center"
        >
          {CTA_TEXT}
        </a>
        <a
          href="/kontakt"
          className="border-2 border-white/25 text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-white/10 text-base cursor-pointer text-center"
        >
          Kontakt oss
        </a>
      </div>
    </>
  );
}
