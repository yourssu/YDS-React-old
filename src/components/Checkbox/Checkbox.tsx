import React from 'react'
import CheckIcon from '../../assets/CheckIcon'
import EmptyCheckIcon from '../../assets/EmptyCheckIcon'
import { CheckBoxProps } from '../../types'
import { Label } from './Checkbox.styles'

const Checkbox: React.VFC<CheckBoxProps> = ({ text, disabled, isSelected, size, ...props }) => {
  return (
    <Label disabled={disabled} isSelected={isSelected} size={size}>
      {isSelected ? <CheckIcon className="check-icon" /> : <EmptyCheckIcon className="check-icon" />}
      <div className="padding-box" />
      <input disabled={disabled} className="checkbox" type="checkbox" {...props}></input>
      <span>{text}</span>
    </Label>
  )
}

export { Checkbox }
