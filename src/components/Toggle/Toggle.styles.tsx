import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { ToggleProps } from '../../types'

const setToggleStyle = ({ isSelected, disabled, theme }: ToggleProps & { theme: Theme }) => {
  if (isSelected && !disabled) {
    return css`
      background-color: ${theme.color.buttonPoint};
      .thumb {
        background-color: ${theme.color.buttonReserved};
        left: 22px;
        margin: 2px;
        margin-left: 0px;
      }
    `
  }

  if (isSelected && disabled) {
    return css`
      background-color: ${theme.color.buttonBG};
      cursor: not-allowed;
      .thumb {
        background-color: ${theme.color.buttonDisabled};
        left: 22px;
        margin: 2px;
        margin-left: 0px;
      }
    `
  }

  if (!isSelected && !disabled) {
    return css`
      background-color: ${theme.color.buttonBG};
      .thumb {
        background-color: ${theme.color.buttonReserved};
        left: 0px;
        margin: 2px;
        margin-right: 0px;
      }
    `
  }

  if (!isSelected && disabled) {
    return css`
      background-color: ${theme.color.buttonBG};
      cursor: not-allowed;
      .thumb {
        background-color: ${theme.color.buttonDisabled};
        left: 0px;
        margin: 2px;
        margin-right: 0px;
      }
    `
  }
}

export const Label = styled.label<ToggleProps>`
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

  ${({ isSelected, disabled, theme }) => setToggleStyle({ isSelected, disabled, theme })};
`
