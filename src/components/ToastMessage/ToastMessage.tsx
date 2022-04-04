import React from 'react'
import { ToastMessageProps } from '../../types'
import * as Styled from './ToastMessage.styles'

/* children: message of ToastMessage */
const ToastMessage: React.FC<ToastMessageProps> = ({ line, children }) => {
  return (
    <Styled.ToastWrapper>
      <div className="toast-container">
        <div className="padding--8" />
        <div className="message-container">
          <Styled.MessageWrapper line={line}>{children}</Styled.MessageWrapper>
        </div>
        <div className="padding--8" />
      </div>
    </Styled.ToastWrapper>
  )
}

export { ToastMessage }
