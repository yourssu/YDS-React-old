import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import PlayButton from '../assets/Playbutton'
import { BoxButton, Props } from '../BoxButton/BoxButton'

export default {
  title: 'Atom/BoxButton',
  component: BoxButton,
  argTypes: {
    types: {
      defaultValue: 'filled',
    },
    size: {
      defaultValue: 'large',
    },
    rounding: {
      defaultValue: 8,
    },
    isDisabled: {
      defaultValue: false,
    },
    isWarned: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof BoxButton>

const Template: Story<Props> = (args) => <BoxButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  title: '재생하기',
  leftIcon: <PlayButton />,
  label: 'BoxButton',
  size: 'large',
  types: 'filled',
  rounding: 8,
  isDisabled: false,
  isWarned: false,
}
