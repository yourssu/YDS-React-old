import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PasswordTextField } from './TextField'

export default {
  title: 'Atom/TextField/PasswordTextField',
  component: PasswordTextField,
  argTypes: {},
} as ComponentMeta<typeof PasswordTextField>

const Template: ComponentStory<typeof PasswordTextField> = (args) => {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const newArgs = { ...args, value, onChange }
  return <PasswordTextField {...newArgs} />
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '플레이스 홀더',
  disabled: false,
  isPositive: true,
  isNegative: false,
}
