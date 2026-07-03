import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects-data";
import { BUSINESS } from "@/lib/business-data";
import {
  BadgeCheck,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Users,
  Layers,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Prosjekt ikke funnet" };
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://www.northinstallasjon.no/prosjekter/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    location: {
      "@type": "Place",
      name: project.location,
    },
    contractor: {
      "@type": "ElectricalContractor",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
  };

  const facts = [
    { icon: Building2, label: "Kunde", value: project.kunde },
    ...(project.partner
      ? [{ icon: Users, label: "Partner", value: project.partner }]
      : []),
    { icon: Layers, label: "Omfang", value: project.scope },
    { icon: Calendar, label: "År", value: project.year },
    { icon: MapPin, label: "Sted", value: project.location },
  ];

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      {/* Header with split layout */}
      <div className="bg-navy-dark">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                {project.typeLabel}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-navy-dark/5 rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-teal-accent" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-dark/40">
                      {fact.label}
                    </p>
                  </div>
                  <p className="text-[15px] font-semibold text-navy-dark">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Om prosjektet
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>{project.longDescription}</p>
                {project.longDescription2 && (
                  <p>{project.longDescription2}</p>
                )}
                {project.longDescription3 && (
                  <p>{project.longDescription3}</p>
                )}
                {project.longDescription4 && (
                  <p>{project.longDescription4}</p>
                )}
              </div>
            </div>

            <div className="bg-navy-dark/5 rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-navy-dark mb-6">
                Leveranser
              </h3>
              <ul className="space-y-4">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-navy-dark/70"
                  >
                    <BadgeCheck className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="py-12 lg:py-20 border-t border-navy-dark/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-6">
            Neste prosjekt
          </p>
          <Link
            href={`/prosjekter/${nextProject.slug}`}
            className="group flex items-center justify-between"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight group-hover:text-teal-accent transition-colors">
              {nextProject.title}
            </h3>
            <ArrowRight className="w-6 h-6 text-navy-dark/30 group-hover:text-teal-accent group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Har du et lignende prosjekt?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Vi hjelper deg gjerne. Kontakt oss for en uforpliktende samtale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kalkulator"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Beregn pris
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
