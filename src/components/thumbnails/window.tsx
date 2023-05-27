import { ComponentPropsWithRef, forwardRef } from "react";

export interface WindowProps extends ComponentPropsWithRef<"div"> {}

export const Window = forwardRef<HTMLDivElement, WindowProps>(
  ({ children, className, style = {}, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          background: `linear-gradient(to bottom, rgba(48,48,61,1), rgba(48,48,61,0.8))`,
          ...style,
        }}
        className={`overflow-hidden rounded-lg border border-gray-800 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
