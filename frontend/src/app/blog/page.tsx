// app/blog/page.tsx
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer'

export const metadata = { title: "Zero Dopamine's Blog" };

export default async function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-semibold text-white">Zero Dopamine's Blog</h1>
      <p className="text-gray-300">The antidote to comfort culture: raw discipline in written form.</p>
      <div className="grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <Card className="bg-gray-800/80 border-gray-700 transition hover:shadow-lg hover:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags && p.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/60 text-gray-200 border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-gray-400">{new Date(p.date).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link href="/" passHref>
          <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white">
            Join the Movement
          </Button>
        </Link>
      </div>
    </div>
  );
}