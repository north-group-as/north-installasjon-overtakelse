import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS, STATS } from "@/lib/business-data";
import {
  getLocationBySlug,
  getAllLocationSlugs,
  getChildLocations,
} from "@/lib/locations-data";
import { getReviewsByLocation } from "@/lib/reviews-data";
import {
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  BadgeCheck,
  Star,
  Building2,
  HelpCircle,
  MessageSquareQuote,
} from "lucide-react";

interface Props {
  params: Promise<{ bydel: string }>;
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ bydel: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bydel } = await params;
  const location = getLocationBySlug(bydel);
  if (!location) return { title: "Side ikke funnet" };

  const metaDescription =
    location.description.length > 155
      ? location.description.slice(0, 152).replace(/\s+\S*$/, "") + "..."
      : location.description;

  return {
    title: `Elektriker i ${location.name}`,
    description: metaDescription,
    keywords: [
      `elektriker ${location.name.toLowerCase()}`,
      `elektroinstallasjon ${location.name.toLowerCase()}`,
      `elbillader ${location.name.toLowerCase()}`,
      `autorisert elektriker ${location.name.toLowerCase()}`,
      "elektroinstallasjon Oslo-området",
    ],
    alternates: {
      canonical: `https://www.northinstallasjon.no/elektriker/${location.slug}`,
    },
    openGraph: {
      title: `Elektriker i ${location.name} | North Installasjon`,
      description: metaDescription,
      url: `${BUSINESS.siteUrl}/elektriker/${location.slug}`,
      images: [
        {
          url: "/images/logo-north-installasjon.webp",
          width: 1200,
          height: 630,
          alt: `North Installasjon — Elektriker i ${location.name}`,
        },
      ],
    },
  };
}

