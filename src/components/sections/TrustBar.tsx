"use client";

import { Star, Clock, Users } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { STATS } from "@/lib/business-data";

export default function TrustBar() {
  return (
    <section className="bg-navy-dark py-10 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <Users className="w-5 h-5 text-green mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">
              Hundrevis av
            </p>
            <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
              Fornøyde kunder
            </p>
          </div>
          <div className="text-center">
            <Clock className="w-5 h-5 text-green mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">
              <NumberTicker value={parseInt(STATS.experienceYears)} />
              <span className="text-green">+</span>
            </p>
            <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
              Års erfaring
            </p>
          </div>
          <div className="text-center">
            <Star className="w-5 h-5 text-green mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">
              <NumberTicker value={parseFloat(STATS.rating)} decimalPlaces={1} />
              <span className="text-green">/5</span>
            </p>
            <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
              På Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
