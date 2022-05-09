import React from 'react'
import { ListToogleItemProps } from '../../types'
import { Toggle } from '../Toggle/Toggle'
import * as Styled from './ListToggleItem.styles'

type Props = ListToogleItemProps

export const ListToggleItem: React.FC<Props> = ({ onClickToggle, disabled, isSelected, children, ...props }) => {
  return (
    <Styled.Wrapper {...props}>
      <Styled.Item>{children}</Styled.Item>
      <Toggle onClick={onClickToggle} disabled={disabled} isSelected={isSelected ?? false} />
    </Styled.Wrapper>
  )
}
