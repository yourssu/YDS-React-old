import React, { forwardRef } from 'react'
import { CheckcircleFilledIcon, CheckcircleLineIcon } from '../../icons'
import { CheckBoxProps } from '../../types'
import * as Styled from './Checkbox.styles'

const Checkbox = forwardRef<HTMLDivElement, CheckBoxProps>(({ text, disabled, isSelected, size, ...props }, ref) => {
  return (
    <Styled.CheckboxWrapper ref={ref} disabled={disabled} isSelected={isSelected} size={size}>
      <span className="checkIcon-wrapper">{isSelected ? <CheckcircleFilledIcon /> : <CheckcircleLineIcon />}</span>
      <div className="padding-box" />
      <input disabled={disabled} className="checkbox" type="checkbox" {...props} />
      <label className="label">{text}</label>
    </Styled.CheckboxWrapper>
  )
})

export { Checkbox }
