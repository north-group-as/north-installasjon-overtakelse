import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";
import { getAllPosts } from "@/lib/blog";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function Footer() {
  const recentPosts = getAllPosts().slice(0, 5);
  return (
    <footer className="relative overflow-hidden bg-navy-dark">
      <AuroraBackground overlay intensity="whisper" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 pb-24 lg:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Contact */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-north-installasjon-white.svg"
              alt={BUSINESS.name}
              className="h-16 w-auto mb-4"
              width={192}
              height={64}
              loading="lazy"
            />
            <p className="text-white/65 text-sm leading-relaxed max-w-xs mb-6">
              Autorisert elektroinstallasjonsforetak som leverer trygge
              løsninger til privatkunder, næringsliv og entreprenører.
            </p>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-green flex-shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-green flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-green flex-shrink-0" />
                {BUSINESS.serviceArea}
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-green flex-shrink-0" />
                Man-fre 08:00-17:00
              </li>
            </ul>
          </div>

          {/* Tjenester */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Tjenester
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>
                <Link href="/tjenester/service" className="hover:text-white transition-colors">
                  Service & feilsøking
                </Link>
              </li>
              <li>
                <Link href="/tjenester/bedrift" className="hover:text-white transition-colors">
                  Bedrift
                </Link>
              </li>
              <li>
                <Link href="/tjenester/elbillader" className="hover:text-white transition-colors">
                  Elbillader
                </Link>
              </li>
              <li>
                <Link href="/tjenester/restaurant-og-naering" className="hover:text-white transition-colors">
                  Restaurant & næring
                </Link>
              </li>
              <li>
                <Link href="/tjenester/borettslag-og-sameie" className="hover:text-white transition-colors">
                  Borettslag & sameie
                </Link>
              </li>
              <li>
                <Link href="/elektriker/oslo" className="hover:text-white transition-colors">
                  Elektriker Oslo
                </Link>
              </li>
              <li>
                <Link href="/tjenester/hasteoppdrag" className="hover:text-white transition-colors">
                  Hasteoppdrag
                </Link>
              </li>
              <li>
                <Link href="/tjenester/nybygg" className="hover:text-white transition-colors">
                  Nybygg
                </Link>
              </li>
            </ul>
          </div>

          {/* Sider */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sider
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>
                <Link
                  href="/om-oss"
                  title="Om oss"
                  className="hover:text-white transition-colors"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/anmeldelser" className="hover:text-white transition-colors">
                  Anmeldelser
                </Link>
              </li>
              <li>
                <Link href="/kurs" className="hover:text-white transition-colors">
                  Kurs og sertifisering
                </Link>
              </li>
              <li>
                <Link href="/prosjekter" className="hover:text-white transition-colors">
                  Prosjekter
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/blogg" className="hover:text-white transition-colors">
                  Blogg
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt oss
                </Link>
              </li>
              <li>
                <Link href="/kalkulator" className="hover:text-white transition-colors">
                  Priskalkulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressurser */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ressurser
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>
                <Link href="/sammenlign" className="hover:text-white transition-colors">
                  Sammenlign elbilladere
                </Link>
              </li>
              <li>
                <Link href="/tjenester/pris" className="hover:text-white transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Vanlige spørsmål
                </Link>
              </li>
              <li>
                <Link href="/personvern" className="hover:text-white transition-colors">
                  Personvernerklæring
                </Link>
              </li>
              <li>
                <a
                  href="https://tripletex.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Logg inn
                </a>
              </li>
            </ul>

            <p className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-4">
              Fagartikler
            </p>
            <ul className="space-y-2.5 text-sm text-white/65">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blogg/${post.slug}`}
                    className="hover:text-white transition-colors line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certification logos */}
        <div className="mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { src: "/images/logos/startbank.webp", alt: "StartBANK-registrert", h: "h-10", href: "https://www.startbank.no" },
              { src: "/images/logos/sentralt-godkjent.webp", alt: "Sentralt godkjent", h: "h-10", href: undefined },
              { src: "/images/logos/registrert-elektroinstallatoer.webp", alt: "Registrert elektroinstallatør", h: "h-10", href: undefined },
              { src: "/images/logos/dsb.webp", alt: "DSB-godkjent", h: "h-8", href: "https://www.dsb.no" },
              { src: "/images/logos/nho-elektro-1024x285.webp", alt: "NHO Elektro-medlem", h: "h-8", href: "https://www.nhoelektro.no" },
            ].map((logo) =>
              logo.href ? (
                <a
                  key={logo.alt}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={logo.alt}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className={`${logo.h} w-auto`}
                  />
                </a>
              ) : (
                <div key={logo.alt} title={logo.alt}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className={`${logo.h} w-auto`}
                  />
                </div>
              )
            )}
            <span className="text-xs font-semibold text-white/70 border border-white/20 rounded-md px-3 py-1.5 uppercase tracking-wider">
              Godkjent lærlingebedrift
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div>
            &copy;{" "}
            <time
              itemProp="datePublished"
              dateTime={`${new Date().getFullYear()}-01-01`}
            >
              {new Date().getFullYear()}
            </time>{" "}
            <address className="not-italic inline">
              <a
                href="/om-oss"
                rel="author"
                itemProp="author"
                className="hover:text-white transition-colors"
              >
                {BUSINESS.name}
              </a>
            </address>
            . Alle rettigheter reservert.
          </div>
          <div className="flex items-center gap-3">
            <p>Org.nr: 927 424 636</p>
            <span className="hidden sm:inline">·</span>
            <Link
              href="/privacy-policy"
              title="Personvern"
              className="hover:text-white transition-colors"
            >
              Personvern
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/vilkar" className="hover:text-white transition-colors">Vilkår</Link>
          </div>
          <p>Nettside og AI-agenter bygget av <a href="https://aikias.no" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AIKI AS</a></p>
        </div>
      </div>
    </footer>
  );
}
