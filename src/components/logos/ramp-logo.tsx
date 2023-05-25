import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const RampLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#F3FF6D]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 41.8585V41.991L26.0268 41.9977V41.8585C28.6187 40.2908 30.4076 38.6938 32.0173 37.025H39.3974L44 41.8585ZM39.5467 16.7865L34.991 12H34.8586C34.8586 12 34.9355 20.9203 27.2865 29.0332C19.8019 36.9734 11 36.9913 11 36.9913V37.1304L15.6411 42C15.6411 42 24.3148 42.0918 31.9767 34.0418C39.6107 26.0187 39.5467 16.7865 39.5467 16.7865Z"
          fill={`${active ? "#000000" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
