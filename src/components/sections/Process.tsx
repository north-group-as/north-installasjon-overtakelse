import { ClipboardCheck, FileText, Wrench, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Befaring",
    description:
      "Vi kommer ut og vurderer jobben på stedet, helt uforpliktende.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Tilbud",
    description:
      "Du mottar et tydelig tilbud med forutsigbar pris. Ingen overraskelser.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Installasjon",
    description:
      "Sertifiserte elektrikere utfører jobben trygt og etter forskriftene.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Ferdigmelding",
    description:
      "Vi ferdigmelder arbeidet til myndighetene og leverer dokumentasjon.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Slik jobber vi med elektroinstallasjon",
  description: "Vår prosess fra befaring til ferdigmelding av elektroinstallasjonsoppdrag i Oslo-området.",
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
  },
  step: steps.map((step) => ({
    "@type": "HowToStep",
    name: step.title,
    description: step.description,
  })),
};

export default function Process() {
  return (
    <section className="py-28 lg:py-36 bg-navy-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight mb-20">
          Slik jobber vi
        </h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 gap-8">

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative text-center">
                  {/* Large number */}
                  <p className="text-6xl font-extrabold text-teal-accent/30 leading-none mb-1 select-none">
                    {step.number}
                  </p>

                  <div className="mb-6" />

                  {/* Icon + title */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon className="w-6 h-6 text-teal-accent" />
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/60 text-[15px] leading-relaxed max-w-[220px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[5px] w-[2px] bg-white/10"
          />

          <div className="space-y-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex gap-6 items-start">
                  {/* Teal dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-teal-accent ring-4 ring-navy-dark" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white/30 uppercase tracking-wider mb-1">
                      Steg {step.number}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-6 h-6 text-teal-accent" />
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/60 text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
