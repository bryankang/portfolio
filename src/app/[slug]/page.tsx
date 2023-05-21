import { getPost, getPosts } from "@/utils/posts";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  // const { Post, post } = await loadPost(`${params.slug}.mdx`);

  const { content, metadata } = await getPost(`${params.slug}.mdx`);

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
        {content}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const params = posts.map((post) => ({
    slug: post.metadata.slug,
  }));
  return params;
}
