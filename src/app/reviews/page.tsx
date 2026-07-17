import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews — What Students Say About Sea Critter",
  description: "Rated 4.9★ across 312 Google reviews. Read what students say after training with Sea Critter in Pondicherry, Goa, Andaman, and the Maldives.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / REVIEWS
          </nav>
          <DepthMarker depth="−10 M" label="Reviews" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            They arrived nervous. They left freedivers.
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <p aria-hidden className="text-2xl text-lagoon">★★★★★</p>
            <p className="text-foam/75">4.9 out of 5 · 312 Google reviews</p>
          </div>
        </div>
      </header>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-foam/10 bg-foam/[0.03] p-7 backdrop-blur">
                  <p aria-hidden className="text-lagoon">★★★★★</p>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-foam/80">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 font-gauge text-xs tracking-[0.15em] text-foam/50">
                    {t.name.toUpperCase()} · {t.origin.toUpperCase()} · {t.course.toUpperCase()}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 rounded-2xl border border-foam/10 bg-foam/[0.03] p-6 text-center">
            <p className="text-sm text-foam/60">
              These are a sample of our reviews. Full Google review history integration is on our roadmap —
              in the meantime, search &ldquo;Sea Critter Freediving&rdquo; on Google to read more.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
