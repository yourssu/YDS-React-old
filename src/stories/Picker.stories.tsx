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
    ['오전', '오후'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    Array(12)
      .fill(0)
      .map((_, index) => (`${index * 5}`.length > 1 ? `${index * 5}` : `0${index * 5}`)),
  ],
  onChange: () => {},
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  columns: [
    ['2018', '2019', '2021', '2022', '2023', '2024', '2025'],
    ['1학기', '여름학기', '2학기', '겨울학기'],
  ],
  onChange: () => {},
}

export const OneColumns = Template.bind({})
OneColumns.args = {
  columns: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']],
  onChange: () => {},
}
