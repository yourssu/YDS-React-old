import React from 'react'
import { ToastMessageProps } from '../../types'
import { ToastWrapper, MessageWrapper } from './Toggle.styles'

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
