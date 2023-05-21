import { FC } from "react";

export const BrexLogo: FC<{
  size?: number;
  active?: boolean;
  className?: string;
}> = ({ size = 28, active, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="14" cy="14" r="14" fill="#4A4A4E" />
      <path
        d="M16.244 8.96C15.6577 9.74 15.5161 9.99988 14.9501 9.99988H6.5V20H9.81546C10.5634 20 11.291 19.64 11.756 19.04C12.3626 18.2401 12.4433 18.0001 13.0296 18.0001H21.5V8H18.1642C17.4163 8 16.689 8.36 16.244 8.96ZM18.8718 15.4201H15.3341C14.5658 15.4201 13.8585 15.74 13.3935 16.3599C12.7869 17.1601 12.6656 17.4001 12.0996 17.4001H9.10783V12.6001H12.6456C13.4135 12.6001 14.1211 12.2401 14.5861 11.6401C15.1928 10.8601 15.3544 10.6201 15.9 10.6201H18.8718V15.4201Z"
        fill={active ? "#DDDDE8" : "#B6B6CC"}
        className="transition-colors duration-300"
      />
    </svg>
  );
};
