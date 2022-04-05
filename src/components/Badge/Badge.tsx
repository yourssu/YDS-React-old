import React from 'react'
import { BadgeProps } from '../../types'
import * as Styled from './Badge.styles'

interface Props extends BadgeProps {
  leftIcon?: React.ReactNode
  title: string
}

export const Badge: React.VFC<Props> = ({ leftIcon, title, ...props }) => {
  return (
    <Styled.Wrapper {...props}>
      <>{props.icon && leftIcon && leftIcon}</>
      <Styled.Padding padding="0 0 0 4px" />
      <>{title}</>
      {(!leftIcon || !props.icon) && <Styled.Padding padding="0 4px 0 0" />}
    </Styled.Wrapper>
  )
}
