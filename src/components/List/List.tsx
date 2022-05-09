import React from 'react'
import { ListProps } from '../../types'
import * as Styled from './List.styles'

type Props = ListProps

export const List: React.FC<Props> = ({ subHeader, children, ...props }) => {
  return (
    <Styled.Wrapper {...props}>
      <div className="container">
        {subHeader && <Styled.SubHeader>{subHeader}</Styled.SubHeader>}
        <Styled.ListItems>
          <div className="listItem-container">{children}</div>
        </Styled.ListItems>
      </div>
    </Styled.Wrapper>
  )
}
