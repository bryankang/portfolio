import { HeaderBorder } from "@/components/header-border";
import { ProjectsSection } from "@/components/projects-section";
import { getPostsMetadata } from "@/utils/posts";
import {
  EnvelopeClosedIcon,
  FileTextIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Home() {
  const postsMetadata = await getPostsMetadata();

  return (
    <div className="min-h-screen">
      <header className="fixed z-50 h-12 w-full sm:h-24">
        <div className="absolute bottom-[-50%] left-0 right-0 top-0 backdrop-blur-md gradient-mask-b-0" />
        <div className="absolute bottom-[-50%] left-0 right-0 top-0 backdrop-blur-md gradient-mask-b-0" />
        <div className="relative h-full px-4 sm:px-6">
          <div className="relative mx-auto h-full max-w-[800px]">
            <div className="flex h-full items-center justify-between">
              <nav>
                <Link href="/" className="text-white">
                  Bryan Kang
                </Link>
              </nav>
              <div className="flex items-center gap-1 sm:gap-2">
                <Link
                  href="mailto:bryankang33@gmail.com"
                  className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-300"
                >
                  <EnvelopeClosedIcon width={12} height={12} />
                  Email
                </Link>
                <Link
                  href="https://linkedin.com/in/bryan-kang-178480141"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-300"
                >
                  <LinkedInLogoIcon width={12} height={12} />
                  LinkedIn
                </Link>
                <Link
                  href="mailto:bryankang33@gmail.com"
                  className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-300"
                >
                  <FileTextIcon width={12} height={12} />
                  Resume
                </Link>
              </div>
            </div>
            <HeaderBorder />
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6">
        <div className="mb-28 bg-gray-950 px-4 pt-36 text-center sm:mb-40 sm:pt-56">
          <h1 className="mx-auto mb-3 inline-block flex-grow-0 bg-main-header bg-clip-text text-3xl font-semibold text-transparent">
            Designer + Engineer
          </h1>
          <div className="mx-auto text-2xl font-semibold text-white">
            I specialize in frontend development and UI/UX
          </div>
        </div>

        <ProjectsSection postsMetadata={postsMetadata} />
      </main>

      <div className="h-[1000px]" />
    </div>
  );

  <main className="px-4 sm:px-6">
    <div className="mb-28 bg-gray-950 px-4 pt-36 text-center">
      {/* <h1 className="mx-auto mb-3 inline-block flex-grow-0 bg-main-header bg-clip-text text-3xl font-semibold text-transparent">
      Designer + Engineer
    </h1> */}
      {/* <div className="sm:w-max-[720px] mx-auto text-2xl font-semibold text-white sm:w-[720px]">
      I specialize in frontend development and UI/UX
    </div> */}
    </div>

    {/* <ProjectsSection posts={posts} /> */}
  </main>;

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
