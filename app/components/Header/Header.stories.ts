import React from 'react';
import { Meta, Story } from '@storybook/react';
import Header, { HeaderProps } from './Header'; // Update the path

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: 'light',
  setMode: () => {},
};
