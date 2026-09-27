"use client";

import { Phone } from "lucide-react";
import { useInterestModal } from "./InterestModalProvider";
import { BUSINESS } from "@/lib/business-data";

export default function StickyApplyCta() {
  const { open } = useInterestModal();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-navy-dark/10 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <button
        type="button"
        onClick={open}
        className="flex-1 bg-green text-navy-dark font-bold py-3.5 rounded-xl text-[15px] uppercase tracking-wide cursor-pointer"
      >
        Jeg er nysgjerrig
      </button>
      <a
        href={BUSINESS.phoneHref}
        aria-label={`Ring ${BUSINESS.phoneDisplay}`}
        className="shrink-0 w-12 h-12 rounded-xl border border-navy-dark/15 flex items-center justify-center text-navy-dark"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
