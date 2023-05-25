import { FC } from "react";
import {
  AnrokLogo,
  BaremetricsLogo,
  BearsyncLogo,
  BenchLogo,
  CapchaseLogo,
  ChartMogulLogo,
  ChurnkeyLogo,
  DocuSignLogo,
  DropboxLogo,
  FounderpathLogo,
  GravityFormsLogo,
  HappyFoxLogo,
  HelpwiseLogo,
  MailchimpLogo,
  MercuryLogo,
  PostmarkLogo,
  PuzzleLogo,
  RampLogo,
  VarosLogo,
} from "../logos";

export const PuzzleStripeAppThumbnail: FC<{ active?: boolean }> = ({
  active,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center gap-5 overflow-hidden`}
    >
      <div className={`flex gap-5`}>
        <AnrokLogo size={64} active={active} />
        <BaremetricsLogo size={64} active={active} />
        <HappyFoxLogo size={64} active={active} />
        <BearsyncLogo size={64} active={active} />
        <BenchLogo size={64} active={active} />
        <CapchaseLogo size={64} active={active} />
      </div>
      <div className={`flex gap-5`}>
        <ChartMogulLogo size={64} active={active} />
        <ChurnkeyLogo size={64} active={active} />
        <RampLogo size={64} active={active} />
        <PuzzleLogo size={64} active={active} />
        <DocuSignLogo size={64} active={active} />
        <DropboxLogo size={64} active={active} />
        <VarosLogo size={64} active={active} />
      </div>
      <div className={`flex gap-5`}>
        <PostmarkLogo size={64} active={active} />
        <GravityFormsLogo size={64} active={active} />
        <MercuryLogo size={64} active={active} />
        <HelpwiseLogo size={64} active={active} />
        <MailchimpLogo size={64} active={active} />
        <FounderpathLogo size={64} active={active} />
      </div>
      <div
        style={{
          background:
            "radial-gradient(circle 160px, rgba(29,29,30,0), rgba(29,29,30,0.9))",
        }}
        className={`absolute inset-0`}
      />
    </div>
  );
};
