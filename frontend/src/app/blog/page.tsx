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
      <h1 className="text-3xl font-semibold">ZD's Blog</h1>
      <div className="grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <Card className="transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{p.description}</p>
                <p className="mt-2 text-xs opacity-70">{new Date(p.date).toLocaleDateString()}</p>
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
      <Footer center/>
    </div>
  );
}