import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const DropboxLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#0061FE]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.425 13L10 18.2922L18.425 23.5844L26.8515 18.2922L35.2765 23.5844L43.7015 18.2922L35.2765 13L26.8515 18.2922L18.425 13Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M18.425 34.1689L10 28.8767L18.425 23.5844L26.8515 28.8767L18.425 34.1689Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M26.8506 28.8767L35.2756 23.5844L43.7006 28.8767L35.2756 34.1689L26.8506 28.8767Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M26.8513 41.225L18.4248 35.9328L26.8513 30.6406L35.2763 35.9328L26.8513 41.225Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
