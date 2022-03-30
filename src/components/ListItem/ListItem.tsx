import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { ListItemProps } from '../../types'
import { Item, Wrapper } from './ListItem.styles'

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
    <Wrapper {...props}>
      {leftIcon && <div className="leftIconContainer">{leftIcon}</div>}
      <Item>{children}</Item>
      {rightIcon && <div className="rightIconContainer">{rightIcon}</div>}
    </Wrapper>
  )
}
