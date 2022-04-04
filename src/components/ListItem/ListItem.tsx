import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { ListItemProps } from '../../types'
import * as Styled from './ListItem.styles'

type Props = {
  leftIcon?: JSX.Element | React.ReactElement | React.ReactNode
  rightIcon?: JSX.Element | React.ReactElement | React.ReactNode
} & ListItemProps

export const ListItem: React.VFC<Props> = ({
  leftIcon = <ChatIcon />,
  rightIcon = <ChatIcon />,
  children,
  ...props
}) => {
  return (
    <Styled.Wrapper {...props}>
      {leftIcon && <div className="leftIconContainer">{leftIcon}</div>}
      <Styled.Item>{children}</Styled.Item>
      {rightIcon && <div className="rightIconContainer">{rightIcon}</div>}
    </Styled.Wrapper>
  )
}
