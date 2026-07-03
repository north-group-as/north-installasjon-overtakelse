"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPostImage } from "@/components/blog/BlogPostImage";
import type { BlogCategory } from "@/lib/blog";

const categoryLabels: Record<BlogCategory, string> = {
  fagartikkel: "Fagartikkel",
  prosjekt: "Prosjekt",
  nyhet: "Nyhet",
};

const allCategories: Array<"all" | BlogCategory> = [
  "all",
  "fagartikkel",
  "prosjekt",
  "nyhet",
];

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  image: string;
  readingTime: number;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blogg/${post.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-navy-dark/5 hover:shadow-xl transition-shadow"
    >
      <div className="grid md:grid-cols-2">
        {post.image && (
          <BlogPostImage
            src={post.image}
            alt={post.title}
            context="featured"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        )}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-accent">
              {categoryLabels[post.category]}
            </span>
            <span className="text-navy-dark/20">|</span>
            <span className="flex items-center gap-1 text-xs text-navy-dark/40">
              <Calendar className="w-3 h-3" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1 text-xs text-navy-dark/40">
              <Clock className="w-3 h-3" />
              {post.readingTime} min
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark tracking-tight mb-4 group-hover:text-teal-accent transition-colors">
            {post.title}
          </h2>
          <p className="text-navy-dark/70 leading-relaxed mb-6 line-clamp-3">
            {post.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-accent group-hover:gap-2.5 transition-all">
            Les artikkelen
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blogg/${post.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-navy-dark/5 hover:shadow-lg transition-shadow"
    >
      {post.image && (
        <BlogPostImage
          src={post.image}
          alt={post.title}
          context="card"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-accent">
            {categoryLabels[post.category]}
          </span>
          <span className="flex items-center gap-1 text-xs text-navy-dark/40">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1 text-xs text-navy-dark/40">
            <Clock className="w-3 h-3" />
            {post.readingTime} min
          </span>
        </div>
        <h2 className="text-xl font-bold text-navy-dark mb-2 group-hover:text-teal-accent transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-navy-dark/70 leading-relaxed line-clamp-3">
          {post.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-accent mt-4 group-hover:gap-2 transition-all">
          Les mer
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<"all" | BlogCategory>("all");

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allCategories.map((cat) => {
          const isActive = cat === active;
          const label = cat === "all" ? "Alle" : categoryLabels[cat];
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-navy-dark text-white"
                  : "bg-navy-dark/5 text-navy-dark/60 hover:bg-navy-dark/10"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Posts */}
      {filtered.length === 0 ? (
        <p className="text-navy-dark/70 text-center text-lg py-12">
          Ingen innlegg i denne kategorien ennå.
        </p>
      ) : (
        <div className="space-y-10">
          {/* Featured (first post) */}
          {featured && <FeaturedCard post={featured} />}

          {/* Grid for the rest */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
