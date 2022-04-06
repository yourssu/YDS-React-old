import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileImageView } from './ProfileImageView';
import ppussung15 from '../../../static/ppussung15.png';

export default {
  title: 'Atom/ProfileImageView',
  component: ProfileImageView,
  argTypes: {},
} as ComponentMeta<typeof ProfileImageView>;

const Template: ComponentStory<typeof ProfileImageView> = (args) => <ProfileImageView {...args} src={ppussung15} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
};