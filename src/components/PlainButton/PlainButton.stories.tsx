import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PlainButton } from './PlainButton'
import { GroundLineIcon } from '../../icons'

export default {
  title: 'Atom/PlainButton',
  component: PlainButton,
  argTypes: {},
} as ComponentMeta<typeof PlainButton>

const Template: ComponentStory<typeof PlainButton> = (args) => <PlainButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Enabled/Large/Normal',
  size: 'large',
  isPointed: false,
  disabled: false,
  isWarned: false,
}

export const Pointed = Template.bind({})
Pointed.args = {
  title: 'Enabled/Large/Pointed',
  size: 'large',
  isPointed: true,
  disabled: false,
  isWarned: false,
  leftIcon: <GroundLineIcon />,
}

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Disabled/Large/Normal',
  size: 'large',
  isPointed: false,
  disabled: true,
  isWarned: false,
  leftIcon: <GroundLineIcon />,
}

export const Warned = Template.bind({})
Warned.args = {
  title: 'Warned/Large/Normal',
  size: 'large',
  isPointed: false,
  disabled: false,
  isWarned: true,
  leftIcon: <GroundLineIcon />,
}

export const Medium = Template.bind({})
Medium.args = {
  title: 'Enabled/Medium/Pointed',
  size: 'medium',
  isPointed: true,
  disabled: false,
  isWarned: false,
  leftIcon: <GroundLineIcon />,
}

export const Small = Template.bind({})
Small.args = {
  title: 'Enabled/Small/Pointed',
  size: 'small',
  isPointed: true,
  disabled: false,
  isWarned: false,
  leftIcon: <GroundLineIcon />,
}
