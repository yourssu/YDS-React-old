import React from 'react'
import { ListProps } from '../../types'
import * as Styled from './List.styles'

type Props = ListProps

export const List: React.VFC<Props> = ({ subHeader, listItems, ...props }) => {
  return (
    <Styled.Wrapper {...props}>
      <div className="container">
        {subHeader && <Styled.SubHeader>{subHeader}</Styled.SubHeader>}
        <Styled.ListItems>
          {listItems?.map((list) => (
            <div className="listItem-container">{list}</div>
          ))}
        </Styled.ListItems>
      </div>
    </Styled.Wrapper>
  )
}
