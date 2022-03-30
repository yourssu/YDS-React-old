import React from 'react'
import { ListToogleItemProps } from '../../types'
import { Toggle } from '../Toggle/Toggle'
import { Item, Wrapper } from './ListToggleItem.styles'

type Props = ListToogleItemProps

export const ListToggleItem: React.VFC<Props> = ({ isSelected, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Item>{children}</Item>
      <Toggle isSelected={isSelected || false} />
    </Wrapper>
  )
}
