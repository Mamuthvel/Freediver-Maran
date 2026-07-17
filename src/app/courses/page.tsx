import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { breadcrumbSchema, courseSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "PADI Freediving Courses in India — Prices & Levels",
  description:
    "Compare all PADI freediving certifications at Sea Critter: Basic Freediver (1 day, ₹8,500) to Master Freediver (40 m, ₹34,500). Small batches, all equipment included.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <div className="bg-abyss px-6 pb-24 pt-36">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }]), ...courses.map(courseSchema)]} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          depth="−6 M" eyebrow="Courses"
          title="PADI freediving courses in India"
          lead="Every recreational rating PADI offers, taught in batches of four or fewer. Prices include eLearning, equipment, and certification fees — no surprises at the boat."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link href={`/courses/${c.slug}`} className="group block h-full rounded-3xl border border-foam/10 bg-gradient-to-b from-foam/[0.05] to-transparent p-8 transition hover:border-lagoon/40">
                <div className="flex items-baseline justify-between">
                  <span className="font-gauge text-sm tracking-[0.2em] text-shallows/70">LEVEL {c.level} · {c.duration.toUpperCase()}</span>
                  <span className="font-gauge text-2xl text-lagoon">{c.maxDepth}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-foam group-hover:text-shallows">{c.name}</h2>
                <p className="mt-2 text-foam/65">{c.tagline}</p>
                <p className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-foam/50">₹{c.priceInr.toLocaleString("en-IN")} all-inclusive</span>
                  <span className="text-coral group-hover:translate-x-1 transition">Details →</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
