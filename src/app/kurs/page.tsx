import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { digitalCourses, physicalCourses } from "@/lib/courses-data";
import {
  Monitor,
  GraduationCap,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  HardHat,
  Flame,
  Zap,
  Mountain,
  Clock,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HMS- og sikkerhetskurs",
  description:
    "HMS- og sikkerhetskurs fra North Installasjon. Digitale kurs du tar når det passer deg, og fysiske kurs med sertifisering.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/kurs",
  },
};

const digitalIcons = [ShieldCheck, Mountain, BadgeCheck, GraduationCap];
const physicalIcons = [Mountain, Flame, ShieldCheck, Zap];

function formatPrice(price: number) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function KursPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Kurs og sertifisering
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Kurs for HMS og sikkerhet
          </h1>
          <p className="text-white/70 max-w-lg mx-auto text-lg leading-relaxed">
            Vi tilbyr digitale og fysiske kurs innen HMS, elsikkerhet og
            sertifisering for fagfolk og ledere.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
            Riktig kompetanse gir tryggere arbeidsplasser
          </h2>
          <p className="text-navy-dark/60 text-[15px] leading-relaxed">
            Lovpålagte kurs og sertifiseringer er ikke bare et krav, det er en
            investering i sikkerhet. Våre kurs er utviklet av fagfolk med lang
            erfaring fra elektrobransjen, og dekker alt fra FSE og HMS til
            fallsikring og brannvern.
          </p>
        </div>
      </section>

      {/* Digital courses */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Ta kurset når det passer deg
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Digitale kurs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {digitalCourses.map((course, i) => {
              const Icon = digitalIcons[i] ?? Monitor;
              return (
                <Link
                  key={course.slug}
                  href={`/kurs/${course.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-navy-dark flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-teal-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark mb-2 group-hover:text-green transition-colors">
                      {course.title}
                    </h3>
                    {course.price && (
                      <p className="text-green font-bold text-lg mb-3">
                        {formatPrice(course.price)}{" "}
                        <span className="text-navy-dark/40 text-sm font-normal">
                          ekskl. mva
                        </span>
                      </p>
                    )}
                    <p className="text-sm text-navy-dark/70 leading-relaxed mb-4 flex-1">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-navy-dark/40 mb-6">
                      {course.duration && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </span>
                      )}
                      {course.language && (
                        <span className="inline-flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5" />
                          {course.language}
                        </span>
                      )}
                    </div>
                    <span className="text-green font-semibold text-sm inline-flex items-center gap-1.5">
                      Les mer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Physical courses */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Praktisk opplæring med sertifisering
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Fysiske kurs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {physicalCourses.map((course, i) => {
              const Icon = physicalIcons[i] ?? HardHat;
              return (
                <Link
                  key={course.slug}
                  href={`/kurs/${course.slug}`}
                  className="group"
                >
                  <div className="bg-navy-dark/5 rounded-2xl p-8 flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-navy-dark flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-teal-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-green transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-navy-dark/70 leading-relaxed mb-4 flex-1">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-navy-dark/40 mb-6">
                      {course.duration && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </span>
                      )}
                      {course.language && (
                        <span className="inline-flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5" />
                          {course.language}
                        </span>
                      )}
                    </div>
                    <span className="text-green font-semibold text-sm inline-flex items-center gap-1.5">
                      Les mer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
