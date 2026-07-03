import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime, extractHeadings } from "./mdx-utils";
import type { Heading } from "./mdx-utils";
import { getPublicImageMetadata } from "./image-metadata";
import type { ImageOrientation } from "./image-metadata";

export type BlogCategory = "fagartikkel" | "prosjekt" | "nyhet";
export type BlogImageOrientation = ImageOrientation;

export type { Heading };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  date: string;
  category: BlogCategory;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageOrientation?: BlogImageOrientation;
  author: string;
  keywords: string[];
  content: string;
  readingTime: number;
  headings: Heading[];
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getBlogImageFields(imagePath: string) {
  if (!imagePath) {
    return {};
  }

  try {
    const metadata = getPublicImageMetadata(imagePath);
    return {
      imageWidth: metadata.width,
      imageHeight: metadata.height,
      imageOrientation: metadata.orientation,
    };
  } catch {
    return {};
  }
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? "",
        metaTitle: data.metaTitle,
        description: data.description ?? "",
        date: data.date ?? "",
        category: (data.category ?? "fagartikkel") as BlogCategory,
        image: data.image ?? "",
        ...getBlogImageFields(data.image ?? ""),
        author: data.author ?? "North Installasjon",
        keywords: data.keywords ?? [],
        readingTime: calculateReadingTime(content),
        headings: extractHeadings(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Strip leading H1 that duplicates the frontmatter title
  const cleanContent = content.replace(/^\s*#\s+.+\n*/, "");

  return {
    slug,
    title: data.title ?? "",
    metaTitle: data.metaTitle,
    description: data.description ?? "",
    date: data.date ?? "",
    category: (data.category ?? "fagartikkel") as BlogCategory,
    image: data.image ?? "",
    ...getBlogImageFields(data.image ?? ""),
    author: data.author ?? "North Installasjon",
    keywords: data.keywords ?? [],
    content: cleanContent,
    readingTime: calculateReadingTime(content),
    headings: extractHeadings(cleanContent),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export const categoryLabels: Record<BlogCategory, string> = {
  fagartikkel: "Fagartikkel",
  prosjekt: "Prosjekt",
  nyhet: "Nyhet",
};

export function getRelatedPosts(
  slug: string,
  limit = 10
): Omit<BlogPost, "content">[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const catA = a.category === current.category ? 2 : 0;
      const catB = b.category === current.category ? 2 : 0;
      const kwA = current.keywords.filter((k) => a.keywords.includes(k)).length;
      const kwB = current.keywords.filter((k) => b.keywords.includes(k)).length;
      return (catB + kwB) - (catA + kwA);
    })
    .slice(0, limit);
}

export function getPostsByKeywords(
  keywords: string[],
  limit = 3
): Omit<BlogPost, "content">[] {
  return getAllPosts()
    .filter((p) => keywords.some((k) => p.keywords.includes(k) || p.title.toLowerCase().includes(k)))
    .slice(0, limit);
}
