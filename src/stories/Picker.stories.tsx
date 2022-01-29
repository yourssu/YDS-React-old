import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Picker from '../components/Picker/Picker'

export default {
  title: 'Atom/Picker',
  component: Picker,
  argTypes: {},
} as ComponentMeta<typeof Picker>

const Template: ComponentStory<typeof Picker> = (args) => <Picker {...args} />

export const Primary = Template.bind({})
Primary.args = {
  columns: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
  ],
  onChange: (s: string[]) => {
    console.log(s)
  },
}
