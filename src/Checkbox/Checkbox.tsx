import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import CheckIcon from '../assets/CheckIcon'
import ThemeProvider from '../styles/theme'

const Label = styled.label<CheckBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  .check-icon {
    padding-right: 5.33px;
  }

  ${({ theme, isDisabled, isSelected }) =>
    isDisabled
      ? isSelected
        ? css`
            color: ${theme.color.buttonDisabled};
            fill: ${theme.color.buttonDisabled};
          `
        : css`
            color: ${theme.color.buttonDisabled};
            fill: ${theme.color.buttonDisabled};
          `
      : isSelected
      ? css`
          color: ${theme.color.buttonPoint};
          fill: ${theme.color.buttonPoint};
        `
      : css`
          color: ${theme.color.buttonNormal};
          fill: ${theme.color.buttonNormal};
        `};
`

type CheckBoxProps = {
  isDisabled: boolean
  isSelected: boolean
  size: 'small' | 'medium' | 'large'
}

interface Props extends CheckBoxProps {
  text: string
}

const Checkbox: React.VFC<Props & React.HtmlHTMLAttributes<HTMLInputElement>> = ({
  text,
  isDisabled,
  isSelected,
  size,
  ...props
}) => {
  return (
    <ThemeProvider>
      <Label isDisabled={isDisabled} isSelected={isSelected} size={size}>
        <CheckIcon className="checkIcon" />
        <input className="checkbox" type="checkbox" {...props}>
          {text}
        </input>
      </Label>
    </ThemeProvider>
  )
}

export default Checkbox
