import React from 'react';
import { Story, Meta } from '@storybook/react';
import Clickable, { Props } from './index';

export default {
  title: 'Components/Clickable',
  component: Clickable,
} as Meta;

const Template: Story<Props> = (args) => (
  <Clickable {...args} />
);

export const WithHref = Template.bind({});

WithHref.args = {
  children: 'Link to Google',
  href: 'https://google.com',
  target: '_blank'
};

const TemplateButton: Story<Props> = (args) => (
  <Clickable {...args} />
);

export const NoHref = TemplateButton.bind({});

NoHref.args = {
  children: 'Button',
  onClick: () => { alert('click handler'); }
};
