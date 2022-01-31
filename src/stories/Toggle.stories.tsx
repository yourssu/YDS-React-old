import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Toggle from '../components/Toggle/Toggle'

export default {
  title: 'Atom/Toggle',
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [isSelected, setIsSelected] = useState(args.isSelected)
  const onClick = () => {
    if (args.isDisabled) return
    setIsSelected((prev) => !prev)
  }
  const newArgs = { ...args, isSelected, onClick }
  return <Toggle {...newArgs} />
}

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
