import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchTextField } from '../components/TextField/TextField'

export default {
  title: 'Atom/TextField/SearchTextField',
  component: SearchTextField,
  argTypes: {},
} as ComponentMeta<typeof SearchTextField>

const Template: ComponentStory<typeof SearchTextField> = (args) => {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onClickClearButton = () => {
    setValue('')
  }
  const newArgs = { ...args, value, onChange, onClickClearButton }
  return <SearchTextField {...newArgs} />
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '플레이스 홀더',
  isDisabled: false,
  isPositive: true,
  isNegative: false,
}
