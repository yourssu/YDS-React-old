import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme/index'

const Button = styled.button<ButtonProps>`
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

  ${({ types, isDisabled, theme }) =>
    !isDisabled
      ? types === 'filled'
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
          `
      : // isDisabled
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
        `};

  ${({ isWarned, theme, types }) =>
    isWarned === true
      ? types === 'filled'
        ? css`
            background-color: ${theme.color.buttonWarned};
            color: ${theme.color.buttonReserved};
            border: none;
            fill: ${theme.color.buttonReserved};
            &:hover {
              cursor: pointer;
              background-color: ${theme.color.buttonWarnedPressed};
            }
          `
        : types === 'tinted'
        ? css`
            background-color: ${theme.color.buttonWarnedBG};
            color: ${theme.color.buttonWarned};
            border: none;
            fill: ${theme.color.buttonWarned};

            &:hover {
              cursor: pointer;
              fill: ${theme.color.buttonWarnedPressed};
              color: ${theme.color.buttonWarnedPressed};
            }
          `
        : // types === 'line'
          css`
            background-color: ${theme.color.bgNormal};
            color: ${theme.color.buttonWarned};
            border: 0.1px solid ${theme.color.buttonWarned};
            fill: ${theme.color.buttonWarned};
            &:hover {
              cursor: pointer;
              fill: ${theme.color.buttonWarnedPressed};
              color: ${theme.color.buttonWarnedPressed};
              border-color: ${theme.color.buttonWarnedPressed};
            }
          `
      : css``};

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

type ButtonProps = {
  /** Button size */
  size: 'extraLarge' | 'large' | 'medium' | 'small'

  /** Button border radius */
  rounding: 8 | 4

  /** Disabled Button */
  isDisabled: boolean

  /** Button for Warnning */
  isWarned: boolean

  // error naming to "type"
  types: 'filled' | 'tinted' | 'line'
} & React.HtmlHTMLAttributes<HTMLButtonElement>

export interface Props extends ButtonProps {
  /** Button Icon */
  leftIcon?: React.ReactNode

  /** Button title */
  title: string
}

export const BoxButton: React.FC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <ThemeProvider>
      <Button disabled={props.isDisabled} {...props}>
        <>{leftIcon}</>
        <div className="padding--4" style={{ paddingLeft: '4px' }} />
        <>{title}</>
      </Button>
    </ThemeProvider>
  )
}
