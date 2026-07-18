import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/store";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Store — Freediving Gear & Sea Critter Apparel",
  description:
    "Fins, masks, wetsuits, dive computers, and Sea Critter apparel — the same gear our instructors train with, shipped from Pondicherry.",
  alternates: { canonical: "/store" },
};

export default function StorePage() {
  return (
    <div className="bg-abyss px-6 pb-24 pt-10">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Store", path: "/store" }])} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          depth="−4 M"
          eyebrow="Store"
          title="Gear we actually train with"
          lead="Fins, masks, wetsuits, and dive computers issued on our own courses, plus Sea Critter apparel. Payments are confirmed by our team after checkout — see order notes at checkout."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/store/${p.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-foam/10 bg-foam/[0.03] transition hover:border-lagoon/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-trench">
                  <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="font-gauge text-xs uppercase tracking-[0.2em] text-shallows/60">{p.category}</p>
                  <h2 className="mt-2 font-display text-lg font-semibold text-foam group-hover:text-shallows">{p.name}</h2>
                  <p className="mt-2 text-sm text-foam/65">{p.tagline}</p>
                  <p className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-gauge text-lagoon">₹{p.priceInr.toLocaleString("en-IN")}</span>
                    <span className="text-coral group-hover:translate-x-1 transition">Details →</span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
