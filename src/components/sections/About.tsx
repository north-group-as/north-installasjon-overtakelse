"use client";

import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Building2, Wrench, Factory, Home } from "lucide-react";
import { BUSINESS, STATS } from "@/lib/business-data";
import { FloatingShapes } from "@/components/ui/floating-shapes";

export default function About() {
  return (
    <section id="om-oss" className="relative py-28 lg:py-36 bg-gray-50 overflow-hidden">
      <FloatingShapes shapes={[
        { className: "absolute top-10 right-20 w-[400px] h-[400px] rounded-full bg-teal-accent/15 blur-md", speed: 1 },
        { className: "absolute -bottom-16 left-1/4 w-[450px] h-[300px] rounded-[40%_60%_55%_45%] bg-teal-accent/15 blur-md", speed: 1.5 },
        { className: "absolute top-1/3 -left-10 w-[200px] h-[250px] rounded-[60%_40%_50%_50%] bg-teal-accent/20 blur-sm", speed: 2 },
      ]} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Main text + stats */}
          <div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-dark tracking-tight leading-tight mb-6">
              Kvalifisert hjelp
            </h2>
            <p className="text-navy-dark/60 text-lg leading-relaxed mb-10">
              {BUSINESS.name} er registrert i Elvirksomhetsregisteret og er et
              autorisert elektroinstallasjonsforetak med alle nødvendige
              sertifiseringer for elektrisk arbeid i Norge. Med over{" "}
              {STATS.experienceYears} års erfaring leverer våre autoriserte
              installatører kvalitetsarbeid til privatkunder, næringsliv og
              entreprenører i {BUSINESS.serviceArea}. Vi kombinerer faglig tyngde
              med personlig service for å sikre trygge og forskriftsmessige
              løsninger.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-navy-dark/5 rounded-2xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-navy-dark">
                  <NumberTicker value={200} />
                  <span className="text-green">+</span>
                </p>
                <p className="text-xs text-navy-dark/70 uppercase tracking-wider mt-1">
                  Oppdrag
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-navy-dark">
                  <NumberTicker value={parseInt(STATS.experienceYears)} delay={0.3} />
                  <span className="text-green">+</span>
                </p>
                <p className="text-xs text-navy-dark/70 uppercase tracking-wider mt-1">
                  Års erfaring
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-navy-dark">
                  <NumberTicker value={50} delay={0.5} />
                  <span className="text-green">+</span>
                </p>
                <p className="text-xs text-navy-dark/70 uppercase tracking-wider mt-1">
                  Ansatte
                </p>
              </div>
            </div>

            {/* Specialization grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-navy-dark/70 text-sm">Næring & prosjekt</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-navy-dark/70 text-sm">Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-navy-dark/70 text-sm">Industri</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-navy-dark/70 text-sm">Bolig</span>
              </div>
            </div>
          </div>

          {/* Right: Image + prose */}
          <div className="lg:pt-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/about-team-byggeplass.webp"
                alt="North Installasjon-teamet foran firmabilen på byggeplass"
                width={800}
                height={600}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 25%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className="bg-navy-dark/5 rounded-2xl p-6 lg:p-8">
              <p className="text-navy-dark/70 text-lg leading-relaxed mb-6">
                Teamet vårt består av over 50 sertifiserte elektrikere med bred
                kompetanse innen service, entreprise og spesialiserte
                installasjoner. Vi har faglig kompetanse innen FSE og sikkerhet
                ved arbeid i elektriske anlegg. Enten det gjelder et lite
                serviceoppdrag eller en stor entreprise, er vi tilgjengelige med
                rask respons og fleksible løsninger.
              </p>
              <p className="text-navy-dark/70 text-lg leading-relaxed">
                Vi dekker hele {BUSINESS.serviceArea} og jobber like gjerne med
                privatkunder som med store entrepriser. Uansett størrelse på
                oppdraget får du samme kvalitet: forskriftsmessig utførelse,
                ryddig dokumentasjon og en kontaktperson som følger deg hele veien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
