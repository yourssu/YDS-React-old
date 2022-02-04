import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import { BadgeProps } from '../../types'

export const Wrapper = styled.div<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: fit-content;
  height: 24px;
  padding: 0 8px;
  color: ${({ theme }) => theme.color.monoItemText};
  ${getTypoStyle(Typography.Caption1)};

  ${({ color, theme }) =>
    color === 'mono'
      ? css`
          background-color: ${theme.color.monoItemBG};
        `
      : color === 'green'
      ? css`
          background-color: ${theme.color.greenItemBG};
        `
      : color === 'emerald'
      ? css`
          background-color: ${theme.color.emeraldItemBG};
        `
      : color === 'aqua'
      ? css`
          background-color: ${theme.color.aquaItemBG};
        `
      : color === 'blue'
      ? css`
          background-color: ${theme.color.blueItemBG};
        `
      : color === 'indigo'
      ? css`
          background-color: ${theme.color.indigoItemBG};
        `
      : color === 'violet'
      ? css`
          background-color: ${theme.color.violetItemBG};
        `
      : color === 'purple'
      ? css`
          background-color: ${theme.color.purpleItemBG};
        `
      : color === 'pink'
      ? css`
          background-color: ${theme.color.pinkItemBG};
        `
      : css``};

  svg {
    width: 16px;
    height: 16px;
  }
`
