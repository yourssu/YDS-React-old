import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
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
  background-color: ${({ theme, color }) => theme.color[bgColor[color]]};
`

export const Padding = styled.div<{ padding: string }>`
  padding: ${({ padding }) => padding};
`

type bgColorType = {
  mono: 'monoItemBG'
  green: 'greenItemBG'
  emerald: 'emeraldItemBG'
  aqua: 'aquaItemBG'
  blue: 'blueItemBG'
  indigo: 'indigoItemBG'
  violet: 'violetItemBG'
  purple: 'purpleItemBG'
  pink: 'pinkItemBG'
}

const bgColor: bgColorType = {
  mono: 'monoItemBG',
  green: 'greenItemBG',
  emerald: 'emeraldItemBG',
  aqua: 'aquaItemBG',
  blue: 'blueItemBG',
  indigo: 'indigoItemBG',
  violet: 'violetItemBG',
  purple: 'purpleItemBG',
  pink: 'pinkItemBG',
}
