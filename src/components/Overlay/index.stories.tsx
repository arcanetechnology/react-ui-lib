import React from 'react';
import { Story, Meta } from '@storybook/react';
import Overlay, { Props } from './index';

export default {
  title: 'Components/Overlay',
  component: Overlay,
} as Meta;

const Template: Story<Props> = (args) => (
  <Overlay {...args}>
    <p>Overlay content</p>
    <p>Line two</p>
  </Overlay>
);

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
