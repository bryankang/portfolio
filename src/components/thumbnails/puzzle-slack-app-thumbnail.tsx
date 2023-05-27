import { FC } from "react";
import { SlackLogo } from "../logos";
import { Window } from "./window";

export const PuzzleSlackAppThumbnail: FC<{
  active?: boolean;
  fullscreen?: boolean;
}> = ({ active, fullscreen }) => {
  return (
    <Window
      className={`${
        fullscreen ? undefined : "mb-12"
      } flex h-[72px] !w-11/12 max-w-[420px] items-center justify-between gap-4 py-3 pl-2 pr-4`}
    >
      <div className={`flex h-full items-center gap-2`}>
        <SlackLogo size={40} active={active} />
        <div className={`flex flex-col`}>
          <div
            className={`text-sm font-medium transition-colors duration-300 ${
              active ? "text-gray-50" : "text-gray-500"
            }`}
          >
            Slack integration
          </div>
          <div
            className={`line-clamp-1 text-[13px] transition-colors duration-300 ${
              active ? "text-gray-500" : "text-gray-700"
            }`}
          >
            Explore your company’s finances directly on Slack
          </div>
        </div>
      </div>

      <div
        className={` inline-flex items-center justify-center rounded-sm border border-gray-800 px-2 py-1 text-[12px] font-medium transition-colors duration-300 ${
          active ? "text-gray-200" : "text-gray-500"
        }`}
      >
        Connect
      </div>
    </Window>
  );
};
