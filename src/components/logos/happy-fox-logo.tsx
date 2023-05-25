import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const HappyFoxLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#FFFFFF]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0401 44.0244L11 32.0138V26.0135L20.2346 28.1117L27.0474 37.6655L33.8485 28.1117L43.0831 26.0135H43.086V32.0138L27.0401 44.0244Z"
          fill={`${active ? "#FFC300" : colors.gray400}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M11 12.0452V26.0135H11.0044L27.043 16.9224C27.043 16.9224 15.0236 9.87385 13.9957 9.45803C12.063 8.66737 11 8.55024 11 12.0452Z"
          fill={`${active ? "#FF8D00" : colors.gray500}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M40.0898 9.45807C39.062 9.87389 27.0777 16.9005 27.0777 16.9005L11.001 26.0135L20.237 28.1117L27.0396 37.6655L33.8553 28.1117L43.0855 26.0135V12.0453C43.0855 8.55028 42.0225 8.66595 40.0898 9.45807Z"
          fill={`${active ? "#FF4F00" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
