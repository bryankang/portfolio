import { HeaderBorder } from "@/components/header-border";
import { ProjectsSection } from "@/components/projects-section";
import { getPosts } from "@/utils/posts";
import {
  EnvelopeClosedIcon,
  FileTextIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  console.log("posts", posts);

  // return posts.map(({ Thumbnail }) => <Thumbnail active />);

  return (
    <div className="min-h-screen">
      <header className="fixed w-full px-4 sm:px-6">
        <div className="absolute bottom-[-50%] left-0 right-0 top-[-1px] backdrop-blur-md gradient-mask-b-0" />
        <div className="absolute bottom-[-50%] left-0 right-0 top-[-1px] backdrop-blur-md gradient-mask-b-0" />
        <div className="relative flex h-12 items-center justify-between">
          <nav>
            <Link href="/" className="text-white">
              Bryan Kang
            </Link>
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="mailto:bryankang33@gmail.com"
              className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-400"
            >
              <EnvelopeClosedIcon width={12} height={12} />
              Email
            </Link>
            <Link
              href="https://linkedin.com/in/bryan-kang-178480141"
              target="_blank"
              className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-400"
            >
              <LinkedInLogoIcon width={12} height={12} />
              LinkedIn
            </Link>
            <Link
              href="mailto:bryankang33@gmail.com"
              className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-400"
            >
              <FileTextIcon width={12} height={12} />
              Resume
            </Link>
          </div>
        </div>
        <HeaderBorder />
      </header>

      <main className="px-4 sm:px-6">
        <div className="mb-28 bg-gray-950 px-4 pt-36 text-center">
          <h1 className="mb-3 inline-block flex-grow-0 self-auto bg-main-header bg-clip-text text-3xl font-semibold text-transparent">
            Designer + Engineer
          </h1>
          <div className="text-2xl font-semibold text-white">
            I specialize in frontend development and UI/UX
          </div>
        </div>

        <ProjectsSection posts={posts} />
      </main>
    </div>
  );

  // return posts.map((post) => {
  //   return (
  //     <Link
  //       key={post.data.title}
  //       href={`/${post.slug}`}
  //       className="dark:text-pink-500"
  //     >
  //       {post.data.title}
  //     </Link>
  //   );
  // });
}
