import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SuffixTextField } from './TextField'

export default {
  title: 'Atom/TextField/SuffixTextField',
  component: SuffixTextField,
  argTypes: {},
} as ComponentMeta<typeof SuffixTextField>

const Template: ComponentStory<typeof SuffixTextField> = (args) => {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const newArgs = { ...args, value, onChange }
  return <SuffixTextField {...newArgs} />
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '플레이스 홀더',
  helperLabel: '도움말 텍스트',
  suffix: '@soongsil.ac.kr',
  disabled: false,
  isPositive: true,
  isNegative: false,
}
