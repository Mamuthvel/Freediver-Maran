import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
};

export const categories = [
  "Freediving", "Training", "Equipment", "Travel",
  "Safety", "PADI", "Marine Life", "Ocean Conservation",
] as const;

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const words = content.split(/\s+/).length;
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        readingTime: `${Math.max(2, Math.round(words / 200))} min read`,
      } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: { ...(data as Omit<PostMeta, "slug" | "readingTime">), slug }, content };
}
