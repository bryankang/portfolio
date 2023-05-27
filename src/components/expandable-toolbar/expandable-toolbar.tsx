import { colors } from "@/utils/colors";
import {
  Children,
  FC,
  HTMLProps,
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ExpandableToolbarProps extends HTMLProps<HTMLInputElement> {
  children?: ReactNode;
}

export const ExpandableToolbar: FC<ExpandableToolbarProps> = ({ children }) => {
  const [a, render] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const childrenArray = Children.toArray(children) as ReactElement<any>[];

  const horizontalPadding = 24 * 2;
  const itemWidth = 46;
  const width = childrenArray.reduce((acc, _, i) => {
    if (i === 0) {
      return (acc as number) + itemWidth;
    }
    return (acc as number) + itemWidth;
  }, horizontalPadding) as number;

  const activeChild = childrenArray.find((child) => child.props.isActive);

  //   const width = itemWidth * childrenArray.length + horizontalPadding;

  const newChildren = childrenArray.map((child, i) => {
    let translateX = itemWidth * i + 24;
    if (i > 0) {
      //   translateX += 4 * i;
    }
    const newChild = cloneElement(child as ReactElement<any>, {
      ...(child as ReactElement<any>).props,
      defaultToolbarWidth: width,
      toolbarEl: toolbarRef.current,
      defaultTranslateX: translateX,
      siblings: childrenArray.filter((c) => c !== child),
      styles: {
        container: {
          opacity: activeChild && child !== activeChild ? 0 : 1,
          pointerEvents: activeChild && child !== activeChild ? "none" : "auto",
          //   marginRight: i < childrenArray.length - 1 ? 4 : 0,
          //   transform: `translateX(${translateX}px)`,
        },
      },
    });

    // if (activeChild && newChild !== activeChild) {
    //     newChild.props.styles
    // }

    return newChild;
  });

  //   const newChildren = Children.map(children, (child, i) => {
  //     const newChild = cloneElement(child as ReactElement<any>, {
  //       ...(child as ReactElement<any>).props,
  //       toolbarWidth: width,
  //       toolbarEl: toolbarRef.current,
  //       styles: {
  //         container: {
  //           marginRight: i < childrenArray.length - 1 ? 4 : 0,
  //         },
  //       },
  //     });

  //     return newChild;
  //   });

  useEffect(() => {
    render((a) => !a);
  }, []);

  return (
    <div
      ref={toolbarRef}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        //   justifyContent: "center",
        boxSizing: "border-box",
        width,
        height: 64,
        //   paddingRight: 24,
        //   paddingLeft: 24,
        borderRadius: 64,
        transition: "all 200ms cubic-bezier(0.23, 1, 0.32, 1)",
        overflow: "hidden",
        backgroundColor: colors.gray800,
        // boxShadow: expandableToolbarTheme.container.boxShadow,
      }}
    >
      {newChildren}
    </div>
  );
};
