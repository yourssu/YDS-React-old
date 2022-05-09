import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { List } from './List'
import { ListItem } from '../ListItem/ListItem'
import { ListToggleItem } from '../ListToggleItem/ListToggleItem'
import { ArrowRightLineIcon } from '../../icons'

export default {
  title: 'Component/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => {
  const [isSelected, setIsSelected] = useState(false)
  const onClickToggle = () => {
    setIsSelected((prev) => !prev)
  }

  return (
    <div style={{ width: '400px' }}>
      <List {...args}>
        <ListItem leftIcon={''} rightIcon={''}>
          비밀번호 변경
        </ListItem>
        <ListItem
          leftIcon={''}
          rightIcon={
            <div style={{ width: '18px', height: '18px' }}>
              <ArrowRightLineIcon />
            </div>
          }
        >
          계정 관리
        </ListItem>
        <ListToggleItem isSelected={isSelected} onClickToggle={onClickToggle}>
          비밀번호 변경
        </ListToggleItem>
      </List>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  subHeader: 'My',
}
