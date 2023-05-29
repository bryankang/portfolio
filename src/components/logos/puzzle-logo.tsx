import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const PuzzleLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#50FAAB] " : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4691 10L12 18.469H20.4691V26.9381L12 35.4072H20.4691V43.8761L28.9382 35.4072H20.4691V26.9381L28.9382 18.469H20.4691V10Z"
          fill={`${active ? "#FFFFFF" : colors.gray500}`}
          className={`transition-colors duration-300`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.9382 35.4072C30.6065 35.4072 32.2584 35.0786 33.7997 34.4402C35.3408 33.8017 36.7413 32.8659 37.9209 31.6863C39.1007 30.5067 40.0364 29.1063 40.6747 27.565C41.3132 26.0237 41.6418 24.3719 41.6418 22.7036C41.6418 21.0354 41.3132 19.3834 40.6747 17.8421C40.0364 16.3008 39.1007 14.9004 37.9209 13.7208C36.7413 12.5412 35.3408 11.6054 33.7997 10.967C32.2584 10.3286 30.6065 10 28.9382 10H20.4691V18.469H12V26.9381H20.4691V35.4072H12V43.8761H20.4691V35.4072H28.9382ZM28.9382 26.9381V18.469H20.4691V26.9381H28.9382Z"
          fill={`${active ? "#211F35" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
