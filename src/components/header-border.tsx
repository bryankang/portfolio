"use client";

import { FC } from "react";
import { useWindowScroll } from "react-use";

export const HeaderBorder: FC = () => {
  const { y } = useWindowScroll();

  return (
    <div
      className={`absolute bottom-0 left-4 right-4 h-[1px] bg-white transition duration-75 ease-in-out ${
        y === 0 ? "opacity-0" : "opacity-10"
      }`}
    />
  );
};
