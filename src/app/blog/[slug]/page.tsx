import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.meta.title, description: post.meta.description, type: "article", publishedTime: post.meta.date },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, content } = post;

  return (
    <article className="bg-abyss px-6 pb-24 pt-36">
      <JsonLd
        data={[
          articleSchema({ ...meta, slug }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: meta.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      <div className="mx-auto max-w-2xl">
        <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
          <Link href="/" className="hover:text-foam">HOME</Link> / <Link href="/blog" className="hover:text-foam">JOURNAL</Link>
        </nav>
        <div className="mt-8">
          <DepthMarker depth="−30 M" label={meta.category} />
        </div>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-foam md:text-5xl">{meta.title}</h1>
        <p className="mt-4 text-lg text-foam/70">{meta.description}</p>
        <p className="mt-4 font-gauge text-[11px] tracking-[0.2em] text-foam/40">
          {new Date(meta.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }).toUpperCase()} · BY ARJUN NAIR
        </p>
        <div className="prose-ocean mt-10">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
        <div className="mt-16 rounded-2xl border border-lagoon/30 bg-lagoon/10 p-8 text-center">
          <p className="font-display text-2xl text-foam">Ready to try it in the water?</p>
          <Link href="/courses" className="mt-4 inline-block rounded-full bg-coral px-8 py-3.5 font-semibold text-ink transition hover:brightness-110">
            See freediving courses
          </Link>
        </div>
      </div>
    </article>
  );
}
