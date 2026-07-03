import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MountainDivider from "@/components/ui/MountainDivider";
import {
  Wrench,
  Building2,
  Store,
  Building,
  Car,
  Handshake,
  ArrowRight,
  Clock,
  AlertCircle,
  Ruler,
  ShieldCheck,
  FileText,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Se alle elektrikertjenester fra North Installasjon. Service, bedrift, restaurant, borettslag og elbillader i Oslo-området.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester",
  },
};

const services = [
  {
    title: "Service og feilsøking",
    description:
      "Både små og store serviceoppdrag for bedrifter og private. Feilsøking, oppgradering og vedlikehold.",
    href: "/tjenester/service",
    icon: Wrench,
    image: "/images/service-bedrift.webp",
    imageAlt: "Måleinstrument brukt til feilsøking på elektrisk anlegg",
  },
  {
    title: "Bedrift",
    description:
      "Entrepriseleveranser, prosjektering og koordinering for næringsbygg og store prosjekter.",
    href: "/tjenester/bedrift",
    icon: Building2,
    image: "/images/bedriftsavtaler-samarbeid.webp",
    imageAlt:
      "North Installasjon-elektrikere med hjelm og refleksvest planlegger arbeid ved lukket elskap",
  },
  {
    title: "Restaurant og næring",
    description:
      "Elektriker for restauranter og næringsbedrifter. Minimal nedetid og lynrask respons.",
    href: "/tjenester/restaurant-og-naering",
    icon: Store,
    image: "/images/blog/naeringslokale-oppussing.webp",
    imageAlt: "Belysning og tekniske installasjoner i næringslokale",
  },
  {
    title: "Borettslag og sameie",
    description:
      "Serviceavtaler, oppgradering av fellesanlegg og løsninger for vaktmestere og styret.",
    href: "/tjenester/borettslag-og-sameie",
    icon: Building,
    image: "/images/borettslag-sameie-north-bil.webp",
    imageAlt:
      "North Installasjon elektrikerbil foran klassisk bygård for borettslag og sameie",
  },
  {
    title: "Elbillader-installasjon",
    description:
      "Profesjonell installasjon av elbillader for bolig, borettslag og bedrift.",
    href: "/tjenester/elbillader",
    icon: Car,
    image: "/images/service-elbillader.webp",
    imageAlt: "Elbillader montert på vegg",
  },
  {
    title: "Elektriker Oslo",
    description:
      "Autorisert elektriker for alle oppdrag i Oslo. Bestill befaring for ditt prosjekt.",
    href: "/elektriker/oslo",
    icon: Building,
    image: "/images/hero-elektriker.webp",
    imageAlt: "North Installasjon elektrikerbil i Oslo-området",
  },
  {
    title: "Døgnvakt",
    description:
      "Akutt elektriker i Oslo med prioritering av hasteoppdrag. Kontakt oss for rask hjelp.",
    href: "/tjenester/dognvakt",
    icon: Clock,
    image: "/images/dognvakt-north-bil-brandet.webp",
    imageAlt: "North Installasjon elektrikerbil på vei til døgnvakt og hasteoppdrag",
    imageLabel: "24/7 døgnvakt",
  },
  {
    title: "Hasteoppdrag",
    description:
      "Hastende elektriker med rask respons. Vi stiller opp når du trenger det mest.",
    href: "/tjenester/hasteoppdrag",
    icon: AlertCircle,
    image: "/images/hasteoppdrag-parkert-north-bil-verktoy.webp",
    imageAlt: "North Installasjon elektrikerbil parkert ved hasteoppdrag i Oslo",
    imageLabel: "Akutt respons",
  },
  {
    title: "Nybygg",
    description:
      "Komplette elektriske installasjoner for nybygg og større byggeprosjekter.",
    href: "/tjenester/nybygg",
    icon: Ruler,
    image: "/images/project-constructioncity.webp",
    imageAlt: "Større byggeprosjekt med elektriske installasjoner",
  },
  {
    title: "Bedriftsavtaler",
    description:
      "Rammeavtaler for borettslag, sameier og eiendomsselskaper. Fast kontaktperson og prioritert responstid.",
    href: "/kontakt",
    icon: Handshake,
    image: "/images/bedriftsavtaler-samarbeid.webp",
    imageAlt:
      "North Installasjon-elektrikere med tydelig profilering planlegger bedriftsavtale",
  },
];

