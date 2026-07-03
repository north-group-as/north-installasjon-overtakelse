import Link from "next/link";
import { BlogPostImage } from "./BlogPostImage";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: Omit<BlogPost, "content">[];
}

export default function RelatedPosts({ posts }: Props) {
  if (!posts.length) return null;
  return (
    <section className="border-t border-navy-dark/5 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <h2 className="text-lg font-bold text-navy-dark mb-6">Les også</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogg/${post.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden border border-navy-dark/8 hover:border-teal-accent/30 transition-colors"
            >
              {post.image && (
                <BlogPostImage
                  src={post.image}
                  alt={post.title}
                  context="related"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
              <div className="px-4 py-4">
                <p className="text-sm font-semibold text-navy-dark group-hover:text-teal-accent transition-colors line-clamp-2">
                  {post.title}
                </p>
                <p className="text-xs text-navy-dark/70 mt-1 line-clamp-2">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
