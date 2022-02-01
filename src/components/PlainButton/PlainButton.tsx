import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme'

const Button = styled.button<ButtonProps>`
  ${getTypoStyle(Typography.Button3)};

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  ${({ isPointed, isDisabled, isWarned, theme }) =>
    isPointed
      ? css`
          color: ${theme.color.buttonPoint};
          fill: ${theme.color.buttonPoint};
          &:hover {
            color: ${theme.color.buttonPointPressed};
            fill: ${theme.color.buttonPointPressed};
          }
        `
      : isDisabled
      ? css`
          color: ${theme.color.buttonDisabled};
          cursor: not-allowed;
          fill: ${theme.color.buttonDisabled};
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
        `}
`

type ButtonProps = {
  /** Button size */
  size: 'large' | 'medium' | 'small'

  /** Button for Point */
  isPointed: boolean

  /** Disabled Button */
  isDisabled: boolean

  /** Button for Warnning */
  isWarned: boolean
} & React.HtmlHTMLAttributes<HTMLButtonElement>

export interface Props extends ButtonProps {
  /** Button Icon */
  leftIcon?: React.ReactNode

  /** Button title */
  title: string
}

export const PlainButton: React.VFC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <ThemeProvider>
      <Button disabled={props.isDisabled} {...props}>
        <>{leftIcon}</>
        <div className="padding--2" style={{ paddingLeft: '2px' }} />
        <>{title}</>
      </Button>
    </ThemeProvider>
  )
}
