import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BoxButton } from './BoxButton'
import ChatIcon from '../../assets/ChatIcon'

export default {
  title: 'Atom/BoxButton',
  component: BoxButton,
  argTypes: {},
} as ComponentMeta<typeof BoxButton>

const Template: ComponentStory<typeof BoxButton> = (args) => <BoxButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Enabled/Large/filled',
  size: 'large',
  types: 'filled',
  rounding: '8',
  disabled: false,
  isWarned: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Disabled/Large/tinted',
  size: 'large',
  types: 'tinted',
  rounding: '8',
  disabled: true,
  isWarned: false,
  leftIcon: <ChatIcon />,
}

export const Warned = Template.bind({})
Warned.args = {
  title: 'Warned/Large/line',
  size: 'large',
  types: 'line',
  rounding: '8',
  disabled: false,
  isWarned: true,
  leftIcon: <ChatIcon />,
}
