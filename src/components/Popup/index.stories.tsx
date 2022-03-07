import React from 'react';
import { Story, Meta } from '@storybook/react';
import Popup, { Props } from './index';

export default {
  title: 'Components/Popup',
  component: Popup,
} as Meta;

const Template: Story<Props> = (args) => (
  <Popup {...args}>
    <p>Popup content</p>
    <p>Line two</p>
  </Popup>
);

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
