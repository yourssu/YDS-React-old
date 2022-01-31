import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { HtmlHTMLAttributes } from 'react'
import ChatIcon from '../../assets/ChatIcon'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme'

const Wrapper = styled.div<BadgeProps>`
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

type BadgeProps = {
  icon: boolean
  color: 'mono' | 'green' | 'emerald' | 'aqua' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink'
} & HtmlHTMLAttributes<HTMLDivElement>

interface Props extends BadgeProps {
  leftIcon?: React.ReactNode
  title: string
}

export const Badge: React.VFC<Props> = ({ leftIcon = <ChatIcon />, title, ...props }) => {
  return (
    <ThemeProvider>
      <Wrapper {...props}>
        <>{props.icon && leftIcon && leftIcon}</>
        <div className="padding--4" style={{ paddingLeft: '4px' }} />
        <>{title}</>
        {(!leftIcon || !props.icon) && <div className="padding--4" style={{ paddingRight: '4px' }} />}
      </Wrapper>
    </ThemeProvider>
  )
}
