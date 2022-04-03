import React from 'react'
import { ToggleProps } from '../../types'
import { Label } from './Toggle.styles'

const Toggle: React.VFC<ToggleProps> = ({ disabled, isSelected, ...props }) => {
  return (
    <Label isSelected={isSelected} disabled={disabled} className="toggle-label">
      <input readOnly disabled={disabled} checked={true} className="checkbox" {...props} type="checkbox" />
      <span className="thumb"></span>
    </Label>
  )
}

export { Toggle }
