import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Atom/Divider',
  component: Divider,
  argTypes: {},
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <div style={{ height: '30px' }}><Divider {...args} />
</div>;

export const Horizontal = Template.bind({});
Horizontal.args = {
  thickness: 'thin',
  direction: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  thickness: 'thin',
  direction: 'vertical',
};

export const HorizontalThick = Template.bind({});
HorizontalThick.args = {
  thickness: 'thick',
  direction: 'horizontal',
};

export const VerticalThick = Template.bind({});
VerticalThick.args = {
  thickness: 'thick',
  direction: 'vertical',
};