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
      className={`relative mt-5 flex flex-col items-center gap-5 overflow-hidden transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-40"
      }`}
    >
      <div className={`flex gap-5`}>
        <AnrokLogo size={64} active={true} />
        <BaremetricsLogo size={64} active={true} />
        <HappyFoxLogo size={64} active={true} />
        <BearsyncLogo size={64} active={true} />
        <BenchLogo size={64} active={true} />
        <CapchaseLogo size={64} active={true} />
      </div>
      <div className={`flex gap-5`}>
        <ChartMogulLogo size={64} active={true} />
        <ChurnkeyLogo size={64} active={true} />
        <RampLogo size={64} active={true} />
        <PuzzleLogo size={64} active={true} />
        <DocuSignLogo size={64} active={true} />
        <DropboxLogo size={64} active={true} />
        <VarosLogo size={64} active={true} />
      </div>
      <div className={`flex gap-5`}>
        <PostmarkLogo size={64} active={true} />
        <GravityFormsLogo size={64} active={true} />
        <MercuryLogo size={64} active={true} />
        <HelpwiseLogo size={64} active={true} />
        <MailchimpLogo size={64} active={true} />
        <FounderpathLogo size={64} active={true} />
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
