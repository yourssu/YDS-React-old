import React from 'react'
import { ToggleProps } from '../../types'
import * as Styled from './Toggle.styles'

const Toggle: React.VFC<ToggleProps> = ({ disabled, isSelected, ...props }) => {
  return (
    <Styled.Label isSelected={isSelected} disabled={disabled} className="toggle-label">
      <input readOnly disabled={disabled} checked={true} className="checkbox" {...props} type="checkbox" />
      <span className="thumb"></span>
    </Styled.Label>
  )
}

export { Toggle }
