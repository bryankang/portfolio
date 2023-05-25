import { ComponentPropsWithRef, forwardRef } from "react";

export const DEFAULT_LOGO_SIZE = 54;

export interface LogoProps extends ComponentPropsWithRef<"div"> {
  active?: boolean;
  round?: boolean;
  size?: number;
}

export interface LogoBackgroundProps extends ComponentPropsWithRef<"div"> {
  round?: boolean;
}

export const LogoBackground = forwardRef<HTMLDivElement, LogoBackgroundProps>(
  ({ children, round, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={`inline-block ${
        round ? "rounded-full" : "rounded-lg"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
);
