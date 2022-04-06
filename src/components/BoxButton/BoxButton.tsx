import React, { forwardRef } from 'react'
import { BoxButtonProps } from '../../types'
import * as Styled from './BoxButton.styles'

export interface Props extends BoxButtonProps {
  /** Button Icon */
  leftIcon?: React.ReactNode

  /** Button title */
  title: string
}

export const BoxButton = forwardRef<HTMLButtonElement, Props>(({ leftIcon, title, ...props }, ref) => {
  return (
    <Styled.Button disabled={props.isDisabled} {...props} ref={ref}>
      <>{leftIcon}</>
      <Styled.Padding padding="0 0 0 4px" />
      <>{title}</>
    </Styled.Button>
  )
})
