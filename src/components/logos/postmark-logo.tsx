import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const PostmarkLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#FFDE00]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 36.1999H18.4772C19.2358 36.1999 19.7148 35.7199 19.7148 34.96V18C19.7148 17.24 19.2358 16.76 18.4772 16.76H17V13H27.6997C33.4487 13 38 15.92 38 21.4801C38 27.0799 33.4487 30 27.6997 30H24.0267V34.96C24.0267 35.7199 24.5057 36.1999 25.3042 36.1999H28.2984V40H17V36.1999ZM27.3802 26.0799C31.1731 26.0799 33.3688 24.4799 33.3688 21.56C33.3688 18.56 31.1731 17.04 27.3802 17.04H24.0267V26.12H27.3802V26.0799Z"
          fill={`${active ? "#000000" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
