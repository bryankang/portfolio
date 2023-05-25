import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const HelpwiseLogo: FC<LogoProps> = ({
  active = false,
  round,
  size = DEFAULT_LOGO_SIZE,
  className,
}) => {
  return (
    <LogoBackground
      round={round}
      style={{
        width: size,
        height: size,
      }}
      className={`${active ? "bg-[#031A61]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.1326 6.9988L7.01494 24.0236C5.67077 25.3605 5.66485 27.5339 7.00175 28.8782L24.0187 45.9878C25.3556 47.3322 27.529 47.3381 28.8732 46.0012L45.9908 28.9764C47.3352 27.6395 47.3411 25.466 46.004 24.1218L28.9871 7.01202C27.6503 5.66784 25.4768 5.66192 24.1326 6.9988Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <mask
          id="mask0_114_1929"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="6"
          width="41"
          height="41"
        >
          <path
            d="M24.1297 6.99882L7.01201 24.0236C5.66784 25.3605 5.66192 27.5339 6.99882 28.8782L24.0158 45.9878C25.3527 47.3322 27.5261 47.3381 28.8703 46.0012L45.988 28.9764C47.3323 27.6395 47.338 25.466 46.0011 24.1218L28.9842 7.01202C27.6473 5.66783 25.4739 5.66192 24.1297 6.99882Z"
            fill={`${active ? "#FFFFFF" : colors.gray600}`}
            className={`transition-colors duration-300`}
          />
        </mask>
        <g mask="url(#mask0_114_1929)">
          <path
            d="M17.7891 34.4186V8.22424H22.3446V24.3964H30.5445V18.9298H34.6447V45.8075H30.5445V29.1798H22.3446V34.4186H17.7891Z"
            fill={`${active ? "#031A61" : colors.gray800}`}
            className={`transition-colors duration-300`}
          />
        </g>
      </svg>
    </LogoBackground>
  );
};
