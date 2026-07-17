import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, categories } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Freediving Journal — Training, Safety, Gear & Travel",
  description:
    "Long-form guides from Sea Critter's instructors: how freediving works, how to train it, what it costs in India, and where to do it.",
  alternates: { canonical: "/blog" },
};

const featuredSlugs = [
  "what-is-freediving",
  "freediving-vs-scuba-diving",
  "how-safe-is-freediving",
  "how-to-hold-your-breath-longer",
  "padi-certification-explained",
];

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = featuredSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const rest = posts.filter((p) => !featuredSlugs.includes(p.slug));
  return (
    <div className="bg-abyss px-6 pb-24 pt-36">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Journal", path: "/blog" }])} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          depth="−30 M" eyebrow="Journal"
          title="The freediving journal"
          lead="Written by instructors, not marketers. Everything we wish students read before day one."
        />
        <ul className="mb-10 flex flex-wrap gap-2" aria-label="Categories">
          {categories.map((c) => (
            <li key={c} className="rounded-full border border-foam/15 px-4 py-1.5 font-gauge text-xs tracking-[0.15em] text-foam/60">
              {c.toUpperCase()}
            </li>
          ))}
        </ul>

        <p className="mb-4 font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Start here</p>
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-lagoon/25 bg-lagoon/[0.04] p-7 transition hover:border-lagoon/50">
                <p className="font-gauge text-xs tracking-[0.2em] text-lagoon">{p.category.toUpperCase()} · {p.readingTime.toUpperCase()}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-foam group-hover:text-shallows">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foam/65">{p.description}</p>
                <time dateTime={p.date} className="mt-5 font-gauge text-[11px] tracking-[0.2em] text-foam/40">
                  {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }).toUpperCase()}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mb-4 font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">All articles</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-foam/10 p-7 transition hover:border-lagoon/40">
                <p className="font-gauge text-xs tracking-[0.2em] text-lagoon">{p.category.toUpperCase()} · {p.readingTime.toUpperCase()}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-foam group-hover:text-shallows">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foam/65">{p.description}</p>
                <time dateTime={p.date} className="mt-5 font-gauge text-[11px] tracking-[0.2em] text-foam/40">
                  {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }).toUpperCase()}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
