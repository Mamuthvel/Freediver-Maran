import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews — What Students Say About Sea Critter",
  description: "Student reviews are coming soon. Read about training with Sea Critter in Pondicherry, Goa, Andaman, and the Maldives.",
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
            Student reviews are coming soon.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            We're collecting reviews from our students — check back soon to hear what they have to say.
          </p>
        </div>
      </header>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <Reveal className="rounded-2xl border border-foam/10 bg-foam/[0.03] p-8 text-center">
            <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Coming soon</p>
            <p className="mt-4 leading-relaxed text-foam/70">
              Have questions in the meantime? Reach out and we'll happily connect you with past students.
            </p>
            <Link href="/contact" className="mt-6 inline-block rounded-full bg-coral px-8 py-3 font-semibold text-ink transition hover:brightness-110">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
