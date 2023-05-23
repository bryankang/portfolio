import { FC } from "react";

export const PuzzleLogo: FC<{
  size?: number;
  active?: boolean;
  className?: string;
}> = ({ size = 24, active, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.1827 23.5464C18.6161 23.5464 23.8313 18.3769 23.8313 12C23.8313 5.62311 18.6161 0.453613 12.1827 0.453613C5.74942 0.453613 0.53418 5.62311 0.53418 12C0.53418 18.3769 5.74942 23.5464 12.1827 23.5464Z"
        fill={active ? "#50FAAB" : "#707087"}
        className="transition-colors duration-100"
      />
      <path
        d="M10.435 5.07217L6.94043 8.53607H10.435V12L6.94043 15.4639H10.435V18.9278L13.9296 15.4639H10.435V12L13.9296 8.53607H10.435V5.07217Z"
        fill={active ? "#FFFFFF" : "#B2B2B6"}
        className="transition-colors duration-100"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9296 15.4639C14.618 15.4639 15.2996 15.3295 15.9356 15.0684C16.5715 14.8073 17.1494 14.4245 17.6361 13.9421C18.1229 13.4596 18.509 12.8868 18.7724 12.2564C19.0359 11.626 19.1715 10.9504 19.1715 10.2681C19.1715 9.58573 19.0359 8.91007 18.7724 8.27967C18.509 7.64927 18.1229 7.07647 17.6361 6.594C17.1494 6.11152 16.5715 5.72879 15.9356 5.46767C15.2996 5.20656 14.618 5.07217 13.9296 5.07217H10.435V8.53607H6.94043V12H10.435V15.4639H6.94043V18.9278H10.435V15.4639H13.9296ZM13.9296 12V8.53607H10.435V12H13.9296Z"
        fill={active ? "#211F35" : "#2C2A42"}
        className="transition-colors duration-100"
      />
    </svg>
  );
};

export const PuzzleLogoFull: FC<{ active?: boolean }> = ({ active }) => {
  return (
    <div className="mb-4 flex items-center gap-1 sm:gap-1.5">
      <PuzzleLogo size={16} active={active} className="sm:h-6 sm:w-6" />
      <span
        className={`text-xs font-semibold transition-colors duration-100 sm:text-lg ${
          active ? "text-white" : "text-gray-500"
        }`}
      >
        Puzzle
      </span>
    </div>
  );
};
