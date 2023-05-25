import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const SlackLogo: FC<LogoProps> = ({
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
      className={`${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7231 31.2213C17.7231 33.0714 16.2117 34.5828 14.3615 34.5828C12.5114 34.5828 11 33.0714 11 31.2213C11 29.3711 12.5114 27.8597 14.3615 27.8597H17.7231V31.2213Z"
          fill={`${active ? "#E01E5A" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M19.417 31.2213C19.417 29.3711 20.9284 27.8597 22.7785 27.8597C24.6287 27.8597 26.14 29.3711 26.14 31.2213V39.6381C26.14 41.4883 24.6287 42.9996 22.7785 42.9996C20.9284 42.9996 19.417 41.4883 19.417 39.6381V31.2213Z"
          fill={`${active ? "#E01E5A" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M22.7785 17.7231C20.9284 17.7231 19.417 16.2117 19.417 14.3615C19.417 12.5114 20.9284 11 22.7785 11C24.6287 11 26.14 12.5114 26.14 14.3615V17.7231H22.7785Z"
          fill={`${active ? "#36C5F0" : colors.gray500}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M22.7784 19.4169C24.6285 19.4169 26.1399 20.9283 26.1399 22.7784C26.1399 24.6285 24.6285 26.1399 22.7784 26.1399H14.3615C12.5114 26.1399 11 24.6285 11 22.7784C11 20.9283 12.5114 19.4169 14.3615 19.4169H22.7784Z"
          fill={`${active ? "#36C5F0" : colors.gray500}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M36.2764 22.7784C36.2764 20.9283 37.7877 19.4169 39.6379 19.4169C41.488 19.4169 42.9994 20.9283 42.9994 22.7784C42.9994 24.6285 41.488 26.1399 39.6379 26.1399H36.2764V22.7784Z"
          fill={`${active ? "#2EB67D" : colors.gray400}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M34.5824 22.7784C34.5824 24.6285 33.071 26.1399 31.2209 26.1399C29.3708 26.1399 27.8594 24.6285 27.8594 22.7784V14.3615C27.8594 12.5114 29.3708 11 31.2209 11C33.071 11 34.5824 12.5114 34.5824 14.3615V22.7784Z"
          fill={`${active ? "#2EB67D" : colors.gray400}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M31.2209 36.2766C33.071 36.2766 34.5824 37.788 34.5824 39.6381C34.5824 41.4883 33.071 42.9997 31.2209 42.9997C29.3708 42.9997 27.8594 41.4883 27.8594 39.6381V36.2766H31.2209Z"
          fill={`${active ? "#ECB22E" : colors.gray300}`}
          className={`transition-colors duration-300`}
        />
        <path
          d="M31.2209 34.5828C29.3708 34.5828 27.8594 33.0714 27.8594 31.2213C27.8594 29.3711 29.3708 27.8597 31.2209 27.8597H39.6377C41.4879 27.8597 42.9993 29.3711 42.9993 31.2213C42.9993 33.0714 41.4879 34.5828 39.6377 34.5828H31.2209Z"
          fill={`${active ? "#ECB22E" : colors.gray300}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
