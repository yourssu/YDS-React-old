import React from 'react'
import styled from '@emotion/styled'

export interface DividerProps {
  thickness: 'thin' | 'thick'
  direction: 'horizontal' | 'vertical'
}

const thicknessDef = {
  thin: '0.1px',
  thick: '8px',
}

const colorDef = {
  thin: 'borderNormal',
  thick: 'borderThin',
}

export const Divider = styled.hr<DividerProps>`
  width: ${({ direction, thickness }) => (direction === 'horizontal' ? '100%' : thicknessDef[thickness])}
  height: ${({ direction, thickness }) => (direction === 'vertical' ? '100%' : thicknessDef[thickness])}
  color: ${
    ({ thickness }) =>
      colorDef[thickness] === 'borderNormal' ? 'rgba(16, 17, 18, 0.1)' : '#F3F5F7' /* TODO: Implement color system */
  }
`
