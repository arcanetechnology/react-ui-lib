import React from 'react';
import { Story, Meta } from '@storybook/react';
import Footer, { LINKS, Props } from './index';

export default {
  title: 'Components/Footer',
  component: Footer
} as Meta;

const Template: Story<Props> = (args) => (
  <Footer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  homeUrl: 'https://arcane.no',
  origin: 'https://arcane.no',
  activeLink: Footer.LINKS.PLATFORM
};

Default.parameters = {
  layout: 'fullscreen',
}
