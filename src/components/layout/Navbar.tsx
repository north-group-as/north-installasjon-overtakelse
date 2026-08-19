"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

const navLinks = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Prosjekter", href: "/prosjekter" },
  { label: "Jobb med oss", href: "/jobb-med-oss" },
  { label: "Kalkulator", href: "/kalkulator" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.classList.toggle("mobile-menu-open", mobileOpen);
    return () => { document.body.style.overflow = ""; document.body.classList.remove("mobile-menu-open"); };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md transition-transform duration-300 md:translate-y-0 ${scrolled ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between">
          <Link href="/" className="py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-north-installasjon-white.svg"
              alt="North Installasjon"
              className="h-11 w-auto"
              width={143}
              height={44}
              fetchPriority="high"
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Ring ${BUSINESS.phoneDisplay}`}
              className="flex items-center gap-2.5 bg-green text-white px-5 py-2 rounded-full shadow-lg shadow-green/25 hover:bg-green-dark hover:shadow-green/40 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span className="font-extrabold text-lg">{BUSINESS.phoneDisplay}</span>
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white/20 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              Bestill befaring
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel — outside nav to avoid stacking context issues */}
      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 z-50 bg-[#0e2c3d] flex flex-col transition-all duration-300 ease-out md:hidden ${
          mobileOpen && scrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Navigation links */}
        <div className="px-8 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-xl font-semibold text-white hover:text-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact & login */}
        <div className="mx-8 mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Ring ${BUSINESS.phoneDisplay}`}
            className="flex items-center gap-2 text-green font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">{BUSINESS.phoneDisplay}</span>
          </a>
        </div>

        {/* CTA button pushed to bottom */}
        <div className="mt-auto px-8 pb-28">
          <Link
            href="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="block w-full bg-green text-white py-4 rounded-xl font-semibold text-lg text-center hover:bg-green-dark transition-colors"
          >
            Bestill befaring
          </Link>
        </div>
      </div>
    </>
  );
}
