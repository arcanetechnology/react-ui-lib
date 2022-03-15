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

export const FullScreen = Template.bind({});

FullScreen.args = {
  isOpen: true,
  fullscreen: true
};

const TemplateLongContent: Story<Props> = (args) => (
  <Popup {...args}>
    {Array(100).fill(null).map((_, index) => (
      <p key={index}>line {index}</p>
    ))}
  </Popup>
);

export const FullScreenScrollable = TemplateLongContent.bind({});

FullScreenScrollable.args = {
  isOpen: true,
  fullscreen: true
};

export const WithCloseIcon = Template.bind({});

WithCloseIcon.args = {
  isOpen: true,
  fullscreen: true,
  showCloseIcon: true
};
