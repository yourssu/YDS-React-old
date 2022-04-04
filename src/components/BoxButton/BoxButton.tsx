import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { BoxButtonProps } from '../../types'
import * as Styled from './BoxButton.styles'

export interface Props extends BoxButtonProps {
  /** Button Icon */
  leftIcon?: React.ReactNode

  /** Button title */
  title: string
}

export const BoxButton: React.FC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <Styled.Button disabled={props.isDisabled} {...props}>
      <>{leftIcon}</>
      <div className="padding--4" style={{ paddingLeft: '4px' }} />
      <>{title}</>
    </Styled.Button>
  )
}
