import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import styleTheme from '../styles/theme/index'

type ButtonProps = {
  size: 'extraLarge' | 'large' | 'medium' | 'small'
  rounding: 8 | 4
  isDisabled: boolean
  isWarned: boolean

  // error naming to "type"
  types: 'filled' | 'tinted' | 'line'
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 0 16px;
  border-radius: ${({ rounding }) => rounding}px;

  ${({ types, isDisabled, theme }) =>
    !isDisabled
      ? types === 'filled'
        ? css`
            background-color: ${theme.color.buttonPoint};
            color: ${theme.color.buttonReserved};
            border: none;
            svg {
              background-color: ${theme.color.buttonReserved};
            }
          `
        : types === 'tinted'
        ? css`
            background-color: ${theme.color.buttonPointBG};
            color: ${theme.color.buttonPoint};
            border: none;
            svg {
              background-color: ${theme.color.buttonPoint};
            }
          `
        : // types === 'line'
          css`
            background-color: ${theme.color.bgNormal};
            color: ${theme.color.buttonPoint};
            border: 1px solid ${theme.color.buttonPoint};
            svg {
              background-color: ${theme.color.buttonPoint};
            }
          `
      : // isDisabled
      types === 'filled'
      ? css`
          background-color: ${theme.color.buttonDisabledBG};
          color: ${theme.color.buttonDisabled};
          border: none;

          svg {
            background-color: ${theme.color.buttonDisabled};
          }
        `
      : types === 'tinted'
      ? css`
          background-color: ${theme.color.buttonDisabledBG};
          color: ${theme.color.buttonDisabled};
          border: none;

          svg {
            background-color: ${theme.color.buttonDisabled};
          }
        `
      : // types === 'line'
        css`
          background-color: ${theme.color.bgNormal};
          border: 1px solid ${theme.color.buttonDisabled}
          color: ${theme.color.buttonDisabled};
          svg {
            background-color: ${theme.color.buttonDisabled};
          }
        `};

  ${({ isWarned, theme, types }) =>
    isWarned === true
      ? types === 'filled'
        ? css`
            background-color: ${theme.color.buttonWarned};
            color: ${theme.color.buttonReserved};
            border: none;

            svg {
              background-color: ${theme.color.buttonReserved};
            }
          `
        : types === 'tinted'
        ? css`
            background-color: ${theme.color.buttonWarnedBG};
            color: ${theme.color.buttonWarned};
            border: none;

            svg {
              background-color: ${theme.color.buttonWarned};
            }
          `
        : // types === 'line'
          css`
            background-color: ${theme.color.bgNormal};
            color: ${theme.color.buttonWarned};
            border: 1px solid ${theme.color.buttonWarned};
            svg {
              background-color: ${theme.color.buttonWarned};
            }
          `
      : ''};

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
        `};
`

export interface Props extends ButtonProps {
  leftIcon: React.ReactNode
  title: string
}

export const BoxButton: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  leftIcon,
  title,
  ...props
}) => {
  return (
    <Button theme={styleTheme} {...props}>
      <>{leftIcon}</>
      <div className="padding--4" style={{ paddingLeft: '4px' }} />
      <>{title}</>
    </Button>
  )
}
