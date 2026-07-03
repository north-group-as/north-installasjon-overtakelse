import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { STATS } from "@/lib/business-data";
import { getFeaturedReviews } from "@/lib/reviews-data";

const testimonials = getFeaturedReviews(3);

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4 fill-yellow-400 text-yellow-400", className)}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function FiveStars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function TestimonialCard({
  text,
  name,
  locationLabel,
}: {
  text: string;
  name: string;
  locationLabel: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm flex flex-col h-full">
      <FiveStars />
      <p className="mt-4 text-sm leading-relaxed text-white/80 flex-1">{text}</p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-white/70">{locationLabel}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight">
              Hva kundene sier
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <div className="flex items-center gap-1.5">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xl font-bold text-white">{STATS.rating}</span>
            </div>
            <span className="text-sm text-white/70">
              på Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} text={t.text} name={t.name} locationLabel={t.locationLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
