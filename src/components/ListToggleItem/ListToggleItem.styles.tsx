import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { ListItemProps } from '../../types'

export const Wrapper = styled.ul<ListItemProps>`
  .container {
    display: flex;
    width: 100%;
    min-width: 390px;
    min-height: 48px;
    background-color: ${({ isPressed, theme }) => (isPressed ? theme.color.bgPressed : 'transparent')};
    align-items: center;
    padding: 0 20px;
  }
`

export const Item = styled.li`
  display: flex;
  width: 100%;
  ${getTypoStyle(Typography.Body1)};
  color: ${({ theme }) => theme.color.textSecondary};
`
