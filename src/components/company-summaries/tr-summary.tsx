import { FC } from "react";
import { TrLogo } from "../logos";
import { CompanySummary } from "./company-summary";

const Brand: FC = () => {
  return (
    <div
      className={`flex items-center gap-1.5 text-sm font-semibold text-gray-100`}
    >
      <TrLogo size={20} active className={`!rounded-[2px]`} />
      TrainerRoad
    </div>
  );
};

export const TrSummary: FC = () => {
  return (
    <CompanySummary brand={<Brand />}>
      TrainerRoad provides training plans and workouts for cyclists. Think
      Peloton but targeted primarily to semi to professional athletes. Instead
      of a all-in-one bicycle, customers typically use a smart trainer which
      they can attach to their existing bicycles. The TrainerRoad apps
      communicate with the start trainer in order to provide a workout
      experience. I worked as a frontend developer and built features on the
      desktop app (Electron) and mobile app (React Native).
    </CompanySummary>
  );
};
