import { FC } from "react";
import { WishLogo } from "../logos/wish-logo";
import { CompanySummary } from "./company-summary";

const Brand: FC = () => {
  return (
    <div
      className={`flex items-center gap-1.5 text-sm font-semibold text-gray-100`}
    >
      <WishLogo size={16} active wholesale={false} />
    </div>
  );
};

export const WishSummary: FC = () => {
  return (
    <CompanySummary brand={<Brand />}>
      Wish provides a market for a huge variety of affordable products. We want
      to make the shopping experience fun - similar to the days when going to
      the mall or physical stores was much more common. I worked in the
      incubator team (similar to a start-up within a big company) where I was
      the lead frontend developer and designer for our B2B initiative.
    </CompanySummary>
  );
};
