import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getComparisonBySlug,
  getAllComparisonSlugs,
  comparisonTypeLabels,
} from "@/lib/comparisons";
import { BUSINESS } from "@/lib/business-data";
import ProductComparisonTable from "@/components/sammenlign/ProductComparisonTable";
import VerdictBox from "@/components/sammenlign/VerdictBox";
import ComparisonCTA from "@/components/sammenlign/ComparisonCTA";
import {
  ArrowLeft,
  Calendar,
  Clock,
  RefreshCw,
  User,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getComparisonBySlug(slug);
  if (!post) return { title: "Sammenligning ikke funnet" };
  return {
    title: post.metaTitle || post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.northinstallasjon.no/sammenlign/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      ...(post.updated && { modifiedTime: post.updated }),
      ...(post.image && { images: [{ url: post.image }] }),
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
    <table aria-label="Sammenligningstabell">
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

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const post = getComparisonBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: post.image ? `${BUSINESS.siteUrl}${post.image}` : BUSINESS.logoUrl,
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
  };

  const productSchemas = post.products.map((p) => {
    const prices = p.price.match(/[\d\s]+/g);
    const cleanPrices =
      prices
        ?.map((pr) => parseInt(pr.replace(/\s/g, ""), 10))
        .filter(Boolean) ?? [];
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      image: post.image ? `${BUSINESS.siteUrl}${post.image}` : BUSINESS.logoUrl,
      brand: { "@type": "Brand", name: p.brand },
      description: p.bestFor,
      ...(cleanPrices.length > 0 && {
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "NOK",
          price: Math.min(...cleanPrices).toString(),
          lowPrice: Math.min(...cleanPrices).toString(),
          highPrice: Math.max(...cleanPrices).toString(),
          availability: "https://schema.org/InStock",
        },
      }),
      ...(p.rating && {
        review: {
          "@type": "Review",
          author: { "@type": "Organization", name: BUSINESS.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: p.rating.toString(),
            bestRating: "10",
          },
        },
      }),
    };
  });

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />

      {/* Hero */}
      {post.image ? (
        <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
          <Image
            src={post.image}
            alt={`Illustrasjon for sammenligning: ${comparisonTypeLabels[post.type]}`}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/20" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pb-16 w-full">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link
                href="/sammenlign"
                className="hover:text-white/70 transition-colors"
              >
                Sammenlign
              </Link>
              <span>/</span>
              <span className="text-white/60">
                {comparisonTypeLabels[post.type]}
              </span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
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
              {post.updated && (
                <time
                  dateTime={post.updated}
                  itemProp="dateModified"
                  className="flex items-center gap-1.5"
                >
                  <RefreshCw className="w-4 h-4" />
                  Oppdatert{" "}
                  {new Date(post.updated).toLocaleDateString("nb-NO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              )}
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
        </section>
      ) : (
        <section className="bg-navy-dark pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link
                href="/sammenlign"
                className="hover:text-white/70 transition-colors"
              >
                Sammenlign
              </Link>
              <span>/</span>
              <span className="text-white/60">
                {comparisonTypeLabels[post.type]}
              </span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
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
              {post.updated && (
                <time
                  dateTime={post.updated}
                  itemProp="dateModified"
                  className="flex items-center gap-1.5"
                >
                  <RefreshCw className="w-4 h-4" />
                  Oppdatert{" "}
                  {new Date(post.updated).toLocaleDateString("nb-NO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              )}
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
        </section>
      )}

      {/* Product comparison table */}
      {post.products.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 lg:px-10 -mt-8 mb-12 relative z-10">
          <ProductComparisonTable products={post.products} />
        </div>
      )}

      {/* Article content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <article className="prose prose-lg prose-navy [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-navy-dark [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy-dark [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-navy-dark/70 [&_p]:leading-relaxed [&_p]:mb-6 [&_a]:text-teal-accent [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline [&_ul]:space-y-2 [&_ul]:text-navy-dark/70 [&_li]:leading-relaxed [&_strong]:text-navy-dark [&_blockquote]:border-l-4 [&_blockquote]:border-teal-accent [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-navy-dark/60 [&_ol]:space-y-2 [&_ol]:text-navy-dark/70 [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-sm [&_th]:bg-navy-dark/5 [&_th]:text-navy-dark [&_th]:font-semibold [&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_th]:border [&_th]:border-navy-dark/10 [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-navy-dark/10 [&_td]:text-navy-dark/70 [&_tr:hover]:bg-navy-dark/[0.02]">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </article>
        </div>
      </section>

      {/* Verdict */}
      {post.verdict && (
        <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-16">
          <VerdictBox
            winner={post.products[0]?.name ?? ""}
            reason={post.verdict}
          />
        </div>
      )}

      {/* Back to comparisons */}
      <section className="border-t border-navy-dark/5 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            href="/sammenlign"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til sammenligninger
          </Link>
        </div>
      </section>

      {/* CTA */}
      <ComparisonCTA />

      <Footer />
    </main>
  );
}
