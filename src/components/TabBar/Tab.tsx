import React, {
 forwardRef, useContext, useEffect, useState 
} from 'react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { TabBarContext } from './TabBar'

export interface TabProps {
  value: string
  selected: boolean
}

export const TabBase = styled.button<TabProps>`
  height: 48px;
  background-color: ${({ theme }) => theme.color.bgElevated};
  ${getTypoStyle(Typography.Button2)};
  color: ${({ selected, theme }) => (selected ? theme.color.bottomBarSelected : theme.color.bottomBarNormal)};
  border: none;

  &:active {
    background-color: ${({ theme }) => theme.color.buttonNormalPressed};
  }
`

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const { id, setId } = useContext(TabBarContext) ?? {
    id: undefined,
    setId: () => {},
  }
  if (props.selected && id === undefined) setId(props.value)
  const [selected, setSelected] = useState(props.selected)
  const updateId = () => {
    setId(props.value)
    setSelected(true)
  }

  useEffect(() => {
    setSelected(id === props.value)
  }, [id, props.value])

  return (
    <TabBase ref={ref} value={props.value} selected={selected} onClick={updateId}>
      {props.children}
    </TabBase>
  )
})
