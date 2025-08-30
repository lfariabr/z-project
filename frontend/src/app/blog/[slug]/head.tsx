import { readPostSource } from "@/lib/posts";

export default function Head({ params }: { params: { slug: string } }) {
    const { meta } = readPostSource(params.slug);
    return (
        <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            </>
    );
}