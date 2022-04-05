import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GroundLineIcon } from '../../icons'
import { Badge } from './Badge'
import { css } from '@emotion/react'

export default {
  title: 'Atom/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'WithIcon',
  color: 'green',
  icon: true,
  leftIcon: (
    <div style={{ width: '16px', height: '16px' }}>
      <GroundLineIcon />
    </div>
  ),
}

export const Text = Template.bind({})
Text.args = {
  title: 'Text',
  icon: false,
  color: 'auqa',
}
