import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Component/Tooltip',
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div
    style={{ backgroundColor: '#c4c4c4eb', width: '374px', height: '400px', paddingTop: '16px', paddingBottom: '16px' }}
  >
    <Tooltip {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  arrowPosition: 'top',
  arrowAlign: 'start',
  children: '홈에서 실시간 피드를 확인해보세요!',
}