const heroImages = [
  {
    src: "/images/service-bedrift.webp",
    alt: "Måleinstrument brukt til feilsøking på elektrisk anlegg",
    label: "Service",
  },
  {
    src: "/images/bedriftsavtaler-samarbeid.webp",
    alt: "North Installasjon-elektriker og samarbeidspartner planlegger elektriske arbeider",
    label: "Bedrift",
  },
  {
    src: "/images/service-elbillader.webp",
    alt: "Elbillader montert på vegg",
    label: "Elbillader",
  },
];

export default function TjenesterPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-green-dark pt-32 pb-16 lg:pb-20">
        <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-14 items-center">
            <div className="relative z-10">
              <p className="text-white/75 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                North Installasjon
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Våre tjenester
              </h1>
              <p className="text-white/80 max-w-xl text-lg leading-relaxed">
                Vi tilbyr et bredt spekter av elektrikertjenester for private,
                bedrifter og borettslag i Oslo-området.
              </p>
            </div>
            <div className="relative z-10">
              <div
                className="absolute -inset-x-8 -inset-y-8 text-white/10 sm:-inset-x-12 lg:-inset-x-16 lg:-inset-y-12"
                aria-hidden="true"
              >
                <MountainDivider className="absolute top-8 opacity-35" />
                <MountainDivider
                  flip
                  className="absolute top-1/2 -translate-y-1/2 opacity-90"
                />
                <MountainDivider
                  className="absolute bottom-8 opacity-30"
                />
              </div>
              <div className="relative mx-auto flex max-w-[680px] items-end justify-center -space-x-5 px-3 sm:-space-x-8 sm:px-6 lg:-space-x-10">
                {heroImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={[
                      "relative w-[34%] min-w-0 overflow-hidden rounded-2xl bg-navy shadow-2xl ring-1 ring-white/20",
                      "h-[250px] sm:h-[330px] lg:h-[410px]",
                      index === 0 ? "z-10 translate-y-8 rotate-[-6deg]" : "",
                      index === 1 ? "z-20 -translate-y-4 rotate-[1deg]" : "",
                      index === 2 ? "z-10 translate-y-10 rotate-[6deg]" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      priority={index === 0}
                      sizes="(max-width: 1024px) 33vw, 220px"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-navy-dark/85 px-3 py-3 sm:px-4">
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        {image.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-navy-dark/70 max-w-2xl text-[15px] leading-relaxed mb-16">
            North Installasjon er et autorisert elektroinstallasjonsforetak som tilbyr alt innen elektrisk installasjon,
            vedlikehold og oppgradering i Oslo-området. Vi har lang erfaring med serviceoppdrag for privatkunder,
            komplekse entrepriseleveranser for næringsbygg, og driftsløsninger for borettslag og sameier.
            Alle våre elektrikere er sertifiserte og jobber etter gjeldende forskrifter.
            Uansett om du trenger hjelp med en enkel feilsøking eller et større byggeprosjekt,
            har vi kompetansen og kapasiteten som skal til.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group"
                >
                  <div className="h-full overflow-hidden rounded-2xl bg-navy-dark transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={800}
                        height={600}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
                      {"imageLabel" in service ? (
                        <div className="absolute top-5 right-5 rounded-lg bg-navy-dark/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                          {service.imageLabel}
                        </div>
                      ) : null}
                      <div className="absolute bottom-5 left-5 w-12 h-12 rounded-xl bg-navy-dark/85 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-white/85 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="text-green font-semibold text-sm inline-flex items-center gap-1.5">
                        Les mer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hvorfor velge North? */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-12">
            Hvorfor velge North Installasjon?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-dark">Autorisert og sertifisert</h3>
              </div>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Alle våre elektrikere er autoriserte og jobber etter NEK 400 og gjeldende forskrifter.
                Du kan stole på at arbeidet utføres forsvarlig og i henhold til kravene.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-dark">Rask responstid</h3>
              </div>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi prioriterer hasteoppdrag og er på plass så snart som mulig.
                Med døgnvakt sikrer vi at du får hjelp når du trenger det som mest.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-dark">Dokumentasjon inkludert</h3>
              </div>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Samsvarserklæring og FDV-dokumentasjon følger alltid med som en del av leveransen.
                Du har full oversikt over alt utført arbeid.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <h3 className="text-lg font-bold text-navy-dark">Erfaring fra store prosjekter</h3>
              </div>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi har deltatt i noen av landets største byggeprosjekter, inkludert Nye Regjeringskvartalet.
                Den erfaringen tar vi med oss til alle oppdrag, store som små.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Usikker på hva du trenger?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ta kontakt for en uforpliktende samtale, så hjelper vi deg videre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
