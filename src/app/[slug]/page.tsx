import { Tag } from "@/components/tag";
import { getPostsMetadata, loadPost } from "@/utils/posts";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const { Content, metadata } = await loadPost(`${params.slug}.mdx`);

  return (
    <div className="prose prose-invert mx-auto px-5">
      <nav className="mb-6 flex items-center gap-0.5 pt-5 text-xs sm:pt-20">
        <Link
          href="/"
          className="text-gray-500 no-underline transition-colors duration-100 hover:text-gray-200"
        >
          Home
        </Link>
        <CaretRightIcon width={14} height={14} className="text-gray-500" />
        <span className="text-gray-200">{`${metadata.title} ${
          metadata.company && `(${metadata.company})`
        }`}</span>
      </nav>
      <main>
        <header className="mb-5">
          <h1 className="mb-2">{metadata.title}</h1>
          <div className="mb-3 text-sm text-gray-400">
            {[...metadata.roles, metadata.duration.text].join(" • ")}
          </div>
          <div className="mb-2 flex items-center gap-1.5">
            {metadata.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
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
