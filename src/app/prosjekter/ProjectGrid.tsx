"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects-data";

const filters = [
  { key: "alle", label: "Alle" },
  { key: "bolig", label: "Bolig" },
  { key: "naering", label: "Næring" },
  { key: "offentlig", label: "Offentlig" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterKey>("alle");

  const filtered =
    active === "alle"
      ? projects
      : projects.filter((p) => p.type === active);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Filter tabs */}
        <div className="flex gap-6 mb-12 border-b border-navy-dark/10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`pb-3 text-sm font-semibold transition-colors ${
                active === f.key
                  ? "text-green border-b-2 border-green"
                  : "text-navy-dark/40 hover:text-navy-dark/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/prosjekter/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt={`Elektroprosjekt: ${project.location}`}
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-green text-xs font-semibold uppercase tracking-wider mb-1">
                  {project.typeLabel}
                </p>
                <h2 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-white/70 text-sm">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
