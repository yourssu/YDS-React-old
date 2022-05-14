import React, { forwardRef, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getTypoStyle, Typography } from "../../styles/foundation/typo/typo";
import { TabBarContext } from "./TabBar";

export type TabProps = {
  value: string
  selected?: boolean
} & React.HTMLProps<HTMLButtonElement>

export const TabBase = styled.button<TabProps>`
  height: 48px;
  background-color: ${({ theme }) => theme.color.bgElevated};
  ${getTypoStyle(Typography.Button2)};
  color: ${({
              selected,
              theme
            }) => (selected ? theme.color.bottomBarSelected : theme.color.bottomBarNormal)};
  border-width: ${({ selected }) => (selected ? "0 0 2px" : "0")};
  padding: ${({ selected }) => (selected ? "2px 2px 0" : "2px")};
  border-bottom-color: ${({ theme }) => theme.color.bottomBarSelected};
  box-sizing: border-box;

  &:active {
    background-color: ${({ theme }) => theme.color.buttonNormalPressed};
  }
`;

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const { value, setValue } = useContext(TabBarContext) ?? {
    value: undefined,
    setValue: () => {
    }
  };
  if (props.selected && value === undefined) setValue(props.value);
  const [selected, setSelected] = useState(props.selected);
  const updateValue = () => {
    setValue(props.value);
    setSelected(true);
  };

  useEffect(() => {
    setSelected(value === props.value);
  }, [value, props.value]);

  return (
    <TabBase ref={ref} value={props.value} selected={selected}
             onClick={updateValue}>
      {props.children}
    </TabBase>
  );
});
