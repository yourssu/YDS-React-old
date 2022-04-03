import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Atom/CheckBox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: '텍스트',
  disabled: false,
  size: 'medium',
  isSelected: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: '텍스트',
  disabled: true,
  size: 'medium',
  isSelected: false,
}

export const DisabledSelected = Template.bind({})
DisabledSelected.args = {
  text: 'Disabled & Selected',
  disabled: true,
  size: 'medium',
  isSelected: true,
}

export const Small = Template.bind({})
Small.args = {
  text: '텍스트',
  disabled: false,
  size: 'small',
  isSelected: true,
}

export const Large = Template.bind({})
Large.args = {
  text: '텍스트',
  disabled: false,
  size: 'Large',
  isSelected: true,
}
