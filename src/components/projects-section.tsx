"use client";

import { PostMetadata } from "@/utils/posts";
import Link from "next/link";
import { FC, useState } from "react";
import { OnboardingThumbnail } from "./onboarding-thumbnail";
import { SegmentedControl } from "./segmented-control";
import { TrWorkoutPlayerThumbnail } from "./tr-workout-player-thumbnail";

export const ProjectsSection: FC<{ postsMetadata: PostMetadata[] }> = ({
  postsMetadata,
}) => {
  const [category, setCategory] = useState("all");

  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-4 text-center text-xl text-gray-50  sm:text-2xl">
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
        className="mb-4 w-full max-w-[360px]"
      />

      <div className="max-w-[420px]">
        {postsMetadata.map((metadata) => {
          return (
            <Link href={`/${metadata.slug}`}>
              <ProjectCard key={metadata.slug} metadata={metadata} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const ProjectCard: FC<{ metadata: PostMetadata }> = ({ metadata }) => {
  const ProjectThumbnail = getThumbnail(metadata.slug);
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`mb-8 flex h-72 flex-col rounded-lg border-[1px] border-white border-opacity-10 bg-gray-950 px-4 gradient-mask-b-50 sm:px-6`}
    >
      <header className="flex flex-col items-center p-4 text-center">
        <h3 className=" text-lg font-semibold text-gray-100">
          {metadata.title}
        </h3>
        <span
          className={`text-sm text-gray-500 ${!metadata.company && "hidden"}`}
        >
          {metadata.company}
        </span>
      </header>
      <ProjectThumbnail active={active} />
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
    default: {
      throw new Error(`Invalid slug: ${slug}`);
    }
  }
}
