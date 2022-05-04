import React from 'react'
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
  return (
    <div style={{ width: '400px' }}>
      <List {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  subHeader: 'My',
  listItems: [
    <ListItem leftIcon={''} rightIcon={''}>
      비밀번호 변경
    </ListItem>,
    <ListItem leftIcon={''} rightIcon={ArrowRightLineIcon}>
      계정 관리
    </ListItem>,
    <ListToggleItem>비밀번호 변경</ListToggleItem>,
  ],
}
