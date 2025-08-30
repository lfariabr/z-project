// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllPostSlugs, readPostSource } from "@/lib/posts";
import { renderMdx } from "@/lib/mdx";
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  try {
    const { meta, content } = readPostSource(slug);
    const mdx = await renderMdx(content);

    return (
      <div>
        <article className="prose prose-neutral mx-auto max-w-3xl p-6">
          <h1 className="mb-2 text-3xl font-semibold">{meta.title}</h1>
          <p className="-mt-2 text-sm opacity-60">{new Date(meta.date).toLocaleDateString()}</p>
          {mdx}
        </article>
        <Footer center/>
      </div>
    );
  } catch {
    notFound();
  }
}