"use client";

import { PostMetadata } from "@/utils/posts";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useIntersection, useWindowSize } from "react-use";
import { OnboardingThumbnail } from "./onboarding-thumbnail";
import { SegmentedControl } from "./segmented-control";
import { TrWorkoutPlayerThumbnail } from "./tr-workout-player-thumbnail";

export const ProjectsSection: FC<{ postsMetadata: PostMetadata[] }> = ({
  postsMetadata,
}) => {
  const [category, setCategory] = useState("all");

  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-xl text-gray-50  sm:text-2xl">
        Projects
      </h2>

      <SegmentedControl
        items={[
          {
            value: "all",
            content: (
              <>
                All{" "}
                <span className={category === "all" ? "text-gray-500" : ""}>
                  ({`${8}`})
                </span>
              </>
            ),
          },
          {
            value: "engineering",
            content: (
              <>
                Engineering{" "}
                <span
                  className={category === "engineering" ? "text-gray-500" : ""}
                >
                  ({`${8}`})
                </span>
              </>
            ),
          },
          {
            value: "design",
            content: (
              <>
                Design/UX{" "}
                <span className={category === "design" ? "text-gray-500" : ""}>
                  ({`${8}`})
                </span>
              </>
            ),
          },
        ]}
        value={category}
        onChange={(value) => setCategory(value)}
        className="mb-12 w-full max-w-[360px]"
      />

      <div className="grid max-w-[960px] grid-cols-1 gap-10 lg:grid-cols-2">
        {postsMetadata.map((metadata) => {
          return (
            <Link key={metadata.slug} href={`/${metadata.slug}`}>
              <ProjectCard metadata={metadata} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const ProjectCard: FC<{ metadata: PostMetadata }> = ({ metadata }) => {
  const ProjectThumbnail = getThumbnail(metadata.slug);
  const [hovering, setHovering] = useState(false);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 640;

  const active = hovering || (mobile && !!intersection?.isIntersecting);

  return (
    <div
      ref={intersectionRef}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`group relative flex h-80 flex-col overflow-hidden rounded-lg border-[1px] border-white border-opacity-10 bg-gray-950 px-4  sm:px-6`}
    >
      <div className="absolute inset-[1px] bg-project-card opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
      <header className="flex flex-col items-center p-6 text-center">
        <h3 className=" text-lg font-semibold text-gray-100">
          {metadata.title}
        </h3>
        <span
          className={`text-sm text-gray-500 ${!metadata.company && "hidden"}`}
        >
          {metadata.company}
        </span>
      </header>
      <ProjectThumbnail
        active={active}
        mobile={mobile}
        className="relative bottom-[-8px]"
      />
    </div>
  );
};

function getThumbnail(slug: string) {
  switch (slug) {
    case "puzzle-onboarding": {
      return OnboardingThumbnail;
    }
    case "tr-workout-player": {
      return TrWorkoutPlayerThumbnail;
    }
    case "a": {
      return () => <></>;
      // return TrWorkoutPlayerThumbnail;
    }
    default: {
      throw new Error(`Invalid slug: ${slug}`);
    }
  }
}
