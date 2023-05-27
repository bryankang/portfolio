import { ChevronLeftIcon } from "@radix-ui/react-icons";
import {
  Children,
  FC,
  HTMLProps,
  MouseEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
} from "react";
import { ExpandableToolbarItem } from "./expandable-toolbar-item";

export interface ExpandableSubToolbarProps extends HTMLProps<HTMLDivElement> {
  isActive?: boolean;
  children?: ReactNode;
  // iconName?: string;
  icon?: ReactNode;
  toolbarEl?: HTMLDivElement;
  defaultToolbarWidth?: number;
  defaultTranslateX?: number;
  item?: ReactNode;
  shake?: boolean;
  onClick?: (e: MouseEvent) => void;
  styles?: { container: any };
}

export const ExpandableSubToolbar: FC<ExpandableSubToolbarProps> = ({
  isActive = false,
  // iconName = "Activity",
  icon,
  toolbarEl,
  defaultToolbarWidth = 80,
  defaultTranslateX = 0,
  item = <ExpandableToolbarItem />,
  shake = false,
  onClick = () => {},
  children,
  styles = { container: {} },
}) => {
  const toolbarItemRef = useRef<HTMLDivElement>(null);
  const childrenArray = Children.toArray(children);

  const horizontalPadding = 24 * 2;
  const itemWidth = 46;
  const width = childrenArray.reduce((acc, _, i) => {
    return (acc as number) + itemWidth;
  }, horizontalPadding + 46) as number;

  const newChildren = childrenArray.map((child, i) => {
    let translateX = itemWidth * i;
    if (i > 0) {
      //   translateX += 4 * i;
    }
    const newChild = cloneElement(child as ReactElement<any>, {
      ...(child as ReactElement<any>).props,
      defaultToolbarWidth: width,
      //   toolbarEl: toolbarRef.current,
      //   defaultTranslateX: translateX,
      //   siblings: childrenArray.filter((c) => c !== child),
      styles: {
        container: {
          opacity: isActive ? 1 : 0,
          //   marginRight: i < childrenArray.length - 1 ? 4 : 0,
          transform: `translateX(${translateX}px)`,
        },
      },
    });

    // if (activeChild && newChild !== activeChild) {
    //     newChild.props.styles
    // }

    return newChild;
  });

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

  return (
    <div
      ref={toolbarItemRef}
      style={{
        display: "flex",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 44,
        transition:
          "transform 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "transform, opacity",
        ...styles.container,
      }}
    >
      <div
        onClick={onClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          // "&:hover": {
          //   cursor: "pointer",
          // },
          // "&:hover .expandable-sub-toolbar__icon": {
          //   stroke: expandableToolbarTheme.icon.strokeHovered,
          // },
          // "@media (hover: none)": {
          //   "&:hover .expandable-sub-toolbar__icon": {
          //     stroke: expandableToolbarTheme.icon.strokeDefault,
          //   },
          // },
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: -13,
            transition: "opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            willChange: "opacity",
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? "auto" : "none",
          }}
        >
          <ChevronLeftIcon
            className={isActive ? "expandable-sub-toolbar__icon" : ""}
            style={{
              transition: "stroke 200ms cubic-bezier(0.23, 1, 0.32, 1)",
              stroke: "red",
            }}
          />
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 46,
            height: 44,
            pointerEvents: isActive ? "auto" : "none",
          }}
        >
          <ClickMe
            isActive={shake}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
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
            {/* <IconTag
              className="expandable-sub-toolbar__icon"
              css={{

              }}
            /> */}
          </ClickMe>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: 44 + 4,
          transition:
            "transform 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)",
          willChange: "transform, opacity",
          transform: `scale(${isActive ? 1 : 0.86})`,
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        {newChildren}
      </div>
    </div>
  );
};

// const shake = keyframes`
// 0%{
//     transform:rotate(0deg)
// }
// 4%{
//     transform:rotate(10deg) translateY(-2px)
// }
// 8%{
//     transform:rotate(-10deg)
// }
// 12%{
//     transform:rotate(10deg)
// }
// 16%{
//     transform:rotate(-10deg)
// }
// 20%,to{
//     transform:rotate(0deg)
// }
// `;

const shake = "";

export interface ClickMeProps extends HTMLProps<HTMLInputElement> {
  children?: ReactNode;
  isActive?: boolean;
}

export const ClickMe: FC<ClickMeProps> = ({
  children,
  isActive = false,
  ...rest
}) => {
  const animation = isActive
    ? {
        display: "inline-block",
        animation: `${isActive ? shake : undefined}`,
        animationDelay: "1s",
        animationDuration: "1.8s",
        animationIterationCount: "infinite",
        animationName: shake,
        animationTimingFunction: "ease-out",
        transformOrigin: "center bottom",
      }
    : {};
  return (
    <div style={{ ...animation }} {...rest}>
      {children}
    </div>
  );
};
