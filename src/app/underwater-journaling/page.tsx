import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Underwater Journaling — Explore Nature Beneath the Surface",
  description:
    "Underwater Journaling combines snorkeling, breath awareness, nature observation, and creative reflection in rivers, streams, and shallow aquatic environments. No experience required.",
  alternates: { canonical: "/underwater-journaling" },
};

const experience = [
  "Guided snorkeling and water exploration",
  "Breath awareness and relaxation techniques",
  "Nature observation exercises",
  "Waterproof journaling and sketching",
  "Mindfulness and reflection practices",
  "Learning about aquatic ecosystems and wildlife",
  "Time to slow down and reconnect with nature",
];

const whoFor = [
  "Nature lovers",
  "Artists and writers",
  "Photographers and creatives",
  "Families and travelers",
  "Yoga and mindfulness practitioners",
  "Anyone seeking a deeper connection with nature",
];

export default function UnderwaterJournalingPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Underwater Journaling", path: "/underwater-journaling" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / UNDERWATER JOURNALING
          </nav>
          <DepthMarker depth="−3 M" label="Underwater Journaling" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            Explore nature beneath the surface
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            A unique experience that combines snorkeling, breath awareness, nature observation, and creative reflection —
            no previous freediving or snorkeling experience required.
          </p>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-foam/75">
              Using simple snorkeling equipment and waterproof journals, participants explore rivers, streams, and
              shallow aquatic environments while observing wildlife, sketching, writing, and recording their experiences
              beneath the surface.
            </p>
            <p className="mt-4 leading-relaxed text-foam/75">
              Rather than focusing on depth or performance, the experience encourages participants to slow down, become
              present, and reconnect with nature through water.
            </p>
            <p className="mt-4 leading-relaxed text-foam/75">
              For our lead facilitator, water has always been a place of silence, curiosity, and discovery. Underwater
              Journaling was created as a way to share that experience with others — offering an opportunity to see the
              natural world from a completely different perspective.
            </p>
            <p className="mt-4 leading-relaxed text-foam/75">
              From tiny freshwater creatures hidden among river plants to the movement of light through the water, every
              session becomes an opportunity to observe, reflect, and reconnect.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-trench px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading depth="−4 M" eyebrow="The experience" title="What you'll experience" /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {experience.map((e) => (
              <div key={e} className="flex gap-3 rounded-xl border border-foam/10 bg-foam/[0.03] p-4 text-sm text-foam/75">
                <span className="text-lagoon">◆</span>{e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading depth="−5 M" eyebrow="Who it's for" title="Who is it for?" /></Reveal>
          <div className="flex flex-wrap gap-3">
            {whoFor.map((w) => (
              <span key={w} className="rounded-full border border-foam/15 px-5 py-2.5 text-sm text-foam/80">{w}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-foam/55">No previous freediving or snorkeling experience is required.</p>
        </div>
      </section>

      <section className="bg-trench px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading depth="−6 M" eyebrow="Philosophy" title="The philosophy" />
            <p className="leading-relaxed text-foam/75">
              We spend so much of our lives moving quickly through the world around us. Underwater Journaling invites us
              to slow down, observe, and become part of nature — even if only for a few moments.
            </p>
            <p className="mt-4 leading-relaxed text-foam/75">
              Sometimes the most meaningful discoveries happen in silence, beneath the surface.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Coming soon</p>
            <p className="mt-4 leading-relaxed text-foam/70">
              Future experiences will include immersive nature-based retreats in rivers, forests, and unique aquatic
              environments designed to bring together exploration, learning, creativity, and connection with the natural
              world.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-descent px-6 py-24">
        <div className="rays opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-foam md:text-4xl">Curious to join a session?</h2>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-coral px-8 py-4 font-semibold text-abyss transition hover:brightness-110">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
