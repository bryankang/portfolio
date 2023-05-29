import { FC, ReactNode } from "react";

export const CompanySummary: FC<{
  children?: ReactNode;
  brand?: ReactNode;
}> = ({ children, brand }) => {
  return (
    <aside className={`my-10 border-y border-white border-opacity-[15%] p-5`}>
      {/* <header className={`mb-4 text-sm font-medium text-gray-200`}>
        About the company
      </header> */}
      <div className={`mb-2`}>{brand}</div>
      <p className={`my-0 text-[13px] leading-[1.32rem] text-gray-500`}>
        {children}
      </p>
    </aside>
  );
};
