"use client";

import Image from "next/image";
import { Wrench, Building2, Zap, Home, ArrowRight } from "lucide-react";
import { FloatingShapes } from "@/components/ui/floating-shapes";

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 17a4 4 0 0 1-4-4V9" />
      <path d="M7 9h10" />
      <path d="M13 17a4 4 0 0 0 4-4V9" />
      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L13 14" />
      <path d="m3 15 3.1-3.1a2 2 0 0 1 2.8 0L11 14" />
      <path d="m19 9 2-2" />
      <path d="m5 9-2-2" />
    </svg>
  );
}

const services = [
  {
    title: "Service & feilsøking",
    description:
      "Rask hjelp med feilsøking, utbedringer og vedlikehold av elektriske anlegg.",
    icon: Wrench,
    badge: "Rask hjelp",
    image: "/images/service-sikringsskap.webp",
    objectPosition: "center",
    cta: "Bestill befaring",
    href: "/tjenester/service",
  },
  {
    title: "Elbillader",
    description: "Installasjon for bolig, borettslag og bedrift.",
    icon: Zap,
    badge: "fra 12 490 kr",
    image: "/images/service-elbillader.webp",
    objectPosition: "center",
    cta: "Få prisestimat",
    href: "/tjenester/elbillader",
  },
  {
    title: "Installasjon & prosjekt",
    description:
      "Komplette elektroinstallasjoner for nybygg og næringsbygg.",
    icon: Building2,
    image: "/images/project-constructioncity.webp",
    objectPosition: "center",
    cta: "Bestill befaring",
    href: "/tjenester/bedrift",
  },
  {
    title: "Borettslag & sameie",
    description:
      "Oppgraderinger og vedlikehold av fellesanlegg og infrastruktur.",
    icon: Home,
    image: "/images/borettslag-sameie-north-bil.webp",
    objectPosition: "center 45%",
    cta: "Bestill befaring",
    href: "/tjenester/borettslag-og-sameie",
  },
  {
    title: "Bedriftsavtaler",
    description:
      "Rammeavtaler for borettslag, sameier og eiendomsselskaper. Fast kontaktperson og prioritert responstid.",
    icon: HandshakeIcon,
    image: "/images/bedriftsavtaler-samarbeid.webp",
    objectPosition: "center",
    cta: "Ta kontakt",
    href: "/kontakt",
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="relative py-28 lg:py-36 bg-white overflow-hidden">
      <FloatingShapes shapes={[
        { className: "absolute top-16 left-1/3 w-[350px] h-[350px] rounded-full bg-teal-accent/15 blur-md", speed: 1 },
        { className: "absolute -bottom-10 right-1/4 w-[400px] h-[280px] rounded-[45%_55%_60%_40%] bg-teal-accent/15 blur-md", speed: 1.5 },
        { className: "absolute top-1/2 -right-10 w-[220px] h-[280px] rounded-[55%_45%_50%_50%] bg-green/10 blur-sm", speed: 2 },
      ]} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-dark tracking-tight leading-tight mb-20 max-w-md">
          Alt innen
          <br />
          elektro
        </h2>

        {/* Grid: equal-sized cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.href}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: service.objectPosition }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-navy-dark/10" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-green" />
                    {service.badge && (
                      <span className="text-xs font-semibold bg-green/20 text-green px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/75 text-sm">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-green">
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
