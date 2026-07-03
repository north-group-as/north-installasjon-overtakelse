import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllCourses, getCourseBySlug } from "@/lib/courses-data";
import { BUSINESS } from "@/lib/business-data";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Clock,
  Globe,
  Award,
  Monitor,
  Users,
  CheckCircle2,
  Phone,
  BookOpen,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCourses().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Kurs ikke funnet" };
  return {
    title: `${course.title} | Kurs`,
    description: course.description,
    alternates: {
      canonical: `https://www.northinstallasjon.no/kurs/${slug}`,
    },
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
  }).format(price);
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  // Relaterte kurs: bruk kuratert liste fra data, fall tilbake til andre kurs
  // av samme type. SEO-audit 2026-06-15: 8 av 9 orphan pages — denne seksjonen
  // gir hver kurs-side 2-3 nye interne lenker til andre /kurs/*-sider.
  const relatedCourses = (course.relatedSlugs ?? [])
    .map((s) => getCourseBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const breadcrumbJsonLd = {
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
        name: "Kurs",
        item: `${BUSINESS.siteUrl}/kurs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${BUSINESS.siteUrl}/kurs/${course.slug}`,
      },
    ],
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    url: `${BUSINESS.siteUrl}/kurs/${course.slug}`,
    inLanguage: "nb",
    ...(course.price && {
      offers: {
        "@type": "Offer",
        price: course.price,
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
      },
    }),
    ...(course.duration && { timeRequired: course.duration }),
    educationalCredentialAwarded: course.certificate,
    teaches: course.learningOutcomes,
    courseMode: course.type === "digital" ? "online" : "onsite",
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            href="/kurs"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white/70 transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Alle kurs
          </Link>

          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            {course.type === "digital" ? "Digitalt kurs" : "Fysisk kurs"}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {course.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            {course.price && (
              <span className="text-green font-bold text-2xl">
                {formatPrice(course.price)}{" "}
                <span className="text-white/30 text-sm font-normal">
                  {course.priceNote}
                </span>
              </span>
            )}
            {!course.price && course.priceNote && (
              <span className="text-white/60 font-semibold text-lg">
                {course.priceNote}
              </span>
            )}
            {course.duration && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
            )}
            {course.language && (
              <span className="inline-flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                {course.language}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: description + outcomes */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-navy-dark tracking-tight mb-6">
                Om kurset
              </h2>
              <p className="text-[15px] text-navy-dark/60 leading-relaxed mb-12">
                {course.fullDescription}
              </p>

              <h2 className="text-2xl font-extrabold text-navy-dark tracking-tight mb-6">
                Det du lærer
              </h2>
              <ul className="space-y-4">
                {course.learningOutcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-[15px] text-navy-dark/70"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: info card */}
            <div>
              <div className="bg-navy-dark/5 rounded-2xl p-8 sticky top-28">
                <h3 className="text-lg font-bold text-navy-dark mb-6">
                  Kursinformasjon
                </h3>
                <div className="space-y-5">
                  {course.price && (
                    <div className="flex items-start gap-3">
                      <span className="text-green font-bold text-xl">
                        {formatPrice(course.price)}
                      </span>
                      <span className="text-navy-dark/40 text-sm mt-1">
                        {course.priceNote}
                      </span>
                    </div>
                  )}
                  {!course.price && course.priceNote && (
                    <p className="text-navy-dark/60 font-semibold">
                      {course.priceNote}
                    </p>
                  )}

                  <div className="border-t border-navy-dark/10 pt-5 space-y-4">
                    <div className="flex items-center gap-3 text-sm text-navy-dark/60">
                      <Monitor className="w-4 h-4 text-teal-accent shrink-0" />
                      {course.type === "digital"
                        ? "Digitalt, PC/mobil/nettbrett"
                        : "Fysisk kurs med instruktør"}
                    </div>
                    {course.duration && (
                      <div className="flex items-center gap-3 text-sm text-navy-dark/60">
                        <Clock className="w-4 h-4 text-teal-accent shrink-0" />
                        {course.duration}
                      </div>
                    )}
                    {course.language && (
                      <div className="flex items-center gap-3 text-sm text-navy-dark/60">
                        <Globe className="w-4 h-4 text-teal-accent shrink-0" />
                        {course.language}
                      </div>
                    )}
                    <div className="flex items-start gap-3 text-sm text-navy-dark/60">
                      <Award className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      {course.certificate}
                    </div>
                  </div>

                  <div className="border-t border-navy-dark/10 pt-5">
                    {course.url ? (
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green text-white font-semibold px-6 py-3 rounded-xl transition-colors hover:bg-green-dark text-sm inline-flex items-center justify-center gap-2 cursor-pointer w-full"
                      >
                        Kjøp kurs
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href="/kontakt"
                        className="bg-green text-white font-semibold px-6 py-3 rounded-xl transition-colors hover:bg-green-dark text-sm inline-flex items-center justify-center gap-2 cursor-pointer w-full"
                      >
                        Kontakt oss for påmelding
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-teal-accent" />
              <h2 className="text-2xl font-extrabold text-navy-dark tracking-tight">
                Hvem passer kurset for?
              </h2>
            </div>
            <ul className="space-y-4">
              {course.targetAudience.map((audience) => (
                <li
                  key={audience}
                  className="flex items-center gap-3 text-[15px] text-navy-dark/70"
                >
                  <span className="w-2 h-2 rounded-full bg-green shrink-0" />
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Relaterte kurs */}
      {relatedCourses.length > 0 && (
        <section className="bg-navy-dark/5 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Andre kurs
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
                Relaterte kurs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {relatedCourses.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/kurs/${rc.slug}`}
                  className="group bg-white rounded-2xl p-8 flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-dark flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-teal-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark mb-2 group-hover:text-green transition-colors">
                    {rc.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70 leading-relaxed mb-6 flex-1">
                    {rc.description}
                  </p>
                  <span className="text-green font-semibold text-sm inline-flex items-center gap-1.5">
                    Les mer <ArrowRight className="w-4 h-4" />
                  </span>
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
            {course.url
              ? "Klar for å starte?"
              : "Ønsker du å bestille dette kurset?"}
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            {course.url
              ? "Start kurset i dag og få tilgang med en gang."
              : "Ta kontakt med oss for tilpasset kursopplegg og pris."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {course.url ? (
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Kjøp kurs
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="/kontakt"
                className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Kontakt oss
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
            <a
              href={BUSINESS.phoneHref}
              className="border-2 border-navy-dark/20 text-navy-dark font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/5 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Ring oss
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
