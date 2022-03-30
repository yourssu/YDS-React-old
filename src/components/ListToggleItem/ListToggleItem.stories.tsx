import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ListToggleItem } from './ListToggleItem'

export default {
  title: 'Atom/ListToggleItem',
  component: ListToggleItem,
  argTypes: {},
} as ComponentMeta<typeof ListToggleItem>

const Template: ComponentStory<typeof ListToggleItem> = (args) => <ListToggleItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isSelected: true,
  children: '로그아웃',
}

export const Disabled = Template.bind({})
Disabled.args = {
  isSelected: false,
  children: '로그아웃',
}
