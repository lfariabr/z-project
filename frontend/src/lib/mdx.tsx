import { compileMDX } from "next-mdx-remote/rsc"
import type { ReactElement } from "react"

function MyCallout({ children }: { children: React.ReactNode }) {
    return ( 
        <div className="my-4 rounded-2xl border p-4 text-sm">
            <strong>Note:</strong>
            {children}
        </div>
    );
}

export const mdxComponents = { MyCallout } satisfies Record<string, unknown>;

export async function renderMdx(source: string): Promise<ReactElement> {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });
  return content;
}