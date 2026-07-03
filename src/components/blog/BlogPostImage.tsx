import Image from "next/image";

interface BlogPostImageProps {
  src: string;
  alt: string;
  context: "featured" | "card" | "related";
  priority?: boolean;
  sizes?: string;
}

export function BlogPostImage({
  src,
  alt,
  context,
  priority = false,
  sizes,
}: BlogPostImageProps) {
  const wrapperClassName =
    context === "featured"
      ? "relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden"
      : context === "related"
        ? "relative h-40 overflow-hidden"
        : "relative aspect-[16/10] overflow-hidden";

  const dimensions =
    context === "featured"
      ? { width: 1280, height: 800 }
      : context === "related"
        ? { width: 640, height: 320 }
        : { width: 800, height: 500 };

  return (
    <div className={wrapperClassName}>
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        sizes={sizes}
        priority={priority}
        quality={85}
      />
    </div>
  );
}
