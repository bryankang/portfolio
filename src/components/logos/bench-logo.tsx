import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const BenchLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#0A2855]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.3871 43.9997C18.2271 43.9997 10.7744 36.5469 10.7744 27.3871V10.7744H43.9997V27.3871C43.9997 36.5469 36.5466 43.9997 27.3871 43.9997ZM13.7948 13.7948V27.3871C13.7948 34.8814 19.8908 40.9791 27.3871 40.9791C34.8814 40.9791 40.9791 34.8814 40.9791 27.3871V13.7948H13.7948Z"
          fill={`${active ? "#D2A764" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M34.9386 20.8427H19.8359V23.8631H21.9008L20.8546 32.2323H23.8987L24.9449 23.8631H29.8292L30.8758 32.2323H33.9197L32.8736 23.8631H34.9386V20.8427Z"
          fill={`${active ? "#D2A764" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
