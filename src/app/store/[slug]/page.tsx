import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProduct } from "@/lib/store";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { Reveal } from "@/components/Reveal";
import { AddToCart } from "@/components/store/AddToCart";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const title = `${p.name} — ₹${p.priceInr.toLocaleString("en-IN")}`;
  return {
    title,
    description: `${p.tagline} ₹${p.priceInr.toLocaleString("en-IN")} · Sea Critter Store.`,
    alternates: { canonical: `/store/${p.slug}` },
    openGraph: { title, type: "website" },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <article className="bg-abyss px-6 pb-24 pt-10">
      <JsonLd
        data={[
          productSchema(p),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Store", path: "/store" },
            { name: p.name, path: `/store/${p.slug}` },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
          <Link href="/" className="hover:text-foam">HOME</Link> / <Link href="/store" className="hover:text-foam">STORE</Link> / {p.name.toUpperCase()}
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-foam/10 bg-trench">
              <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <DepthMarker depth={`₹${p.priceInr.toLocaleString("en-IN")}`} label={p.category} />
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-foam md:text-4xl">{p.name}</h1>
            <p className="mt-3 text-lg text-foam/75">{p.tagline}</p>
            <p className="mt-6 leading-relaxed text-foam/75">{p.description}</p>

            <ul className="mt-6 space-y-2 text-sm text-foam/75">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3"><span className="text-lagoon">✓</span>{f}</li>
              ))}
            </ul>

            <AddToCart slug={p.slug} inStock={p.inStock} />

            <p className="mt-6 text-sm text-foam/55">
              Payments aren't processed online yet — after checkout our team confirms payment and shipping with you directly over WhatsApp or email.
            </p>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
