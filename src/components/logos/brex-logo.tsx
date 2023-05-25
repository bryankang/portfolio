import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const BrexLogo: FC<LogoProps> = ({
  active = true,
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
      className={`${active ? "bg-[#1E1E1E]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.7873 16.08C30.5365 17.77 30.2342 18.3331 29.0269 18.3331H11V40H18.073C19.6686 40 21.2208 39.22 22.2127 37.92C23.5069 36.1869 23.6789 35.6669 24.9297 35.6669H43V14H35.8836C34.288 14 32.7366 14.78 31.7873 16.08ZM37.3932 30.0769H29.846C28.207 30.0769 26.6982 30.77 25.7062 32.1131C24.412 33.8469 24.1532 34.3669 22.9458 34.3669H16.5634V23.9669H24.1106C25.7488 23.9669 27.2584 23.1869 28.2504 21.8869C29.5446 20.1969 29.8894 19.6769 31.0534 19.6769H37.3932V30.0769Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
