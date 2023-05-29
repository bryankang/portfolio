import { colors } from "@/utils/colors";
import { FC } from "react";
import { DEFAULT_LOGO_SIZE, LogoBackground, LogoProps } from "./logo";

export const BaremetricsLogo: FC<LogoProps> = ({
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
      className={`${active ? "bg-[#5386FF]" : "bg-gray-800"} ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.1629 20.8545L44.3913 24.5945C44.7911 25.3606 45 26.2138 45 27.0801C45 27.9465 44.7911 28.7997 44.3913 29.5658L37.6329 41.2788C36.7557 42.9557 35.0637 44 33.2241 44H20.744C18.9044 44 17.2124 42.9557 16.334 41.2788L14.0012 37.2838L23.2088 28.6393L29.8796 32.5529C30.5768 33.0362 31.5116 32.9075 32.0637 32.2518L42.1629 20.8545ZM22.0772 21.8077L11.9852 33.2997L9.60915 29.618C9.20913 28.8533 9 28.0012 9 27.136C9 26.2708 9.20913 25.4187 9.60915 24.654L16.7372 12.7176C17.1591 11.9015 17.7928 11.2173 18.5703 10.7385C19.3477 10.2597 20.2395 10.0043 21.1496 10H33.1617C35.0037 10 36.6969 11.0431 37.5753 12.7176L39.9993 16.8486L30.974 25.3364L24.326 21.4301C23.9755 21.1874 23.5459 21.0911 23.1269 21.1613C22.7079 21.2314 22.3318 21.4626 22.0772 21.8065V21.8077Z"
          fill={`${active ? "#FFFFFF" : colors.gray600}`}
          className={`transition-colors duration-300`}
        />
      </svg>
    </LogoBackground>
  );
};
