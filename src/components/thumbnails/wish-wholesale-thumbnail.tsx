import { FC } from "react";
import { WishLogo } from "../logos/wish-logo";

export const WishWholesaleThumbnail: FC<{
  active?: boolean;
  fullscreen?: boolean;
}> = ({ active, fullscreen }) => {
  return (
    <div
      className={`flex flex-col items-center gap-1 ${
        fullscreen ? undefined : "mb-12"
      }`}
    >
      <WishLogo active={active} />
      <div
        className={`text-xs tracking-widest transition-colors duration-300 ${
          active ? "text-gray-400" : "text-gray-500"
        }`}
      >
        WHOLESALE
      </div>
    </div>
  );
};
