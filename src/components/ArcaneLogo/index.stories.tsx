import React from 'react';
import { Story, Meta } from '@storybook/react';
import ArcaneLogo, { Props } from './index';
import './index.stories.css';
import ResearchText from './ResearchText';

export default {
  title: 'Components/ArcaneLogo',
  component: ArcaneLogo
} as Meta;

const Template: Story<Props> = (args) => <ArcaneLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  homeUrl: '/',
  onDark: false
};

const DarkTemplate: Story<Props> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px', backgroundColor: 'black' }}>
    <ArcaneLogo {...args} />
  </div>
);

export const OnDarkBackground = DarkTemplate.bind({});
OnDarkBackground.args = {
  homeUrl: '/',
  onDark: true
};

const CustomStylesTemplate: Story<Props> = (args) => (
  <div id="app">
    <ArcaneLogo {...args} />
  </div>
);

export const CustomStyles = CustomStylesTemplate.bind({});
CustomStyles.args = {
  homeUrl: '/',
  onDark: false,
  logoClassName: 'custom-logo-styles'
};

export const WithAppLogo = Template.bind({});
WithAppLogo.args = {
  homeUrl: '/',
  onDark: false,
  appLogo: <ResearchText />
};

export const WithAppLogoOnDarkBackground = DarkTemplate.bind({});
WithAppLogoOnDarkBackground.args = {
  homeUrl: '/',
  onDark: true,
  appLogo: <ResearchText fill="#FFF" />
};
