import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Toggle from '../components/Toggle/Toggle'

export default {
  title: 'Atom/Toggle',
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isDisabled: false,
  isSelected: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  isSelected: false,
}
