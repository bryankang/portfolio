"use client";

import {
  BoxIcon,
  ChevronLeftIcon,
  CircleIcon,
  Cross1Icon,
  EraserIcon,
  HandIcon,
  HobbyKnifeIcon,
  MagicWandIcon,
  RulerHorizontalIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import { FC } from "react";
import { Window } from "./window";

export const HexagonToolbarThumbnail: FC<{
  active?: boolean;
  fullscreen?: boolean;
}> = ({ active, fullscreen }) => {
  const width = active ? 24 + 6 * 40 : 24 + 4 * 40;

  return (
    <Window
      style={{
        width,
      }}
      className={`${
        fullscreen ? undefined : "mb-12"
      } relative flex h-[48px] items-center justify-between !rounded-full py-3 transition-all duration-300`}
    >
      <div
        className={`transition-all duration-300 ${
          active ? "opacity-0" : "opacity-100"
        } absolute left-[12px] flex h-[40px] w-[40px] flex-grow-0 items-center justify-center ${
          active ? "text-cyan-50" : "text-gray-400"
        }`}
      >
        <CircleIcon />
      </div>
      <div
        className={`absolute left-[40px] flex h-[40px] w-[264px] shrink-0 items-center justify-center  ${
          active ? "text-cyan-100" : "text-gray-400"
        } transition-transform duration-300 ${
          active ? "translate-x-[-40px]" : "translate-x-0"
        }`}
      >
        <div
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
            active ? "text-cyan-100" : "text-gray-400"
          } transition-all duration-300`}
        >
          <ChevronLeftIcon
            width={16}
            height={16}
            className={` absolute left-[8px]
            ${active ? "opacity-100" : "opacity-0"}
            transition-all duration-300 `}
          />
          <BoxIcon />
        </div>

        <div
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
            active ? "text-cyan-200" : "text-gray-400"
          } ${
            active ? "opacity-100" : "opacity-0"
          } transition-all duration-300 `}
        >
          <HandIcon />
        </div>
        <div
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
            active ? "text-cyan-300" : "text-gray-400"
          } ${
            active ? "opacity-100" : "opacity-0"
          } transition-all duration-300 `}
        >
          <RulerHorizontalIcon />
        </div>
        <div
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
            active ? "text-cyan-400" : "text-gray-400"
          } ${
            active ? "opacity-100" : "opacity-0"
          } transition-all duration-300 `}
        >
          <HobbyKnifeIcon />
        </div>
        <div
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
            active ? "text-cyan-500" : "text-gray-400"
          } ${
            active ? "opacity-100" : "opacity-0"
          } transition-all duration-300 `}
        >
          <EraserIcon />
        </div>
        <div
          className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
            active ? "text-cyan-600" : "text-gray-400"
          } ${
            active ? "opacity-100" : "opacity-0"
          } transition-all duration-300 `}
        >
          <MagicWandIcon />
        </div>
      </div>
      <div
        className={`absolute left-[88px] flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
          active ? "text-cyan-200" : "text-gray-400"
        } ${active ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      >
        <VercelLogoIcon />
      </div>
      <div
        className={`absolute left-[128px] flex h-[40px] w-[40px] shrink-0 items-center justify-center ${
          active ? "text-cyan-200" : "text-gray-400"
        } ${active ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      >
        <Cross1Icon />
      </div>
    </Window>
  );
};
