import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ListItem } from './ListItem'
import { GroundLineIcon } from '../../icons'

export default {
  title: 'Atom/ListItem',
  component: ListItem,
  argTypes: {},
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => {
  return (
    <div style={{ width: '400px' }}>
      <ListItem {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  isPressed: false,
  children: '로그아웃',
  leftIcon: <GroundLineIcon />,
  rightIcon: <GroundLineIcon />,
}

export const Pressed = Template.bind({})
Pressed.args = {
  isPressed: true,
  children: '로그아웃',
}
