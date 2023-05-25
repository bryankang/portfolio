import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const CapchaseLogo: FC<LogoProps> = ({
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
          d="M13.7842 17.2458C13.7842 18.4199 14.4106 19.5048 15.4274 20.0919L27.3922 26.9998V19.1432L41.0001 26.9998V21.0406C41.0001 19.8665 40.3737 18.7816 39.3569 18.1945L27.3922 11.2866V19.1432L13.7842 11.2866V17.2458Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M41.0001 26.9999L27.3922 34.8566V26.9999L15.4274 33.9079C14.4106 34.495 13.7842 35.5799 13.7842 36.7541V42.7132L27.3922 34.8566V42.7132L39.3569 35.8054C40.3737 35.2182 41.0001 34.1334 41.0001 32.9592V26.9999Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
