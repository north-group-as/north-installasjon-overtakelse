import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getFeaturedNewsItems } from "@/lib/news-data";
import NewsRotator from "./NewsRotator";

export default function NewsPreview() {
  const items = getFeaturedNewsItems();

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-navy-dark py-12 lg:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-70 sm:h-40"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-5 h-16 w-[115%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-teal-accent/40 to-transparent blur-2xl" />
        <div className="absolute right-[-12%] top-0 h-24 w-2/3 rounded-full bg-gradient-to-l from-teal/35 via-navy-light/25 to-transparent blur-3xl" />
        <div className="absolute left-[-18%] top-8 h-20 w-1/2 rounded-full bg-gradient-to-r from-teal-accent/25 to-transparent blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 opacity-35 sm:h-56"
        aria-hidden="true"
      >
        <div className="absolute inset-x-[-10%] bottom-0 h-32 bg-navy [clip-path:polygon(0_68%,8%_50%,17%_61%,27%_33%,36%_59%,47%_20%,58%_56%,68%_31%,78%_60%,88%_38%,100%_58%,100%_100%,0_100%)] sm:h-40" />
        <div className="absolute inset-x-[-7%] bottom-0 h-28 bg-teal/45 [clip-path:polygon(0_78%,12%_56%,23%_71%,34%_43%,46%_70%,57%_48%,69%_73%,82%_50%,100%_76%,100%_100%,0_100%)] sm:h-36" />
        <div className="absolute inset-x-[-3%] bottom-0 h-20 bg-navy-light/45 [clip-path:polygon(0_72%,15%_61%,29%_72%,44%_52%,58%_70%,72%_55%,86%_69%,100%_58%,100%_100%,0_100%)] sm:h-24" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-navy-dark/50 [clip-path:polygon(0_70%,18%_58%,35%_74%,54%_55%,72%_70%,100%_60%,100%_100%,0_100%)] sm:h-16" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr] lg:items-center">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-[2.5rem]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green">
                <Newspaper className="h-5 w-5" aria-hidden="true" />
              </span>
              Siste nytt fra North
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-50/75">
              Egne saker og relevante bransjeoppdateringer for deg som planlegger
              tryggere elektriske løsninger.
            </p>
            <Link
              href="/aktuelt"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
            >
              Se alle saker
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10 sm:p-6">
            <NewsRotator items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
