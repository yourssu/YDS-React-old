import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { PlainButtonProps } from '../../types'

const getButtonColor = ({ isPointed, isWarned, theme }: PlainButtonProps & { theme: Theme }) => {
  if (isPointed) {
    return css`
      color: ${theme.color.buttonPoint};
      fill: ${theme.color.buttonPoint};
      &:hover {
        color: ${theme.color.buttonPointPressed};
        fill: ${theme.color.buttonPointPressed};
      }
    `
  } else if (isWarned) {
    return css`
      color: ${theme.color.buttonWarned};
      fill: ${theme.color.buttonWarned};
      &:hover {
        color: ${theme.color.buttonWarnedPressed};
        fill: ${theme.color.buttonWarnedPressed};
      }
    `
  } else {
    return css`
      color: ${theme.color.buttonNormal};
      fill: ${theme.color.buttonNormal};
      &:hover {
        color: ${theme.color.buttonNormalPressed};
        fill: ${theme.color.buttonNormalPressed};
      }
    `
  }
}

const buttonSize = {
  large: css`
    height: 24px;
    font-size: 16px;
    .icon-wrapper {
      width: 24px;
      height: 24px;
    }
  `,
  medium: css`
    height: 20px;
    font-size: 14px;
    .icon-wrapper {
      width: 20px;
      height: 20px;
    }
  `,
  small: css`
    height: 16px;
    font-size: 12px;
    .icon-wrapper {
      width: 16px;
      height: 16px;
    }
  `,
}

export const Button = styled.button<PlainButtonProps>`
  ${getTypoStyle(Typography.Button3)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  ${(props) => getButtonColor(props)};
  &:disabled {
    color: ${({ theme }) => theme.color.buttonDisabled};
    fill: ${({ theme }) => theme.color.buttonDisabled};
    cursor: not-allowed;
  }
  ${({ size }) => buttonSize[size]};
`
