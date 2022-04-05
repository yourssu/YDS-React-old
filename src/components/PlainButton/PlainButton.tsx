import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { PlainButtonProps } from '../../types'
import * as Styled from './PlainButton.styles'

interface Props extends PlainButtonProps {
  /** Button Icon */
  leftIcon?: React.ReactNode

  /** Button title */
  title: string
}

export const PlainButton: React.VFC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <Styled.Button disabled={props.disabled} {...props}>
      <>{leftIcon}</>
      <div className="padding--2" style={{ paddingLeft: '2px' }} />
      <>{title}</>
    </Styled.Button>
  )
}
