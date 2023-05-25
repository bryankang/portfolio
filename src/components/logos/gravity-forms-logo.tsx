import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const GravityFormsLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#EF5026]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0177 22.8593H43V17.0052H22.0673C20.6947 16.9604 19.3281 17.2058 18.0567 17.7252C16.7853 18.2446 15.6377 19.0264 14.6888 20.0196C10.1231 24.851 10 37 10 37H42.8372V26.0028H36.9356V31.13H16.2967C16.4257 29.2177 17.3111 25.8022 18.9865 24.0348C19.3779 23.6329 19.8511 23.3199 20.3742 23.117C20.8972 22.9142 21.4577 22.8263 22.0177 22.8593Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
