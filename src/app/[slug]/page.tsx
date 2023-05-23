import { getPostsMetadata, loadPost } from "@/utils/posts";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const { Content, metadata } = await loadPost(`${params.slug}.mdx`);

  return (
    <div className="prose mx-auto min-h-screen dark:prose-invert">
      <nav>
        <Link href="/">Home</Link> / {metadata.title}
      </nav>
      <main>
        <header>
          {metadata.title} {JSON.stringify(metadata.tags)}
          {metadata.duration.text}
        </header>
        <Content />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const postsMetadata = await getPostsMetadata();
  const params = postsMetadata.map((metadata) => ({
    slug: metadata.slug,
  }));
  return params;
}
