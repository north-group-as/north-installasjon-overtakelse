import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt oss",
  description:
    "Ta kontakt med North Installasjon for et uforpliktende prisestimat på elektrikerarbeid i Oslo-området. Vi svarer raskt på alle henvendelser.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/kontakt",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.northinstallasjon.no/#localbusiness",
  name: BUSINESS.name,
  image: `${BUSINESS.siteUrl}${BUSINESS.logoUrl}`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: `${BUSINESS.siteUrl}/kontakt`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    postalCode: BUSINESS.address.postalCode,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "59.9349",
    longitude: "10.7920",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Oslo" },
    { "@type": "City", name: "Bærum" },
    { "@type": "City", name: "Asker" },
    { "@type": "City", name: "Lillestrøm" },
    { "@type": "City", name: "Lørenskog" },
  ],
};

const contactBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hjem",
      item: BUSINESS.siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kontakt",
      item: `${BUSINESS.siteUrl}/kontakt`,
    },
  ],
};

export default function KontaktPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/kontakt-team.webp"
          alt="North Installasjon-teamet foran firmabilen"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32 w-full">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Kontakt
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ta kontakt med oss
          </h1>
          <p className="text-white/60 max-w-lg text-lg leading-relaxed">
            Fyll ut skjemaet under, så gir vi deg et uforpliktende prisestimat
            raskt.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ContactForm />

          <div className="mt-16 max-w-2xl">
            <h2 className="text-xl font-bold text-navy-dark mb-4">
              Trenger du hjelp raskt?
            </h2>
            <div className="space-y-3 text-navy-dark/70 text-[15px] leading-relaxed">
              <p>
                Vi prøver å svare på alle henvendelser så snart som mulig i
                kontortiden (man-fre 08:00-17:00). For hastende oppdrag utenom
                kontortid, ring oss direkte på <a href="tel:+4774999333" className="text-teal font-semibold hover:underline">749 99 333</a>.
              </p>
              <p>
                Du kan også sende oss en e-post på{" "}
                <a href="mailto:post@northinstallasjon.no" className="text-teal font-semibold hover:underline">
                  post@northinstallasjon.no
                </a>.
                Vi holder til i Oslo og betjener hele Oslo-området,
                inkludert Bærum, Asker, Lillestrøm og Drammen.
                Enten du trenger en enkel service eller et større prosjekt,
                hjelper vi deg gjerne med en uforpliktende befaring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ofte stilte spørsmål */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark tracking-tight mb-10">
            Ofte stilte spørsmål
          </h2>
          <div className="max-w-2xl space-y-8">
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Hvor raskt kan jeg få befaring?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi prøver å avtale befaring så snart som mulig, vanligvis innen
                kort tid etter at du har tatt kontakt. Vi tilpasser oss din
                kalender og finner et tidspunkt som passer for deg.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Hvilke områder dekker dere?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi holder til i Oslo og betjener hele Oslo-området, inkludert
                Bærum, Asker, Lillestrøm, Drammen og omegn. Ta kontakt om du
                er usikker på om vi dekker ditt område.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Er befaringen gratis?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Ja, vi tilbyr uforpliktende befaring gratis for de fleste
                oppdrag. Etter befaringen gir vi deg et detaljert tilbud uten
                noen forpliktelse fra din side.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
