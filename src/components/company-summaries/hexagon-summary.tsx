import { FC } from "react";
import { HexagonLogo } from "../logos/hexagon-logo";
import { CompanySummary } from "./company-summary";

const Brand: FC = () => {
  return (
    <div
      className={`flex items-center gap-1.5 text-sm font-semibold text-gray-100`}
    >
      <HexagonLogo size={20} round active />
      Hexagon PPM
    </div>
  );
};

export const HexagonSummary: FC = () => {
  return (
    <CompanySummary brand={<Brand />}>
      Hexagon PPM builds a variety of software tools for the heavy industry
      (e.g., power plants, commercial construction). As part of the initiatve to
      consolidate the look and feel across all of our products, I was a frontend
      developer in the UX team. I built and maintained React/React Native
      component libraries while working with designers and PMs. I even
      contributed to various designs, such as gesture based tools in a 3D
      environment.
    </CompanySummary>
  );
};
