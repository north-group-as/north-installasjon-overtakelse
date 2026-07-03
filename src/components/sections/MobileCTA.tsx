"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

export default function MobileCTA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Bottom bar */}
      <div className={`mobile-cta fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${scrolled ? "translate-y-0" : "translate-y-full"}`}>
        <div className="bg-navy-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex-1 flex items-center justify-center gap-2.5 bg-green text-white font-bold py-3 rounded-xl text-sm transition-all hover:bg-green-dark cursor-pointer"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
