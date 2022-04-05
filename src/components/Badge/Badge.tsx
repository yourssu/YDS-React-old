import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { BadgeProps } from '../../types'
import * as Styled from './Badge.styles'

interface Props extends BadgeProps {
  leftIcon?: React.ReactNode
  title: string
}

export const Badge: React.VFC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <Styled.Wrapper {...props}>
      <>{props.icon && leftIcon && leftIcon}</>
      <div className="padding--4" style={{ paddingLeft: '4px' }} />
      <>{title}</>
      {(!leftIcon || !props.icon) && <div className="padding--4" style={{ paddingRight: '4px' }} />}
    </Styled.Wrapper>
  )
}
