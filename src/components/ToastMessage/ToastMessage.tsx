import React from 'react'
import { ToastMessageProps } from '../../types'
import * as Styled from './ToastMessage.styles'
import { Toast } from './ToastMessage.styles'

/* children: message of ToastMessage */
const ToastMessage: React.FC<ToastMessageProps> = ({ children }) => (
  <Styled.ToastWrapper>
    <div className="toast-container">
      <div className="padding--8" />
      <Toast>
        <div>{children}</div>
      </Toast>
      <div className="padding--8" />
    </div>
  </Styled.ToastWrapper>
)

export { ToastMessage }
