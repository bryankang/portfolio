import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const FounderpathLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#443DD8]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.252 31.6909C25.252 35.2777 28.1555 38.1854 31.7372 38.1854C35.3188 38.1854 38.2221 35.2777 38.2221 31.6909C38.2221 28.1042 35.3188 25.1967 31.7372 25.1967C28.1555 25.1967 25.252 28.1042 25.252 31.6909Z"
          fill={`${active ? "#B4B1EF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M12.6104 12.5985V41.0288H22.0737V22.0753H40.9998V12.5985H12.6104Z"
          fill={`${active ? "#FFFFFF" : colors.gray500}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
