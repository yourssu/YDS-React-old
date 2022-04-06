import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'

export interface TabProps {
  value: string
  selected: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const TabItem = styled.button<TabProps>`
  height: 48px;
  background-color: ${({ theme }) => theme.color.bgElevated};
  ${getTypoStyle(Typography.Button2)};
  color: ${({ selected, theme }) => (selected ? theme.color.bottomBarSelected : theme.color.bottomBarNormal)};
  border: none;

  &:active {
    background-color: ${({ theme }) => theme.color.buttonNormalPressed};
  }
`

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => (
  <TabItem ref={ref} value={props.value} selected={props.selected} onClick={props.onClick}>
    {props.children}
  </TabItem>
))
