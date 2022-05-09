import React, {
  createContext,
  forwardRef,
  useMemo,
  useRef,
  useState
} from "react";
import styled from "@emotion/styled";
import { ArrowLeftLineIcon, ArrowRightLineIcon } from "../../icons";
import { Divider } from "../Divider/Divider";
import { TabBase } from "./Tab";

export interface TabBarProps {
  scrollable: boolean;
  navigation: boolean;
  children: React.ReactNode;
  value?: string;
  onChange?: (id: string) => void;
}

export interface TabBarState {
  value: string | undefined;
  setValue: (id: string) => void;
}

export const TabBarContext = createContext<TabBarState | undefined>(undefined);

const TabBarNavigation = styled.button<{ direction: "left" | "right"; disabled: boolean }>`
  width: 24px;
  height: 100%;
  background: ${({
                   direction,
                   theme
                 }) => `linear-gradient(to ${direction}, rgba(0, 0, 0, 0), ${theme.color.bgElevated})`};
  color: ${({ theme }) => theme.color.buttonNormal};
  border: none;
  top: 0;

  ${({ direction }) => direction === "left" ? "left: 0;" : "right: 0;"}
  ${({ disabled, theme }) => disabled ? "" : `&:active {
    background-color: ${theme.color.buttonNormalPressed};
  }`}
  svg {
    fill: ${({
               disabled,
               theme
             }) => disabled ? theme.color.buttonDisabled : theme.color.buttonNormal};
  }
`;

const TabList = styled.div<{ scrollable: boolean }>`
  background-color: ${({ theme }) => theme.color.bgElevated};
  padding: 0 24px;
  display: flex;
  overscroll-behavior-y: contain;
  overflow-x: ${({ scrollable }) => (scrollable ? "scroll" : "visible")};
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ${TabBase} {
    min-width: ${({ scrollable }) => (scrollable ? "88px" : "auto")};
  }
`;

const TabBarWrapper = styled.div<{ scrollable: boolean; navigation: boolean }>`
  position: relative;

  ${TabBarNavigation} {
    position: absolute;
    display: ${({
                  scrollable,
                  navigation
                }) => (scrollable && navigation ? "block" : "none")};
  }
`;

export interface TabBarProviderProps {
  children: React.ReactNode;
  onChange: (id: string) => void;
}

function TabBarProvider({ children, onChange }: TabBarProviderProps) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const changeValue = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  const state = useMemo(
    () => ({
      value,
      setValue: changeValue
    }),
    [value]
  );

  return <TabBarContext.Provider
    value={state}>{children}</TabBarContext.Provider>;
}

export const TabBar = forwardRef<HTMLDivElement, TabBarProps>((props, ref) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isOnStart, setIsOnStart] = useState(true);
  const [isOnEnd, setIsOnEnd] = useState(false);
  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (listRef?.current) {
      const cWidth = listRef.current.clientWidth;
      const sWidth = listRef.current.scrollWidth;
      listRef.current.scrollLeft += event.deltaY;
      if (isOnEnd !== listRef.current.scrollLeft >= sWidth - cWidth)
        setIsOnEnd(listRef.current.scrollLeft >= sWidth - cWidth);
      if (isOnStart !== listRef.current.scrollLeft <= 0)
        setIsOnStart(listRef.current.scrollLeft <= 0);
    }
  };

  const scrollPage = (isPositive: boolean) => {
    if (listRef?.current) {
      const pos = listRef.current.scrollLeft;
      const cWidth = listRef.current.clientWidth;
      const sWidth = listRef.current.scrollWidth;
      if (isPositive) {
        const newPos = pos + 88;
        if (isOnStart) setIsOnStart(false);
        console.log(newPos, sWidth);
        if (newPos >= sWidth - cWidth) {
          setIsOnEnd(true);
          listRef.current.scrollLeft = sWidth - cWidth;
          return;
        }
        listRef.current.scrollLeft = newPos;
      } else {
        const newPos = pos - 88;
        if (isOnEnd) setIsOnEnd(false);
        if (newPos <= 0) {
          setIsOnStart(true);
          listRef.current.scrollLeft = 0;
          return;
        }
        listRef.current.scrollLeft = newPos;
      }
    }
  };

  return (
    <TabBarProvider onChange={props.onChange ?? (() => {
    })}>
      <TabBarWrapper scrollable={props.scrollable} navigation={props.navigation}
                     ref={ref}>
        <TabBarNavigation disabled={isOnStart} direction="left"
                          onClick={() => scrollPage(false)}>
          <ArrowLeftLineIcon />
        </TabBarNavigation>
        <TabList ref={listRef} scrollable={props.scrollable} onWheel={onWheel}>
          {props.children}
        </TabList>
        <TabBarNavigation disabled={isOnEnd} direction="right"
                          onClick={() => scrollPage(true)}>
          <ArrowRightLineIcon />
        </TabBarNavigation>
      </TabBarWrapper>
      <Divider thickness="thin" direction="horizontal" style={{ margin: 0 }} />
    </TabBarProvider>
  );
});
