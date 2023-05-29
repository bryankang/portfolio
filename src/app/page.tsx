import { ProjectsSection } from "@/components/projects-section";
import { getPostsMetadata } from "@/utils/posts";

export default async function Home() {
  const postsMetadata = await getPostsMetadata();

  return (
    <>
      <main className="px-4 sm:px-6">
        <div className="mb-28 bg-gray-950 px-4 pt-28 text-center sm:mb-40 sm:pt-32">
          <h1 className="mx-auto mb-3 inline-block flex-grow-0 bg-main-header bg-clip-text text-3xl font-semibold text-transparent">
            Engineer + Designer
          </h1>
          <div className="mx-auto text-2xl font-semibold text-white">
            I specialize in frontend development and UI/UX
          </div>
        </div>

        <ProjectsSection postsMetadata={postsMetadata} />
      </main>

      {/* <div className="h-[1000px]" /> */}
    </>
  );
}
