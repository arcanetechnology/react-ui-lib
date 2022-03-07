import React from 'react';
import { Story, Meta } from '@storybook/react';
import CookiePopup, { Props } from './index';

export default {
  title: 'Components/CookiePopup',
  component: CookiePopup,
} as Meta;

const Template: Story<Props> = (args) => (
  <CookiePopup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isOpen: true
};
