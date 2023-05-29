import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const HexagonLogo: FC<LogoProps> = ({
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
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 37.8997H20.6665L17.5117 32.4204L8 37.8997Z"
          fill="#81C5D8"
        />
        <path
          d="M33.3323 37.8998L45.9988 15.9587L26.999 26.9411V37.8998H33.3323Z"
          fill="#81C5D8"
        />
        <path
          d="M26.999 48.882L45.9988 37.8997H33.3323L26.999 48.882Z"
          fill="#C2DA6E"
        />
        <path
          d="M17.5105 32.4204L26.9985 26.941V5L14.332 26.941L17.5105 32.4204Z"
          fill="#C2DA6E"
        />
        <path
          d="M20.667 37.8997L27.0002 48.882V37.8997H20.667Z"
          fill="#C2DA6E"
        />
        <path
          d="M8 15.9587V37.8998L14.3333 26.9411L8 15.9587Z"
          fill="#81C5D8"
        />
        <path
          d="M46.0005 15.9587L33.334 37.8998H46.0005V15.9587Z"
          fill="#0093BB"
        />
        <path
          d="M26.999 26.941L17.4873 32.4204L20.6658 37.8997H26.999V26.941Z"
          fill="#0093BB"
        />
        <path
          d="M26.9998 5L8 15.9587L14.3333 26.941L26.9998 5Z"
          fill="#0093BB"
        />
      </svg>
    </LogoBackground>
  );
};
