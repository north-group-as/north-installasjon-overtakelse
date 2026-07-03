export interface Heading {
  id: string;
  text: string;
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[æ]/g, "ae")
    .replace(/[ø]/g, "o")
    .replace(/[å]/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractHeadings(content: string): Heading[] {
  const matches = content.matchAll(/^##\s+(.+)$/gm);
  return Array.from(matches).map((m) => ({
    id: slugify(m[1]),
    text: m[1],
  }));
}
