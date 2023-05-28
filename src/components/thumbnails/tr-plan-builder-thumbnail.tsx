import { CheckIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { Window } from "./window";

export const TrPlanBuilderThumbnail: FC<{
  active?: boolean;
  fullscreen?: boolean;
}> = ({ active, fullscreen }) => {
  return (
    <Window
      className={`absolute left-[15%] ${
        fullscreen ? "top-[20%]" : "top-[8%]"
      } flex ${
        fullscreen ? "h-[85%]" : "h-[92%]"
      } w-full flex-col gradient-mask-b-50`}
    >
      <div
        className={`flex h-14 flex-shrink-0 items-center gap-2.5 border-b-[1px] border-gray-800 px-4`}
      >
        <HamburgerMenuIcon
          width={16}
          height={16}
          className={`transition-colors duration-300 ${
            active ? "text-gray-300" : "text-gray-500"
          }`}
        />
        <div
          className={`font-semibold transition-colors duration-300 ${
            active ? "text-gray-50" : "text-gray-400"
          }`}
        >
          Plan Builder
        </div>
      </div>
      <div
        className={`flex h-8 flex-shrink-0 items-center gap-10 border-b-[1px] border-gray-800`}
      >
        <div
          className={`relative flex h-full flex-shrink-0 items-center gap-10`}
        >
          <div className={`flex flex-shrink-0 items-center gap-1 pl-4 text-xs`}>
            <span
              className={`flex-shrink-0 transition-colors duration-300  ${
                active ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Plan name
            </span>
            <CheckIcon
              width={14}
              height={14}
              className={`flex-shrink-0 transition-colors duration-300 ${
                active ? "text-green-300" : "text-gray-500"
              }`}
            />
          </div>
          <div className={`flex flex-shrink-0 items-center gap-1 text-xs`}>
            <span
              className={`flex-shrink-0 transition-colors duration-300  ${
                active ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Training load
            </span>
            <CheckIcon
              width={14}
              height={14}
              className={`flex-shrink-0 transition-colors duration-300 ${
                active ? "text-green-300" : "text-gray-500"
              }`}
            />
          </div>
          <div className={`flex flex-shrink-0 items-center gap-1 text-xs`}>
            <span
              className={`flex-shrink-0 transition-colors duration-300 ${
                active ? "text-gray-100" : "text-gray-400"
              }`}
            >
              Volume
            </span>
            <CheckIcon
              width={14}
              height={14}
              className={`invisible flex-shrink-0`}
            />
          </div>
          <div
            style={{
              background: `linear-gradient(90deg, #B4F067 0%, #41CC60 100%)`,
            }}
            className={`absolute bottom-[-1px] left-0 h-[1px] w-full bg-gray-200 transition-opacity duration-300 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className={`flex h-full flex-shrink-0 items-center gap-10`}>
          <div className={`flex flex-shrink-0 items-center gap-1 text-xs`}>
            <span
              className={`transition-colors duration-300  ${
                active ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Experience
            </span>
            <CheckIcon
              width={14}
              height={14}
              className={`invisible flex-shrink-0`}
            />
          </div>
          <div className={`flex flex-shrink-0 items-center gap-1 text-xs`}>
            <span
              className={`transition-colors duration-300  ${
                active ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Starting date
            </span>
            <CheckIcon
              width={14}
              height={14}
              className={`invisible flex-shrink-0`}
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 px-4 py-5`}>
        <span
          className={`font-medium transition-colors duration-300 ${
            active ? "text-gray-100" : "text-gray-500"
          }`}
        >
          Choose your training volume
        </span>
        <span
          className={`text-sm leading-5 transition-colors duration-300 ${
            active ? "text-gray-500" : "text-gray-700"
          }`}
        >
          Based on your previous selections we recommend starting the low volume
          training plan.
        </span>
      </div>
    </Window>
  );
};
