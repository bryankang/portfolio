"use client";

import { PostMetadata } from "@/utils/posts";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useMedia, useMouseHovered } from "react-use";
import { SegmentedControl } from "./segmented-control";
import { HexagonToolbarThumbnail } from "./thumbnails/hexagon-toolbar-thumbnail";
import { PuzzleOnboardingThumbnail } from "./thumbnails/puzzle-onboarding-thumbnail";
import { PuzzleSlackAppThumbnail } from "./thumbnails/puzzle-slack-app-thumbnail";
import { PuzzleStripeAppThumbnail } from "./thumbnails/puzzle-stripe-app-thumbnail";
import { TrPlanBuilderThumbnail } from "./thumbnails/tr-plan-builder-thumbnail";
import { TrWorkoutPlayerThumbnail } from "./thumbnails/tr-workout-player-thumbnail";
import { WishWholesaleThumbnail } from "./thumbnails/wish-wholesale-thumbnail";

export const ProjectsSection: FC<{ postsMetadata: PostMetadata[] }> = ({
  postsMetadata,
}) => {
  const [category, setCategory] = useState("all");

  const engineeringPostsMetadata = postsMetadata.filter((metadata) =>
    metadata.tags.includes("engineering")
  );
  const designPostsMetadata = postsMetadata.filter((metadata) =>
    metadata.tags.includes("design")
  );
  const filteredPostsMetadata =
    category === "all"
      ? postsMetadata
      : category === "engineering"
      ? engineeringPostsMetadata
      : designPostsMetadata;

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
                  ({`${postsMetadata.length}`})
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
                  ({`${engineeringPostsMetadata.length}`})
                </span>
              </>
            ),
          },
          {
            value: "design",
            content: (
              <>
                Design{" "}
                <span className={category === "design" ? "text-gray-500" : ""}>
                  ({`${designPostsMetadata.length}`})
                </span>
              </>
            ),
          },
        ]}
        value={category}
        onChange={(value) => setCategory(value)}
        className="mb-8 w-full max-w-[360px]"
      />

      <div className="grid w-full max-w-[960px] grid-cols-1 gap-5 lg:grid-cols-2">
        {filteredPostsMetadata.map((metadata) => {
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
  const [_, reset] = useState({});
  const ProjectThumbnail = getThumbnail(metadata.slug);
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef(null);
  const cursorPosition = useMouseHovered(containerRef, {
    bound: true,
    whenHovered: true,
  });
  const desktop = useMedia("(min-width: 768px)", false);
  const mobile = !desktop;

  const active = hovering || mobile;

  return (
    <div
      ref={containerRef}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`group relative flex h-[300px] max-h-[300px] w-full flex-col items-stretch overflow-hidden rounded-lg border-[1px] border-white border-opacity-[12%] bg-gray-950`}
    >
      <div
        className="absolute inset-0 z-10 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
        style={
          {
            "--x": `calc(${cursorPosition.elX} * 1px)`,
            "--y": `calc(${cursorPosition.elY} * 1px)`,
            background: `radial-gradient(420px circle at var(--x) var(--y),rgba(255,255,255,0.05),transparent)`,
          } as any
        }
      />
      <header className="flex flex-col items-center p-6 pb-4 text-center">
        <h3 className=" text-lg font-semibold text-gray-100">
          {metadata.title}
        </h3>
        <span
          className={`text-sm text-gray-500 ${!metadata.company && "hidden"}`}
        >
          {metadata.company}
        </span>
      </header>
      <div className="relative flex flex-grow flex-col items-center justify-center">
        <ProjectThumbnail active={active} mobile={mobile} />
      </div>
    </div>
  );
};

function getThumbnail(slug: string) {
  switch (slug) {
    case "hexagon-design-system": {
      return TrWorkoutPlayerThumbnail;
    }
    case "hexagon-toolbar": {
      return HexagonToolbarThumbnail;
    }
    case "puzzle-dashboard": {
      return PuzzleOnboardingThumbnail;
    }
    case "puzzle-onboarding": {
      return PuzzleOnboardingThumbnail;
    }
    case "puzzle-slack-app": {
      return PuzzleSlackAppThumbnail;
    }
    case "puzzle-spending-explorer": {
      return PuzzleOnboardingThumbnail;
    }
    case "puzzle-stripe-app": {
      return PuzzleStripeAppThumbnail;
    }
    case "tr-mobile-app": {
      return TrWorkoutPlayerThumbnail;
    }
    case "tr-plan-builder": {
      return TrPlanBuilderThumbnail;
    }
    case "tr-workout-player": {
      return TrWorkoutPlayerThumbnail;
    }
    case "wish-wholesale": {
      return WishWholesaleThumbnail;
    }
    default: {
      throw new Error(`Invalid slug: ${slug}`);
    }
  }
}
