"use client";

import { Post } from "@/utils/posts";
import { FC, useState } from "react";
import { OnboardingThumbnail } from "./onboarding-thumbnail";
import { SegmentedControl } from "./segmented-control";
import { TrWorkoutPlayerThumbnail } from "./tr-workout-player-thumbnail";

export const ProjectsSection: FC<{ posts: Post[] }> = ({ posts }) => {
  const [category, setCategory] = useState("all");

  return (
    <section>
      <h2 className="mb-4 text-center text-2xl  text-gray-50">Projects</h2>

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
        className="mb-4"
      />

      <ProjectCard post={posts[0]} />

      <div
        className={`flex h-72 max-w-[540px] flex-col rounded-lg border-[1px] border-white border-opacity-10 bg-gray-950 px-4 gradient-mask-b-50 sm:px-6`}
      >
        <header className="flex flex-col items-center p-4 text-center">
          <h3 className=" text-lg font-semibold text-gray-100">
            Workout Player
          </h3>
          <span className="text-sm text-gray-500">TrainerRoad</span>
        </header>
        <TrWorkoutPlayerThumbnail />
      </div>

      <div className="h-96" />
      <div className="h-96" />
      <div className="h-96" />
      <div className="h-96" />
    </section>
  );
};

const ProjectCard: FC<{ post: Post }> = ({ post }) => {
  return (
    <div
      className={`flex h-72 max-w-[540px] flex-col rounded-lg border-[1px] border-white border-opacity-10 bg-gray-950 px-4 gradient-mask-b-50 sm:px-6`}
    >
      <header className="flex flex-col items-center p-4 text-center">
        <h3 className=" text-lg font-semibold text-gray-100">Onboarding</h3>
        <span className="text-sm text-gray-500">Puzzle</span>
      </header>
      <OnboardingThumbnail />
    </div>
  );
};
