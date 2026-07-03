import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime, extractHeadings } from "./mdx-utils";
import type { Heading } from "./mdx-utils";

export type ComparisonType = "head-to-head" | "roundup" | "matrix";

export interface ProductSpec {
  name: string;
  brand: string;
  price: string;
  power: string;
  app: string;
  loadBalancing: string;
  builtInDCProtection: boolean;
  warranty: string;
  origin: string;
  bestFor: string;
  rating?: number;
}

export interface ComparisonPost {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  date: string;
  updated?: string;
  type: ComparisonType;
  image: string;
  author: string;
  keywords: string[];
  products: ProductSpec[];
  verdict?: string;
  content: string;
  readingTime: number;
  headings: Heading[];
}

const COMPARISONS_DIR = path.join(process.cwd(), "content/sammenlign");

export const comparisonTypeLabels: Record<ComparisonType, string> = {
  "head-to-head": "Mot hverandre",
  roundup: "Beste i test",
  matrix: "Full sammenligning",
};

export function getAllComparisons(): Omit<ComparisonPost, "content">[] {
  if (!fs.existsSync(COMPARISONS_DIR)) return [];

  const files = fs
    .readdirSync(COMPARISONS_DIR)
    .filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(COMPARISONS_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? "",
        metaTitle: data.metaTitle,
        description: data.description ?? "",
        date: data.date ?? "",
        updated: data.updated,
        type: (data.type ?? "head-to-head") as ComparisonType,
        image: data.image ?? "",
        author: data.author ?? "North Installasjon",
        keywords: data.keywords ?? [],
        products: (data.products ?? []) as ProductSpec[],
        verdict: data.verdict,
        readingTime: calculateReadingTime(content),
        headings: extractHeadings(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getComparisonBySlug(slug: string): ComparisonPost | null {
  const filePath = path.join(COMPARISONS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const cleanContent = content.replace(/^\s*#\s+.+\n*/, "");

  return {
    slug,
    title: data.title ?? "",
    metaTitle: data.metaTitle,
    description: data.description ?? "",
    date: data.date ?? "",
    updated: data.updated,
    type: (data.type ?? "head-to-head") as ComparisonType,
    image: data.image ?? "",
    author: data.author ?? "North Installasjon",
    keywords: data.keywords ?? [],
    products: (data.products ?? []) as ProductSpec[],
    verdict: data.verdict,
    content: cleanContent,
    readingTime: calculateReadingTime(content),
    headings: extractHeadings(cleanContent),
  };
}

export function getAllComparisonSlugs(): string[] {
  if (!fs.existsSync(COMPARISONS_DIR)) return [];
  return fs
    .readdirSync(COMPARISONS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
