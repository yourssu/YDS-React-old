import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import ThemeProvider from '../../styles/theme'

const Label = styled.label<ToogleProps>`
  position: relative;
  display: inline-block;
  border-radius: 15px;
  width: 51px;
  height: 31px;
  vertical-align: middle;
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .thumb {
    position: absolute;
    width: 27px;
    height: 27px;
    border-radius: 50%;

    &::before {
      position: absolute;
      border-radius: 50%;
      content: '';
      width: 27.1px;
      height: 27.1px;
      background-color: ${({ theme }) => theme.color.borderNormal};
    }

    &::after {
      position: absolute;
      border-radius: 50%;
      content: '';
      width: 27px;
      height: 27px;
      background-color: inherit;
    }
  }

  ${({ theme, isSelected, isDisabled }) =>
    isSelected
      ? !isDisabled
        ? css`
            background-color: ${theme.color.buttonPoint};
            .thumb {
              background-color: ${theme.color.buttonReserved};
              left: 22px;
              margin: 2px;
              margin-left: 0px;
            }
          `
        : css`
            background-color: ${theme.color.buttonBG};
            cursor: not-allowed;
            .thumb {
              background-color: ${theme.color.buttonDisabled};
              left: 22px;
              margin: 2px;
              margin-left: 0px;
            }
          `
      : !isDisabled
      ? css`
          background-color: ${theme.color.buttonBG};
          .thumb {
            background-color: ${theme.color.buttonReserved};
            left: 0px;
            margin: 2px;
            margin-right: 0px;
          }
        `
      : css`
          background-color: ${theme.color.buttonBG};
          cursor: not-allowed;
          .thumb {
            background-color: ${theme.color.buttonDisabled};
            left: 0px;
            margin: 2px;
            margin-right: 0px;
          }
        `};
`

type ToogleProps = {
  isDisabled: boolean
  isSelected: boolean
} & React.HtmlHTMLAttributes<HTMLInputElement>

const Toggle: React.VFC<ToogleProps> = ({ isDisabled, isSelected, ...props }) => {
  return (
    <ThemeProvider>
      <Label isDisabled={isDisabled} isSelected={isSelected}>
        <input className="checkbox" {...props} type="checkbox" />
        <span className="thumb"></span>
      </Label>
    </ThemeProvider>
  )
}

export default Toggle
