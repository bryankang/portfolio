"use client";

import { FC } from "react";
import { useWindowScroll } from "react-use";

export const HeaderBorder: FC<{ className?: string }> = ({ className }) => {
  const { y } = useWindowScroll();

  return (
    <div
      className={`h-[1px] bg-white transition duration-75 ease-in-out ${
        y === 0 ? "opacity-0" : "opacity-10"
      } ${className}`}
    />
  );
};
