// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllPostSlugs, readPostSource } from "@/lib/posts";
import { renderMdx } from "@/lib/mdx";
import Footer from '@/components/Footer'
import { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  try {
    const { meta, content } = readPostSource(slug);
    const mdx = await renderMdx(content);

    return (
      <>
      <div className="mx-auto max-w-3xl px-6 py-12 text-gray-100">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            {meta.title}
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            {new Date(meta.date).toLocaleDateString()}
          </p>
        </header>
        
        <article className="prose prose-invert max-w-none">
          {mdx}
        </article>
      </div>
      </>
    );
  } catch {
    notFound();
  }
}