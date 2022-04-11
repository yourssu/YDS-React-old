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

export const PlainButton: React.VFC<Props> = ({ leftIcon, title, ...props }) => {
  return (
    <Styled.Button disabled={props.disabled} {...props}>
      <span className="icon-wrapper">{leftIcon}</span>
      <div className="padding--2" style={{ paddingLeft: '2px' }} />
      <>{title}</>
    </Styled.Button>
  )
}
