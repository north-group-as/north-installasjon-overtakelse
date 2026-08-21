export type NewsKind = "bransje";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  kind: NewsKind;
  source: string;
  href: string;
  cta: string;
  image?: string;
}

const industryItems: NewsItem[] = [
  {
    id: "bransje-elkontroll-oppussing",
    title: "Flere oppgraderer el-anlegget før oppussing",
    description:
      "Når kjøkken, bad eller kjeller skal bygges om, lønner det seg å få kontroll på kurser, jordfeilvern og dokumentasjon før håndverkerne starter.",
    date: "2026-05-21",
    kind: "bransje",
    source: "Bransjefokus",
    href: "/kontakt",
    cta: "Planlegg oppgraderingen",
    image: "/images/blog/north-montor-arbeid.webp",
  },
  {
    id: "bransje-lading-borettslag",
    title: "Borettslag trenger bedre oversikt før de utvider elbillading",
    description:
      "Ladepunkter, kapasitet og felles infrastruktur bør vurderes samlet før styret bestiller nye løsninger.",
    date: "2026-05-16",
    kind: "bransje",
    source: "Bransjefokus",
    href: "/tjenester/borettslag-og-sameie",
    cta: "Se løsning for borettslag",
    image: "/images/service-elbillader.webp",
  },
  {
    id: "bransje-eldre-boliger",
    title: "Eldre boliger bør sjekkes før strømforbruket øker",
    description:
      "Varmepumpe, elbillader og mer teknisk utstyr kan presse gamle kurser hardere enn anlegget var laget for.",
    date: "2026-05-09",
    kind: "bransje",
    source: "Bransjefokus",
    href: "/kontakt",
    cta: "Bestill vurdering",
    image: "/images/service-sikringsskap.webp",
  },
];

export function getAllNewsItems(): NewsItem[] {
  return [...industryItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedNewsItems(limit = 5): NewsItem[] {
  return getAllNewsItems().slice(0, limit);
}
