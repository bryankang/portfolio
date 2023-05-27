import {
  Children,
  FC,
  HTMLProps,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
} from "react";

export interface ExpandableToolbarItemProps extends HTMLProps<HTMLDivElement> {
  isActive?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  toolbarEl?: HTMLDivElement;
  defaultToolbarWidth?: number;
  defaultTranslateX?: number;
  onClick?: (e: MouseEvent) => void;
  styles?: {
    container?: any;
  };
}

export const ExpandableToolbarItem: FC<ExpandableToolbarItemProps> = ({
  isActive = false,
  icon,
  toolbarEl,
  defaultToolbarWidth = 80,
  defaultTranslateX = 0,
  onClick = () => {},
  children,
  styles = { container: {} },
  ...rest
}) => {
  const toolbarItemRef = useRef<HTMLDivElement>(null);
  const childrenArray = Children.toArray(children);

  const horizontalPadding = 24 * 2;
  const itemWidth = 46;
  const width = childrenArray.reduce((acc, _, i) => {
    return (acc as number) + itemWidth;
  }, horizontalPadding + 46) as number;

  //   const newChildren = childrenArray.map((child, i) => {
  //     let translateX = itemWidth * i;
  //     if (i > 0) {
  //       translateX += 4 * i;
  //     }
  //     const newChild = cloneElement(child as ReactElement<any>, {
  //       ...(child as ReactElement<any>).props,
  //       defaultToolbarWidth: width,
  //       //   toolbarEl: toolbarRef.current,
  //       //   defaultTranslateX: translateX,
  //       //   siblings: childrenArray.filter((c) => c !== child),
  //       styles: {
  //         container: {
  //           opacity: isActive ? 1 : 0,
  //           //   marginRight: i < childrenArray.length - 1 ? 4 : 0,
  //           transform: `translateX(${translateX}px)`,
  //         },
  //       },
  //     });

  //     // if (activeChild && newChild !== activeChild) {
  //     //     newChild.props.styles
  //     // }

  //     return newChild;
  //   });

  useEffect(() => {
    if (toolbarEl) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (isActive) {
            if (toolbarItemRef.current) {
              toolbarItemRef.current.style.transform = `translateX(24px)`;
            }
            toolbarEl.style.width = `${width}px`;
          } else {
            if (toolbarItemRef.current) {
              toolbarItemRef.current.style.transform = `translateX(${defaultTranslateX}px)`;
            }
            toolbarEl.style.width = `${defaultToolbarWidth}px`;
          }
        }, 0);
      });
    }
  }, [isActive, toolbarEl]);

  //   useEffect(() => {
  //     if (toolbarItemRef.current) {
  //       console.log("yo");
  //       if (isActive) {
  //         toolbarItemRef.current.style.transform = `translateX(24px)`;
  //       } else {
  //         toolbarItemRef.current.style.transform = `translateX(${defaultTranslateX}px)`;
  //       }
  //     }
  //   }, []);

  return (
    <div
      onClick={onClick}
      ref={toolbarItemRef}
      style={{
        display: "flex",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 44,
        //   overflow: "hidden",
        transition: "all 200ms cubic-bezier(0.23, 1, 0.32, 1)",
        cursor: "pointer",
        //   transform: `translateX(${isActive ? 24 : defaultTranslateX}px)`,
        "&:hover .expandable-toolbar-item__icon": {
          stroke: "red",
        },
        "@media (hover: none)": {
          "&:hover .expandable-toolbar-item__icon": {
            stroke: "red",
          },
        },
        ...styles.container,
      }}
    >
      <span
        style={{
          transition: "stroke 200ms cubic-bezier(0.23, 1, 0.32, 1)",
          stroke: "red",
        }}
      >
        {icon}
      </span>
    </div>
  );
};
