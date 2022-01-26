import React from 'react';
import { Story, Meta } from '@storybook/react';
import Footer, { Props } from './index';
import ResearchText from '../ArcaneLogo/ResearchText';

export default {
  title: 'Components/Footer',
  component: Footer
} as Meta;

const Template: Story<Props> = (args) => (
  <Footer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  homeUrl: '/',
  origin: 'https://arcane.no',
  activeLink: Footer.LINKS.PLATFORM
};

Default.parameters = {
  layout: 'fullscreen',
}

export const WithAppLogo = Template.bind({});

WithAppLogo.args = {
  homeUrl: '/',
  origin: 'https://arcane.no',
  activeLink: Footer.LINKS.PLATFORM,
  appLogo: <ResearchText fill="#FFF" />
};

WithAppLogo.parameters = {
  layout: 'fullscreen',
}