export default async function ElektrikerBydelPage({ params }: Props) {
  const { bydel } = await params;
  const location = getLocationBySlug(bydel);
  if (!location) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: BUSINESS.name,
    description: location.description,
    url: `${BUSINESS.siteUrl}/elektriker/${location.slug}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    logo: {
      "@type": "ImageObject",
      url: BUSINESS.logoUrl,
    },
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
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
  };

  const localReviews = getReviewsByLocation(location.slug);
  const childLocations = location.parentSlug
    ? []
    : getChildLocations(location.slug);
  const parentLocation = location.parentSlug
    ? getLocationBySlug(location.parentSlug)
    : undefined;

  const breadcrumbItems: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hjem",
      item: BUSINESS.siteUrl,
    },
  ];
  if (parentLocation) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: `Elektriker i ${parentLocation.name}`,
      item: `${BUSINESS.siteUrl}/elektriker/${parentLocation.slug}`,
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: `Elektriker i ${location.name}`,
      item: `${BUSINESS.siteUrl}/elektriker/${location.slug}`,
    });
  } else {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: `Elektriker i ${location.name}`,
      item: `${BUSINESS.siteUrl}/elektriker/${location.slug}`,
    });
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const faqJsonLd =
    location.faq && location.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const reviewJsonLd =
    localReviews.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ElectricalContractor",
          name: BUSINESS.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              localReviews.reduce((sum, r) => sum + r.rating, 0) /
              localReviews.length
            ).toFixed(1),
            reviewCount: localReviews.length,
            bestRating: 5,
          },
          review: localReviews.slice(0, 3).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
            },
            reviewBody: r.text,
            datePublished: r.date,
          })),
        }
      : null;

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {reviewJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      )}
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {location.name}, {location.county}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-3xl">
            Elektriker i {location.name}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-10">
            {location.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-dark transition-colors inline-flex items-center justify-center gap-2.5"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Trust-signaler */}
          <div className="flex flex-wrap gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { label: "Fornøyde kunder", value: STATS.customers },
              { label: "Års erfaring", value: STATS.experienceYears },
              { label: "Vurdering", value: `${STATS.rating} ★` },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjenester i området */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-4">
            Tjenester i {location.name}
          </h2>
          <p className="text-navy-dark/60 text-lg mb-12 max-w-2xl">
            Vi tilbyr et bredt spekter av elektrikertjenester i {location.name}. Alt fra elbillader og sikringsskap til større næringsinstallasjoner.
          </p>
          {location.focusServices && location.focusServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {location.focusServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-navy-dark/[0.03] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-teal-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-teal-accent" />
                    </div>
                    <h3 className="font-bold text-navy-dark text-lg">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-navy-dark/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.services.map((service) => (
                <div
                  key={service}
                  className="bg-navy-dark/[0.03] rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-teal-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-teal-accent" />
                  </div>
                  <p className="font-semibold text-navy-dark">{service}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bygningsmasse */}
      {location.buildingTypes && (
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-teal-accent" />
                  <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
                    Bygningsmasse i {location.name}
                  </h2>
                </div>
                <p className="text-navy-dark/70 text-lg leading-relaxed">
                  {location.buildingTypes}
                </p>
              </div>
              {location.localHook && (
                <div className="mt-10 lg:mt-0">
                  <p className="text-navy-dark/60 text-lg leading-relaxed">
                    {location.localHook}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Lokalkunnskap */}
      <section className="bg-navy-dark/[0.02] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
              Elektriker med lokalkunnskap i {location.name}
            </h2>
            <p className="text-navy-dark/60 text-lg leading-relaxed mb-6">
              {location.localInfo}
            </p>
            <p className="text-navy-dark/60 text-lg leading-relaxed">
              Vi betjener blant annet {location.neighborhoods.slice(0, 4).join(", ")} og {location.neighborhoods.slice(4).join(", ")}.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Autorisert",
                  text: "Godkjent av Direktoratet for samfunnssikkerhet og beredskap (DSB)",
                },
                {
                  icon: BadgeCheck,
                  title: "Samsvarserklæring",
                  text: "Vi leverer alltid samsvarserklæring og registrering i Boligmappa",
                },
                {
                  icon: Clock,
                  title: "Rask respons",
                  text: "Vi svarer raskt på henvendelser og gir konkrete prisestimater",
                },
                {
                  icon: Star,
                  title: "Høy kvalitet",
                  text: `${STATS.rating} av 5 i snitt basert på kundeanmeldelser`,
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white rounded-2xl p-5 shadow-sm">
                  <Icon className="w-5 h-5 text-teal-accent mb-3" />
                  <p className="font-bold text-navy-dark text-sm mb-1">{title}</p>
                  <p className="text-navy-dark/70 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kundehistorier */}
      {localReviews.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquareQuote className="w-6 h-6 text-teal-accent" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
                Hva kundene i {location.name} sier
              </h2>
            </div>
            <p className="text-navy-dark/60 text-lg mb-12 max-w-2xl">
              Ekte tilbakemeldinger fra kunder vi har hjulpet i {location.name}-området.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localReviews.slice(0, 3).map((review) => (
                <div
                  key={review.name}
                  className="bg-navy-dark/[0.03] rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-navy-dark/20"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-navy-dark/70 leading-relaxed mb-4 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  {review.erfaring && (
                    <div className="bg-teal-accent/5 border-l-2 border-teal-accent rounded-r-xl p-4 mb-4">
                      <p className="text-navy-dark/60 text-sm leading-relaxed">
                        {review.erfaring}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-navy-dark/5">
                    {review.image && (
                      <Image
                        src={review.image}
                        alt={`Arbeid utført for ${review.name}`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover w-10 h-10"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-navy-dark text-sm">
                        {review.name}
                      </p>
                      <p className="text-navy-dark/50 text-xs">
                        {review.locationLabel}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/anmeldelser"
                className="text-teal-accent font-semibold hover:underline inline-flex items-center gap-2"
              >
                Se alle anmeldelser
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {location.faq && location.faq.length > 0 && (
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-teal-accent" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
                Ofte stilte spørsmål om elektriker i {location.name}
              </h2>
            </div>
            <p className="text-navy-dark/60 text-lg mb-12 max-w-2xl">
              Her finner du svar på vanlige spørsmål om elektrikerarbeid i{" "}
              {location.name}.
            </p>
            <div className="max-w-3xl space-y-4">
              {location.faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white rounded-2xl shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-navy-dark text-lg list-none">
                    {item.question}
                    <span className="ml-4 shrink-0 text-teal-accent transition-transform group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-navy-dark/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Steder vi dekker */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-4">
            Steder vi dekker i {location.name}
          </h2>
          <p className="text-navy-dark/60 text-lg mb-10">
            North Installasjon rykker ut til hele {location.name}-området, inkludert:
          </p>
          {childLocations.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {childLocations.map((child) => (
                <Link
                  key={child.slug}
                  href={`/elektriker/${child.slug}`}
                  className="bg-navy-dark/[0.05] text-navy-dark font-medium px-4 py-2 rounded-full text-sm hover:bg-teal-accent/10 hover:text-teal-accent transition-colors"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {location.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-navy-dark/[0.05] text-navy-dark font-medium px-4 py-2 rounded-full text-sm"
                >
                  {n}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Relaterte bydeler */}
      {location.parentSlug && parentLocation && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h3 className="text-xl font-bold text-navy-dark mb-6">
              Andre bydeler i {parentLocation.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {getChildLocations(location.parentSlug)
                .filter((sibling) => sibling.slug !== location.slug)
                .map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/elektriker/${sibling.slug}`}
                    className="text-teal-accent font-semibold text-sm hover:underline"
                  >
                    Elektriker i {sibling.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Trenger du elektriker i {location.name}?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Kontakt oss for et uforpliktende prisestimat. Vi svarer raskt og gir konkrete priser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kalkulator"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5"
            >
              Beregn pris
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Relaterte lenker */}
      <section className="py-16 border-t border-navy-dark/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h3 className="text-sm font-semibold text-navy-dark/40 uppercase tracking-widest mb-6">
            Andre steder vi dekker
          </h3>
          <div className="flex flex-wrap gap-3">
            {getAllLocationSlugs()
              .filter((s) => s !== location.slug)
              .map((s) => {
                const loc = getLocationBySlug(s);
                if (!loc) return null;
                return (
                  <Link
                    key={s}
                    href={`/elektriker/${s}`}
                    className="text-teal-accent font-semibold text-sm hover:underline"
                  >
                    Elektriker i {loc.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
