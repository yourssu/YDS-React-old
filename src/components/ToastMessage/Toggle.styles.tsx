import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import { ToastMessageProps } from '../../types'

export const ToastWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  .toast-container {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 64px;
  }

  .message-container {
    border-radius: 8px;
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.color.toastBG};
  }

  .padding--8 {
    width: 8px;
    height: 1px;
  }
`

export const MessageWrapper = styled.div<ToastMessageProps>`
  width: 100%;
  margin: 16px 24px;
  display: flex;
  ${getTypoStyle(Typography.Body2)};
  color: ${({ theme }) => theme.color.textReserved};
  justify-content: ${({ line }) => (line === 'single' ? 'center' : 'flex-start')};
`
