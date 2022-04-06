import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { BoxButtonProps } from '../../types'

type getStyleType = {
  types: BoxButtonProps['types']
  theme?: Theme
  size?: BoxButtonProps['size']
}

const getDisabledStyle = ({ types, theme }: getStyleType) => {
  if (types === 'filled') {
    return css`
      background-color: ${theme?.color.buttonDisabledBG};
      color: ${theme?.color.buttonDisabled};
      border: none;
      fill: ${theme?.color.buttonDisabled};
      &:hover {
        cursor: not-allowed;
      }
    `
  }

  if (types === 'line') {
    return css`
      background-color: ${theme?.color.bgNormal};
      border: 0.1px solid ${theme?.color.buttonDisabled};
      color: ${theme?.color.buttonDisabled};
      fill: ${theme?.color.buttonDisabled};
      &:hover {
        cursor: not-allowed;
      }
    `
  }

  if (types === 'tinted') {
    return css`
      background-color: ${theme?.color.buttonDisabledBG};
      color: ${theme?.color.buttonDisabled};
      border: none;
      fill: ${theme?.color.buttonDisabled};
      &:hover {
        cursor: not-allowed;
      }
    `
  }
}

const getNormalStyle = ({ types, theme }: getStyleType) => {
  if (types === 'filled') {
    return css`
      background-color: ${theme?.color.buttonPoint};
      color: ${theme?.color.buttonReserved};
      fill: ${theme?.color.buttonReserved};
      border: none;

      &:hover {
        background-color: ${theme?.color.buttonPointPressed};
      }
    `
  }

  if (types === 'line') {
    return css`
      background-color: ${theme?.color.bgNormal};
      color: ${theme?.color.buttonPoint};
      border: 0.1px solid ${theme?.color.buttonPoint};
      fill: ${theme?.color.buttonPoint};
      &:hover {
        border: 0.1px solid ${theme?.color.buttonPointPressed};
        color: ${theme?.color.buttonPointPressed};
        fill: ${theme?.color.buttonPointPressed};
      }
    `
  }

  if (types === 'tinted') {
    return css`
      background-color: ${theme?.color.buttonPointBG};
      color: ${theme?.color.buttonPoint};
      border: none;
      fill: ${theme?.color.buttonPoint};
      &:hover {
        color: ${theme?.color.buttonPointPressed};
        fill: ${theme?.color.buttonPointPressed};
      }
    `
  }
}

const getWarnedStyle = ({ types, theme }: getStyleType) => {
  if (types === 'filled') {
    return css`
      background-color: ${theme?.color.buttonWarned};
      color: ${theme?.color.buttonReserved};
      border: none;
      fill: ${theme?.color.buttonReserved};
      &:hover {
        cursor: pointer;
        background-color: ${theme?.color.buttonWarnedPressed};
      }
    `
  }

  if (types === 'line') {
    return css`
      background-color: ${theme?.color.bgNormal};
      color: ${theme?.color.buttonWarned};
      border: 0.1px solid ${theme?.color.buttonWarned};
      fill: ${theme?.color.buttonWarned};
      &:hover {
        cursor: pointer;
        fill: ${theme?.color.buttonWarnedPressed};
        color: ${theme?.color.buttonWarnedPressed};
        border-color: ${theme?.color.buttonWarnedPressed};
      }
    `
  }

  if (types === 'tinted') {
    return css`
      background-color: ${theme?.color.buttonWarnedBG};
      color: ${theme?.color.buttonWarned};
      border: none;
      fill: ${theme?.color.buttonWarned};

      &:hover {
        cursor: pointer;
        fill: ${theme?.color.buttonWarnedPressed};
        color: ${theme?.color.buttonWarnedPressed};
      }
    `
  }
}

const getSizeStyle = ({ size, types }: getStyleType) => {
  if (size === 'extraLarge') {
    if (types === 'filled') {
      return css`
        height: 56px;
        font-size: 16px;
      `
    } else {
      return css`
        display: none;
      `
    }
  }

  if (size === 'large') {
    return css`
      height: 48px;
      font-size: 14px;
    `
  }

  if (size === 'medium') {
    css`
      height: 40px;
      font-size: 14px;
    `
  }

  if (size === 'small') {
    if (types === 'filled') {
      css`
        display: none;
      `
    } else {
      css`
        height: 32px;
        font-size: 12px;
        svg {
          width: 16px;
          height: 16px;
        }
      `
    }
  }
}

export const Button = styled.button<BoxButtonProps>`
  ${getTypoStyle(Typography.Button2)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 0 16px;
  border-radius: ${({ rounding }) => rounding}px;
  cursor: pointer;
  ${({ types, theme }) => getNormalStyle({ types, theme })};
  ${({ isWarned, theme, types }) => isWarned && getWarnedStyle({ theme, types })};
  &:disabled {
    ${({ types, theme }) => getDisabledStyle({ types, theme })};
  }
  ${({ size, types }) => getSizeStyle({ size, types })};
`
