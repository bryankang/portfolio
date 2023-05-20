import { getPosts, loadPost } from "@/utils/posts";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const { Post, post } = await loadPost(`${params.slug}.mdx`);

  return (
    <div className="mx-auto min-h-screen prose dark:prose-invert">
      <nav><Link href="/">Home</Link> / {post.data.title}</nav>
      <main>
        <header>
          {post.data.title} {JSON.stringify(post.data.tags)}
          {post.duration.text}
        </header>
        <Post />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  return params;
}
