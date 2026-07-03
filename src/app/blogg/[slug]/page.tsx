import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, getAllSlugs, categoryLabels, getRelatedPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/business-data";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import TableOfContents from "./TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Innlegg ikke funnet" };
  return {
    title: post.metaTitle || post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: BUSINESS.siteUrl }],
    alternates: {
      canonical: `https://www.northinstallasjon.no/blogg/${slug}`,
    },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && { images: [`${BUSINESS.siteUrl}${post.image}`] }),
    },
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[æ]/g, "ae")
    .replace(/[ø]/g, "o")
    .replace(/[å]/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const mdxComponents: MDXComponents = {
  h2: ({ children }) => {
    const text = typeof children === "string" ? children : String(children);
    const id = slugify(text);
    return (
      <h2 id={id} className="scroll-mt-24">
        {children}
      </h2>
    );
  },
  table: ({ children }) => (
    <table aria-label="Tabell i artikkelen">
      {children}
    </table>
  ),
  img: ({ src, alt }) => (
    <Image
      src={typeof src === "string" ? src : ""}
      alt={alt || ""}
      width={800}
      height={500}
      className="rounded-xl my-6"
      sizes="(max-width: 768px) 100vw, 720px"
    />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${BUSINESS.siteUrl}${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: BUSINESS.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS.logoUrl,
      },
    },
    keywords: post.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BUSINESS.siteUrl}/blogg/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hjem",
        item: BUSINESS.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogg",
        item: `${BUSINESS.siteUrl}/blogg`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BUSINESS.siteUrl}/blogg/${slug}`,
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header with split layout */}
      <div className="bg-navy-dark">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/blogg" className="hover:text-white/70 transition-colors">
              Blogg
            </Link>
            <span>/</span>
            <span>{categoryLabels[post.category]}</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
                <time
                  dateTime={post.date}
                  itemProp="datePublished"
                  className="flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  Publisert{" "}
                  {new Date(post.date).toLocaleDateString("nb-NO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <address className="not-italic flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>Av </span>
                  <a
                    href="/om-oss"
                    rel="author"
                    className="hover:text-white transition-colors"
                  >
                    {post.author}
                  </a>
                </address>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min lesetid
                </span>
              </div>
            </div>
            {post.image && (
              <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  quality={85}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article content + TOC */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 lg:grid lg:grid-cols-[1fr_16rem] lg:gap-12">
          <article className="prose prose-lg prose-navy [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-navy-dark [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy-dark [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-navy-dark/70 [&_p]:leading-relaxed [&_p]:mb-6 [&_a]:text-teal-accent [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline [&_ul]:space-y-2 [&_ul]:text-navy-dark/70 [&_li]:leading-relaxed [&_strong]:text-navy-dark [&_blockquote]:border-l-4 [&_blockquote]:border-teal-accent [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-navy-dark/60 [&_ol]:space-y-2 [&_ol]:text-navy-dark/70 [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-sm [&_th]:bg-navy-dark/5 [&_th]:text-navy-dark [&_th]:font-semibold [&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_th]:border [&_th]:border-navy-dark/10 [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-navy-dark/10 [&_td]:text-navy-dark/70 [&_tr:hover]:bg-navy-dark/[0.02]">
            <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>

          <TableOfContents headings={post.headings} />
        </div>
      </section>

      <RelatedPosts posts={relatedPosts} />

      {/* Back to blog */}
      <section className="border-t border-navy-dark/5 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til bloggen
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Trenger du elektriker?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Kontakt oss for en uforpliktende samtale om ditt prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kalkulator"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Beregn pris
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
