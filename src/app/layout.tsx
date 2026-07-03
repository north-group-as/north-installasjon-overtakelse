import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business-data";
import MobileCTA from "@/components/sections/MobileCTA";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.northinstallasjon.no"),
  title: {
    default: "North Installasjon | Elektriker i Oslo-området",
    template: "%s | North Installasjon",
  },
  description:
    "Autorisert elektroinstallatør som leverer trygge løsninger til privatkunder, næringsliv og entreprenører i Oslo-området.",
  keywords: [
    "elektriker",
    "oslo",
    "elektroinstallasjon",
    "elbillader",
    "autorisert installatør",
    "oslo-området",
  ],
  openGraph: {
    title: "North Installasjon | Elektriker i Oslo-området",
    description:
      "Autorisert elektroinstallatør som leverer trygge løsninger til privatkunder, næringsliv og entreprenører i Oslo-området.",
    siteName: "North Installasjon",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/images/logo-north-installasjon.webp",
        width: 1200,
        height: 630,
        alt: "North Installasjon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Installasjon | Elektriker i Oslo-området",
    description:
      "Autorisert elektroinstallatør som leverer trygge løsninger til privatkunder, næringsliv og entreprenører i Oslo-området.",
    images: [
      "/images/logo-north-installasjon.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: BUSINESS.name,
  description: `Autorisert elektroinstallasjonsforetak i ${BUSINESS.serviceArea}`,
  url: BUSINESS.siteUrl,
  telephone: BUSINESS.phone,
  logo: {
    "@type": "ImageObject",
    url: BUSINESS.logoUrl,
  },
  email: BUSINESS.email,
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
    { "@type": "City", name: "Ski" },
    { "@type": "City", name: "Ås" },
    { "@type": "City", name: "Moss" },
  ],
  serviceType: [
    "Elektroinstallasjon",
    "Service og feilsøking",
    "Elbillader-installasjon",
    "Næringsbygg elektro",
    "Borettslag elektro",
    "Restaurant og næring elektro",
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/northinstallasjon",
    "https://www.linkedin.com/company/north-installasjon",
    "https://g.page/r/northinstallasjon",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "North Installasjon",
  url: "https://www.northinstallasjon.no",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.northinstallasjon.no/blogg?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <head>
        <link
          rel="preload"
          href="/images/logo-north-installasjon-white.svg"
          as="image"
          type="image/svg+xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-navy-dark focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold"
        >
          Hopp til hovedinnhold
        </a>
        {children}
        <MobileCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
