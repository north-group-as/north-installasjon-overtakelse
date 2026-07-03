import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects-data";

const featured = projects.slice(0, 3);

const gridConfig = [
  { span: "md:col-span-7", aspect: "aspect-[4/3]", titleSize: "text-2xl", padding: "p-8" },
  { span: "md:col-span-5", aspect: "aspect-[16/10]", titleSize: "text-lg", padding: "p-6" },
  { span: "md:col-span-5", aspect: "aspect-[16/10]", titleSize: "text-lg", padding: "p-6" },
];

export default function Projects() {
  return (
    <section id="prosjekter" className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-dark tracking-tight leading-tight">
            Referanseprosjekter
          </h2>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Large image */}
          <Link
            href={`/prosjekter/${featured[0].slug}`}
            className={`${gridConfig[0].span} group relative rounded-2xl overflow-hidden ${gridConfig[0].aspect}`}
          >
            <Image
              src={featured[0].image}
              alt={featured[0].title}
              width={1200}
              height={900}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className={`absolute bottom-0 left-0 right-0 ${gridConfig[0].padding}`}>
              <p className="text-green text-xs font-semibold uppercase tracking-wider mb-1">
                {featured[0].typeLabel}
              </p>
              <h3 className={`${gridConfig[0].titleSize} font-bold text-white mb-1`}>
                {featured[0].title}
              </h3>
              <p className="text-white/70 text-sm">{featured[0].description}</p>
            </div>
          </Link>

          {/* Two stacked */}
          <div className="md:col-span-5 grid gap-6">
            {featured.slice(1).map((project, i) => (
              <Link
                key={project.slug}
                href={`/prosjekter/${project.slug}`}
                className={`group relative rounded-2xl overflow-hidden ${gridConfig[i + 1].aspect}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className={`absolute bottom-0 left-0 right-0 ${gridConfig[i + 1].padding}`}>
                  <p className="text-green text-xs font-semibold uppercase tracking-wider mb-1">
                    {project.typeLabel}
                  </p>
                  <h3 className={`${gridConfig[i + 1].titleSize} font-bold text-white mb-1`}>
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
