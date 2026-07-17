import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { courses } from "@/lib/courses";
import { locations } from "@/lib/locations";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/courses"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...courses.map((c) => ({ url: absoluteUrl(`/courses/${c.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: absoluteUrl("/locations"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...locations.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: absoluteUrl("/training"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/trips"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/deep-dive-dubai"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/underwater-journaling"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/gallery"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/reviews"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/book"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...getAllPosts().map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
