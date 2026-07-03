export const BUSINESS = {
  name: "North Installasjon AS",
  phone: "+4774999333",
  phoneDisplay: "749 99 333",
  phoneHref: "tel:+4774999333",
  phoneInstruction: "tastevalg 4",
  email: "post@northinstallasjon.no",
  emailHref: "mailto:post@northinstallasjon.no",
  serviceArea: "Oslo",
  serviceAreaStatement: "Din elektriker i Oslo",
  address: {
    street: "Frydenbergveien 46b",
    postalCode: "0575",
    city: "Oslo",
    region: "Oslo",
    country: "NO",
  },
  logoPath: "/images/logo-north-installasjon.webp",
  logoUrl: "https://www.northinstallasjon.no/images/logo-north-installasjon.webp",
  siteUrl: "https://www.northinstallasjon.no",
} as const;

export const PARTNERS = [
  { name: "Gardermoen Elektro" },
  { name: "Sentrum Elektriske" },
  { name: "Laukas" },
] as const;

export const STATS = {
  customers: "Hundrevis",
  experienceYears: "10+",
  rating: "5.0",
  ratingCount: "6",
} as const;
