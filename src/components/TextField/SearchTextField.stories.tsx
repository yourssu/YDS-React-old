import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchTextField } from './TextField'

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
  return (
    <div style={{ width: '350px' }}>
      <SearchTextField {...newArgs} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '플레이스 홀더',
  disabled: false,
  isPositive: true,
  isNegative: false,
}
