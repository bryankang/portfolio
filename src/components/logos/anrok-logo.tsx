import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const AnrokLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#222F57]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5023 18.899L21.812 10.748H30.7593L45 35.0603L40.4092 43.0708H31.6962L25.771 32.9803C25.9237 33.618 26.0046 34.2835 26.0046 34.968C26.0046 39.6637 22.198 43.4703 17.5023 43.4703C12.8066 43.4703 9 39.6637 9 34.968C9 30.2723 12.8066 26.4657 17.5023 26.4657C19.7282 26.4657 21.7543 27.3211 23.2699 28.7211L17.5023 18.899Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
