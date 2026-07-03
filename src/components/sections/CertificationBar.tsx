import Image from "next/image";

const certifications = [
  {
    name: "StartBANK",
    label: "StartBANK-registrert",
    src: "/images/logos/startbank.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Sentralt Godkjent",
    label: "Sentralt godkjent",
    src: "/images/logos/sentralt-godkjent.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Registrert elektroinstallatør",
    label: "Registrert elektroinstallatør",
    src: "/images/logos/registrert-elektroinstallatoer.webp",
    width: 120,
    height: 120,
  },
  {
    name: "DSB",
    label: "DSB-godkjent",
    src: "/images/logos/dsb.webp",
    width: 120,
    height: 40,
  },
  {
    name: "NHO Elektro",
    label: "NHO Elektro-medlem",
    src: "/images/logos/nho-elektro-1024x285.webp",
    width: 160,
    height: 45,
  },
];

export default function CertificationBar() {
  return (
    <section className="bg-navy-dark py-8 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="h-12 flex items-center justify-center">
                <Image
                  src={cert.src}
                  alt={cert.label}
                  width={cert.width}
                  height={cert.height}
                  loading="eager"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-white/50 font-medium tracking-wide">
                {cert.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
