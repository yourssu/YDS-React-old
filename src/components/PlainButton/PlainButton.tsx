import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { PlainButtonProps } from '../../types'
import { Button } from './PlainButton.styles'

interface Props extends PlainButtonProps {
  /** Button Icon */
  leftIcon?: React.ReactNode

  /** Button title */
  title: string
}

export const PlainButton: React.VFC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <Button disabled={props.disabled} {...props}>
      <>{leftIcon}</>
      <div className="padding--2" style={{ paddingLeft: '2px' }} />
      <>{title}</>
    </Button>
  )
}
