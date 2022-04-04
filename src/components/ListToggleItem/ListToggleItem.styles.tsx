import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'
import { ListItemProps } from '../../types'

export const Wrapper = styled.ul<ListItemProps>`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 48px;
  background-color: ${({ isPressed, theme }) => (isPressed ? theme.color.bgPressed : 'transparent')};
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`

export const Item = styled.li`
  display: flex;
  ${getTypoStyle(Typography.Body1)};
  color: ${({ theme }) => theme.color.textSecondary};
`
