import { FC } from "react";
import { PuzzleLogo } from "../logos";
import { CompanySummary } from "./company-summary";

const Brand: FC = () => {
  return (
    <div
      className={`flex items-center gap-1.5 text-sm font-semibold text-gray-100`}
    >
      <PuzzleLogo size={16} round active />
      Puzzle
    </div>
  );
};

export const PuzzleSummary: FC = () => {
  return (
    <CompanySummary brand={<Brand />}>
      Puzzle’s mission is to revolutionize how companies do their bookkeeping.
      Existing accounting software, such as Quickbooks and Xero, are extremely
      convoluted and unintuitive to use. We want to optimize the user experience
      for founders and also to help them understand their company’s finances in
      real-time.
    </CompanySummary>
  );
};
