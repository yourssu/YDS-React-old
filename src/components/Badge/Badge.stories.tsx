import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChatIcon from '../../assets/ChatIcon'
import { Badge } from './Badge'

export default {
  title: 'Atom/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'WithIcon',
  color: 'green',
  icon: true,
  leftIcon: <ChatIcon />,
}

export const Text = Template.bind({})
Text.args = {
  title: 'Text',
  icon: false,
  color: 'auqa',
}
