"use client";

import { CheckCircledIcon } from "@radix-ui/react-icons";
import { FC, ReactNode, useRef } from "react";
import { useIntersection } from "react-use";
import { Thumbnail } from "./Thumbnail";
import { BrexLogo } from "./brex-logo";
import { MercuryLogo } from "./mercury-logo";
import { PlaidLogo } from "./plaid-logo";
import { PuzzleLogoFull } from "./puzzle-logo";
import { UncheckedCircledIcon } from "./unchecked-circle-icon";

export const OnboardingThumbnail: FC = () => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const intersecting = !!intersection && intersection.isIntersecting;

  return (
    <Thumbnail ref={intersectionRef} className="flex flex-grow gap-5">
      <div className="flex-shrink-0">
        <PuzzleLogoFull active={intersecting} />
        <div className="flex flex-col gap-2 sm:gap-2.5">
          <Step active={intersecting} completed>
            Welcome!
          </Step>
          <Step active={intersecting} completed>
            Company Setup
          </Step>
          <Step active={intersecting} current>
            Bank accounts
          </Step>
          <Step active={intersecting}>Credit cards</Step>
          <Step active={intersecting}>Payroll</Step>
          <Step active={intersecting}>Payment processor</Step>
          <Step active={intersecting} last>
            Review
          </Step>
        </div>
      </div>
      <div className="flex-grow">
        <div
          className={`mb-2 font-medium transition-colors duration-300 sm:text-lg ${
            intersecting ? "text-white" : "text-gray-400"
          }`}
        >
          Connect bank accounts
        </div>
        <p
          className={`mb-3 text-[10px] transition-colors duration-300 sm:mb-4 sm:text-[12px] ${
            intersecting ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Sync your bank to import transactions and automatically reconcile cash
          movement.
        </p>
        <div className="inline-flex gap-2 sm:gap-3">
          <MercuryLogo active={intersecting} className="sm:h-9 sm:w-9" />
          <BrexLogo active={intersecting} className="sm:h-9 sm:w-9" />
          <PlaidLogo active={intersecting} className="sm:h-9 sm:w-9" />
        </div>
      </div>
    </Thumbnail>
  );
};

const Step: FC<{
  children?: ReactNode;
  last?: boolean;
  completed?: boolean;
  current?: boolean;
  active?: boolean;
}> = ({ children, last, completed, current, active }) => {
  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 `}>
      <div className={`relative `}>
        {completed ? (
          <CheckCircledIcon
            width={10}
            height={10}
            className={`transition-colors duration-300 sm:h-4 sm:w-4 ${
              active ? "text-[#50FAAB]" : "text-gray-500"
            }`}
          />
        ) : (
          <UncheckedCircledIcon
            width={10}
            height={10}
            className={`transition-colors duration-300 sm:h-4 sm:w-4 ${
              active
                ? current
                  ? "text-[#50FAAB]"
                  : "text-gray-400"
                : "text-gray-500"
            }`}
          />
        )}
        {!last && (
          <div
            className={`absolute left-[4.5px] top-[9px] h-3 w-[1px] transition-colors duration-300 sm:left-[7.5px] sm:top-[15px] sm:h-3  ${
              active
                ? completed
                  ? "bg-[#50FAAB]"
                  : "bg-gray-500"
                : "bg-gray-600"
            }`}
          />
        )}
      </div>
      <span
        className={`text-[8px] font-medium transition-colors duration-300 sm:text-[10px] ${
          active
            ? current
              ? "text-white"
              : "text-gray-500"
            : current
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
};
