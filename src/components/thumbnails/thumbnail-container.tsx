import { ComponentPropsWithRef, forwardRef } from "react";

export interface ThumbnailContainerProps extends ComponentPropsWithRef<"div"> {
  noBackground?: boolean;
}

export const ThumbnailContainer = forwardRef<
  HTMLDivElement,
  ThumbnailContainerProps
>(({ children, noBackground = false, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        background: noBackground
          ? undefined
          : `linear-gradient(120deg, rgba(48,48,61,0.5), rgba(48,48,61,0))`,
      }}
      className={`relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl  p-5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
});
