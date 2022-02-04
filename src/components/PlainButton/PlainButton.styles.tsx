import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import { PlainButtonProps } from '../../types'

export const Button = styled.button<PlainButtonProps>`
  ${getTypoStyle(Typography.Button3)};

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  ${({ isPointed, isWarned, theme }) =>
    isPointed
      ? css`
          color: ${theme.color.buttonPoint};
          fill: ${theme.color.buttonPoint};
          &:hover {
            color: ${theme.color.buttonPointPressed};
            fill: ${theme.color.buttonPointPressed};
          }
        `
      : isWarned
      ? css`
          color: ${theme.color.buttonWarned};
          fill: ${theme.color.buttonWarned};
          &:hover {
            color: ${theme.color.buttonWarnedPressed};
            fill: ${theme.color.buttonWarnedPressed};
          }
        `
      : css`
          color: ${theme.color.buttonNormal};
          fill: ${theme.color.buttonNormal};
          &:hover {
            color: ${theme.color.buttonNormalPressed};
            fill: ${theme.color.buttonNormalPressed};
          }
        `};

  &:disabled {
    color: ${({ theme }) => theme.color.buttonDisabled};
    cursor: not-allowed;
    fill: ${({ theme }) => theme.color.buttonDisabled};
  }

  ${({ size }) =>
    size === 'large'
      ? css`
          height: 24px;
          font-size: 16px;
          svg {
            width: 24px;
            height: 24px;
          }
        `
      : size === 'medium'
      ? css`
          height: 20px;
          font-size: 14px;
          svg {
            width: 20px;
            height: 20px;
          }
        `
      : css`
          height: 16px;
          font-size: 12px;
          svg {
            width: 16px;
            height: 16px;
          }
        `};
`
