import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TabBar } from './TabBar'
import { Tab } from './Tab'

export default {
  title: 'Component/TabBar',
  component: TabBar,
  argTypes: {},
} as ComponentMeta<typeof TabBar>

/** !! */
const Template: ComponentStory<typeof TabBar> = (args) => (
  <TabBar scrollable={args.scrollable} navigation={args.navigation} onChange={args.onChange}>
    <Tab value="1" selected>
      Tab 1
    </Tab>
    <Tab value="2">Tab 2</Tab>
    <Tab value="3">Tab 3</Tab>
  </TabBar>
)

export const Scrollable = Template.bind({})
Scrollable.args = {
  scrollable: true,
  navigation: false,
}

export const ScrollableNavigation = Template.bind({})
ScrollableNavigation.args = {
  scrollable: true,
  navigation: true,
}

export const Fixed = Template.bind({})
Fixed.args = {
  scrollable: false,
  navigation: false,
}
