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
      <div className="container">
        <div className="leftIconContainer">{leftIcon}</div>
        <Item>{children}</Item>
        <div className="rightIconContainer">{rightIcon}</div>
      </div>
    </Wrapper>
  )
}
