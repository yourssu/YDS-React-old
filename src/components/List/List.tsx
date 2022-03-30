import React from 'react'
import { ListProps } from '../../types'
import { SubHeader, Wrapper, ListItems } from './List.styles'

type Props = ListProps

export const List: React.VFC<Props> = ({ subHeader, listItems, ...props }) => {
  return (
    <Wrapper {...props}>
      <div className="container">
        {subHeader && <SubHeader>{subHeader}</SubHeader>}
        <ListItems>
          {listItems?.map((list) => (
            <div className="listItem-container">{list}</div>
          ))}
        </ListItems>
      </div>
    </Wrapper>
  )
}
