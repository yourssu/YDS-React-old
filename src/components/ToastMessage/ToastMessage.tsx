import styled from '@emotion/styled'
import React from 'react'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'

const ToastWrapper = styled.div`
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

const MessageWrapper = styled.div<ToastMessageProps>`
  width: 100%;
  margin: 16px 24px;
  display: flex;
  ${getTypoStyle(Typography.Body2)};
  color: ${({ theme }) => theme.color.textReserved};
  justify-content: ${({ line }) => (line === 'single' ? 'center' : 'flex-start')};
`

type ToastMessageProps = {
  /**  
   multi: more than two lines (left alignment) <br>
   single: single lines (center alignment) */
  line: 'multi' | 'single'
} & React.HtmlHTMLAttributes<HTMLDivElement>

/* children: message of ToastMessage */
const ToastMessage: React.FC<ToastMessageProps> = ({ line, children }) => {
  return (
    <ToastWrapper>
      <div className="toast-container">
        <div className="padding--8" />
        <div className="message-container">
          <MessageWrapper line={line}>{children}</MessageWrapper>
        </div>
        <div className="padding--8" />
      </div>
    </ToastWrapper>
  )
}

export default ToastMessage
