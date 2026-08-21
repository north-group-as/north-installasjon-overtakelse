import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";
import { getAllComparisons } from "@/lib/comparisons";
import { getAllLocationSlugs } from "@/lib/locations-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.northinstallasjon.no";
  const staticLastMod = new Date("2026-04-05");

  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/prosjekter/${p.slug}`,
    lastModified: staticLastMod,
  }));

  const comparisonUrls: MetadataRoute.Sitemap = getAllComparisons().map((c) => ({
    url: `${baseUrl}/sammenlign/${c.slug}`,
    lastModified: new Date(c.updated ?? c.date),
  }));

  return [
    { url: baseUrl, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester`, lastModified: staticLastMod },
    { url: `${baseUrl}/kontakt`, lastModified: staticLastMod },
    { url: `${baseUrl}/prosjekter`, lastModified: staticLastMod },
    { url: `${baseUrl}/om-oss`, lastModified: staticLastMod },
    { url: `${baseUrl}/privacy-policy`, lastModified: staticLastMod },
    { url: `${baseUrl}/karriere`, lastModified: staticLastMod },
    { url: `${baseUrl}/jobb-med-oss`, lastModified: staticLastMod },
    { url: `${baseUrl}/kalkulator`, lastModified: staticLastMod },
    { url: `${baseUrl}/aktuelt`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/elbillader`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/service`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/bedrift`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/restaurant-og-naering`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/borettslag-og-sameie`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/nybygg`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/hasteoppdrag`, lastModified: staticLastMod },
    { url: `${baseUrl}/tjenester/pris`, lastModified: staticLastMod },
    { url: `${baseUrl}/sammenlign`, lastModified: staticLastMod },
    { url: `${baseUrl}/vilkar`, lastModified: staticLastMod },
    { url: `${baseUrl}/anmeldelser`, lastModified: staticLastMod },
    { url: `${baseUrl}/faq`, lastModified: staticLastMod },
    { url: `${baseUrl}/personvern`, lastModified: staticLastMod },
    ...projectUrls,
    ...comparisonUrls,
    ...getAllLocationSlugs().map((slug) => ({
      url: `${baseUrl}/elektriker/${slug}`,
      lastModified: staticLastMod,
    })),
  ];
}
