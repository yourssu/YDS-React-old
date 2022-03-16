import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import { BoxButtonProps } from '../../types'

export const Button = styled.button<BoxButtonProps>`
  ${getTypoStyle(Typography.Button2)};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 0 16px;
  border-radius: ${({ rounding }) => rounding}px;
  &:hover {
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &:disabled {
    ${({ types, theme }) =>
      types === 'filled'
        ? css`
            background-color: ${theme.color.buttonDisabledBG};
            color: ${theme.color.buttonDisabled};
            border: none;
            fill: ${theme.color.buttonDisabled};
            &:hover {
              cursor: not-allowed;
            }
          `
        : types === 'tinted'
        ? css`
            background-color: ${theme.color.buttonDisabledBG};
            color: ${theme.color.buttonDisabled};
            border: none;
            fill: ${theme.color.buttonDisabled};
            &:hover {
              cursor: not-allowed;
            }
          `
        : // types === 'line'
          css`
        background-color: ${theme.color.bgNormal};
        border: 0.1px solid ${theme.color.buttonDisabled}
        color: ${theme.color.buttonDisabled};
        fill: ${theme.color.buttonDisabled};
        &:hover {
          cursor: not-allowed;
        }
      `}
  }

  ${({ types, theme }) =>
    types === 'filled'
      ? css`
          background-color: ${theme.color.buttonPoint};
          color: ${theme.color.buttonReserved};
          fill: ${theme.color.buttonReserved};
          border: none;

          &:hover {
            background-color: ${theme.color.buttonPointPressed};
          }
        `
      : types === 'tinted'
      ? css`
          background-color: ${theme.color.buttonPointBG};
          color: ${theme.color.buttonPoint};
          border: none;
          fill: ${theme.color.buttonPoint};
          &:hover {
            color: ${theme.color.buttonPointPressed};
            fill: ${theme.color.buttonPointPressed};
          }
        `
      : // types === 'line'
        css`
          background-color: ${theme.color.bgNormal};
          color: ${theme.color.buttonPoint};
          border: 0.1px solid ${theme.color.buttonPoint};
          fill: ${theme.color.buttonPoint};
          &:hover {
            border: 0.1px solid ${theme.color.buttonPointPressed};
            color: ${theme.color.buttonPointPressed};
            fill: ${theme.color.buttonPointPressed};
          }
        `};

  ${({ isWarned, theme, types }) =>
    types === 'filled'
      ? css`
          background-color: ${isWarned && theme.color.buttonWarned};
          color: ${isWarned && theme.color.buttonReserved};
          border: none;
          fill: ${isWarned && theme.color.buttonReserved};
          &:hover {
            cursor: pointer;
            background-color: ${isWarned && theme.color.buttonWarnedPressed};
          }
        `
      : types === 'tinted'
      ? css`
          background-color: ${isWarned && theme.color.buttonWarnedBG};
          color: ${isWarned && theme.color.buttonWarned};
          border: none;
          fill: ${isWarned && theme.color.buttonWarned};

          &:hover {
            cursor: pointer;
            fill: ${isWarned && theme.color.buttonWarnedPressed};
            color: ${isWarned && theme.color.buttonWarnedPressed};
          }
        `
      : // types === 'line'
        css`
          background-color: ${isWarned && theme.color.bgNormal};
          color: ${isWarned && theme.color.buttonWarned};
          border: 0.1px solid ${isWarned && theme.color.buttonWarned};
          fill: ${isWarned && theme.color.buttonWarned};
          &:hover {
            cursor: pointer;
            fill: ${isWarned && theme.color.buttonWarnedPressed};
            color: ${isWarned && theme.color.buttonWarnedPressed};
            border-color: ${isWarned && theme.color.buttonWarnedPressed};
          }
        `};

  ${({ size, types }) =>
    size === 'extraLarge'
      ? types === 'filled'
        ? css`
            height: 56px;
            font-size: 16px;
          `
        : css`
            display: none;
          `
      : size === 'large'
      ? css`
          height: 48px;
          font-size: 14px;
        `
      : size === 'medium'
      ? css`
          height: 40px;
          font-size: 14px;
        `
      : // size === 'small'
      types === 'filled'
      ? css`
          display: none;
        `
      : css`
          height: 32px;
          font-size: 12px;
          svg {
            width: 16px;
            height: 16px;
          }
        `};
`
