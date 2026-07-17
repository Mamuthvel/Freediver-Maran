import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Deep Dive Dubai — Meet Maran",
  description:
    "Deep Dive Dubai is Sea Critter's Dubai freediving and scuba programme, led by instructor Maran — 5+ years teaching and exploring the underwater world.",
  alternates: { canonical: "/deep-dive-dubai" },
};

export default function DeepDiveDubaiPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Deep Dive Dubai", path: "/deep-dive-dubai" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / DEEP DIVE DUBAI
          </nav>
          <DepthMarker depth="−26 M" label="Deep Dive Dubai" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            Hi, I&rsquo;m Maran.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            An Indian Freediving and Scuba Instructor based in Dubai, with over 5 years of experience teaching and
            exploring the underwater world.
          </p>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="rounded-2xl border border-foam/10 bg-foam/[0.03] p-7">
              <div aria-hidden className="grid h-16 w-16 place-items-center rounded-full bg-ocean font-display text-2xl text-shallows">
                M
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-foam">Maran</h2>
              <p className="mt-1 text-sm text-shallows/70">Freediving & Scuba Instructor</p>
              <p className="mt-1 font-gauge text-xs uppercase tracking-[0.15em] text-lagoon">Based in Dubai</p>
              <p className="mt-4 text-sm leading-relaxed text-foam/65">5+ years teaching and exploring the underwater world.</p>
              <Link href="/contact" className="mt-6 block rounded-full bg-coral py-2.5 text-center text-sm font-semibold text-ink transition hover:brightness-110">
                Get in touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-lg leading-relaxed text-foam/80">
              <p>
                For me, diving has always been much more than a sport or an adventure activity. It is a way to reconnect
                with nature, find calmness in silence, and experience the ocean in its purest form.
              </p>
              <p>
                Growing up with a deep appreciation for nature shaped the way I see the underwater world today. Freediving
                has given me the opportunity to experience that connection from a completely different perspective — from
                the smallest marine life to the vastness of the open ocean.
              </p>
              <p>
                The ocean has taught me patience, presence, humility, and respect for the natural world. It continues to
                inspire my passion for exploration, teaching, and personal growth.
              </p>
              <p className="font-display text-2xl font-semibold text-foam">My goal is simple:</p>
              <p className="border-l-2 border-lagoon/60 pl-4 italic text-foam/75">
                To help others discover confidence, adventure, and a deeper connection with nature through diving.
              </p>
              <p>
                Whether you&rsquo;re taking your first breath underwater or developing your skills as a diver, my aim is to
                provide a safe, enjoyable, and unforgettable experience both above and below the surface.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-descent px-6 py-24">
        <div className="rays opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-foam md:text-4xl">Train with Maran in Dubai</h2>
            <p className="mt-4 text-foam/70">Reach out for course dates, availability, and what fits your level.</p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-coral px-8 py-4 font-semibold text-ink transition hover:brightness-110">
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
