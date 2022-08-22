import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography as Typo } from './typo'

const StyledTypo = styled.div<{ typo: Typo }>`
${({ typo }) => getTypoStyle(typo)}
`

const Typography = ({ typo, children }: 
    { typo: Typo, children: React.ReactNode }) => {
return <StyledTypo typo={typo}>{children}</StyledTypo>
}


export default {
  title: 'Foundation/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => {
  return (
    <div style={{ width: '400px' }}>
      <Typography {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  typo: Typo.Body1,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Body2 = Template.bind({})
Body2.args = {
  typo: Typo.Body2,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Button0 = Template.bind({})
Button0.args = {
  typo: Typo.Button0,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Button1 = Template.bind({})
Button1.args = {
  typo: Typo.Button1,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Button2 = Template.bind({})
Button2.args = {
  typo: Typo.Button2,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Button3 = Template.bind({})
Button3.args = {
  typo: Typo.Button3,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Button4 = Template.bind({})
Button4.args = {
  typo: Typo.Button4,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Caption0 = Template.bind({})
Caption0.args = {
  typo: Typo.Caption0,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Caption1 = Template.bind({})
Caption1.args = {
  typo: Typo.Caption1,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Caption2 = Template.bind({})
Caption2.args = {
  typo: Typo.Caption2,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Display1 = Template.bind({})
Display1.args = {
  typo: Typo.Display1,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Display2 = Template.bind({})
Display2.args = {
  typo: Typo.Display2,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
  typo: Typo.Subtitle1,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
  typo: Typo.Subtitle2,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Subtitle3 = Template.bind({})
Subtitle3.args = {
  typo: Typo.Subtitle3,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Title1 = Template.bind({})
Title1.args = {
  typo: Typo.Title1,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}

export const Title2 = Template.bind({})
Title2.args = {
  typo: Typo.Title2,
  children: '다람쥐 헌 쳇바퀴에 타고파',
}


