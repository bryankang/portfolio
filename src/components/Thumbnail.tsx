import {
  DetailedHTMLProps,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  forwardRef,
} from "react";

export const Thumbnail: ForwardRefExoticComponent<
  RefAttributes<HTMLDivElement> &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-lg rounded-b-none border-[1px] border-b-0 border-white border-opacity-10 bg-gray-900 p-5 sm:p-6 ${className}`}
      {...rest}
    />
  );
});
