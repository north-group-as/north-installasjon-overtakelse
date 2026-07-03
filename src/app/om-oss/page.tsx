import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import { teamMembers, companyValues } from "@/lib/team-data";
import { ArrowRight } from "lucide-react";
import StatsRow from "./StatsRow";
import TeamMemberModal from "./TeamMemberModal";

export const metadata: Metadata = {
  title: {
    absolute: "Om North Installasjon: elektroentreprenør i Oslo",
  },
  description:
    "Lær mer om North Installasjon, en del av North Group. Autorisert elektroentreprenør i Oslo-området med fokus på pålitelighet, fremdrift og kvalitet.",
  keywords: ["om oss", "about us", "North Installasjon", "elektriker Oslo"],
  alternates: {
    canonical: "https://www.northinstallasjon.no/om-oss",
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Om North Installasjon",
  url: "https://www.northinstallasjon.no/om-oss",
  inLanguage: "nb-NO",
  mainEntity: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    logo: BUSINESS.logoUrl,
    description:
      "Autorisert elektroentreprenør i Oslo-området, en del av North Group. Leverer elektrotjenester til private, bedrift, borettslag og næring.",
    foundingDate: "2023",
    areaServed: [
      { "@type": "City", name: "Oslo" },
      { "@type": "City", name: "Bærum" },
      { "@type": "City", name: "Asker" },
      { "@type": "City", name: "Lillestrøm" },
      { "@type": "City", name: "Lørenskog" },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: BUSINESS.siteUrl },
      { "@type": "ListItem", position: 2, name: "Om oss", item: `${BUSINESS.siteUrl}/om-oss` },
    ],
  },
};

export default function OmOssPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/kontakt-team.webp"
          alt="North Installasjon-teamet foran firmabil på byggeplass"
          width={1080}
          height={1440}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 48%" }}
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Om oss
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {BUSINESS.name}
          </h1>
          <p className="text-white/60 max-w-lg text-lg leading-relaxed">
            En del av North Group. Elektroentreprenør med pålitelighet,
            fremdrift og lojalitet i fokus.
          </p>
        </div>
      </section>

      {/* Company intro + stats */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Håndverkere som svarer når du ringer
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  North Installasjon er en del av North Group og leverer
                  elektrotjenester til alle formål. Vi er stolte av alle
                  prosjekter vi tar del i, fra små installasjoner til større
                  prosjekter som krever mye planlegging. Ingen jobber er for
                  små eller for store.
                </p>
                <p>
                  Vi er en partner som leverer raskt, ryddig og med høy
                  kvalitet. Gjennom tilgang til prosjekt- og HR-kompetanse i
                  North Group kan vi tilby en helhetlig tjeneste som dekker
                  alt fra service og feilsøking til komplekse entrepriser.
                </p>
                <p>
                  Våre tre verdier, pålitelighet, fremdrift og lojalitet,
                  styrer alt vi gjør. Vi møter opp når vi sier, holder tempo
                  uten å gå på kompromiss med kvaliteten, og bygger
                  langsiktige relasjoner med kundene våre.
                </p>
                <p>
                  Med over 50 sertifiserte elektrikere i teamet har vi
                  kapasitet til å ta på oss alt fra små serviceoppdrag til
                  store entrepriseleveranser. Vi er registrert i
                  Elvirksomhetsregisteret og medlem av NHO Elektro.
                  Alle våre elektrikere har gyldig fagbrev og gjennomgår
                  jevnlig oppdatering innen HMS og forskriftskrav.
                </p>
              </div>
            </div>

            <StatsRow />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Våre verdier
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Det vi står for
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {companyValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-navy-dark mx-auto flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-teal-accent" />
                  </div>
                  <h3 className="text-base font-bold text-navy-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70 leading-relaxed max-w-xs mx-auto">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-navy-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Teamet
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Menneskene bak North
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberModal key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Vil du jobbe med oss?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Vi er alltid på utkikk etter dyktige fagfolk. Ta kontakt for en
            uforpliktende prat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/karriere"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Se ledige stillinger
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

      <Footer />
    </main>
  );
}
