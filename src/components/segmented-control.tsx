import { FC, Fragment, ReactNode } from "react";

export const SegmentedControl: FC<{
  items: { value: string; content: ReactNode }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}> = ({ items, value, onChange, className }) => {
  return (
    <div
      className={`flex h-7 items-center gap-0.5 rounded-lg border-[1px] border-white border-opacity-5 bg-gray-900 p-0.5 ${className}`}
    >
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <div className="h-5 w-[1px] flex-none bg-gray-800" />}
            <button
              onClick={() => onChange(item.value)}
              className={`h-full flex-grow basis-0 select-none rounded text-[11px] focus-visible:outline-none ${
                item.value === value
                  ? "text-gray-50"
                  : "text-gray-500 transition-colors duration-75 hover:text-gray-400"
              }  ${item.value === value ? "bg-gray-800" : ""}`}
              aria-selected={item.value === value}
            >
              {item.content}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};
