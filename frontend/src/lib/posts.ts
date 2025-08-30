// lib/posts.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  slug: string;
  description?: string;
  date: string; // ISO string
  tags?: string[];
  cover?: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getAllPostSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/i, ""));
}

export function readPostSource(slug: string) {
  const fullPathMd = path.join(POSTS_DIR, `${slug}.md`);
  const fullPathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    title: data.title ?? slug,
    slug: data.slug ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString(),
    tags: data.tags ?? [],
    cover: data.cover ?? undefined,
  };

  return { meta, content };
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPostSource(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}