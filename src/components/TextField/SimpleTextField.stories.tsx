import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SimpleTextField } from './TextField'

export default {
  title: 'Atom/TextField/SimpleTextField',
  component: SimpleTextField,
  argTypes: {},
} as ComponentMeta<typeof SimpleTextField>

const Template: ComponentStory<typeof SimpleTextField> = (args) => {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onClickClearButton = () => {
    setValue('')
  }
  const newArgs = { ...args, value, onChange, onClickClearButton }
  return <SimpleTextField {...newArgs} />
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '플레이스 홀더',
  helperLabel: '도움말 텍스트',
  disabled: false,
  isPositive: true,
  isNegative: false,
}
