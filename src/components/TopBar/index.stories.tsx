import React from 'react';
import { Story, Meta } from '@storybook/react';
import TopBar, { Props } from './index';
import ResearchText from '../ArcaneLogo/ResearchText';

export default {
  title: 'Components/TopBar',
  component: TopBar
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ width: '100%' }}>
    <TopBar {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  homeUrl: '/',
  origin: 'https://arcane.no'
};
Default.parameters = {
  layout: 'fullscreen',
}

const StickyTopBarTemplate: Story<Props> = (args) => (
  <div style={{ width: '100%' }}>
    <TopBar {...args} />

    <div style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.05)' }}>
      <p>This is a long component below the TopBar</p>
      <p>Scroll this page to see the sticky top bar in action</p>
      {Array(100).fill(null).map((_, i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  </div>
);

export const StickyTopBar = StickyTopBarTemplate.bind({});

StickyTopBar.args = {
  homeUrl: '/',
  origin: 'https://arcane.no'
};
StickyTopBar.parameters = {
  layout: 'fullscreen',
}

export const WithAppLogo = Template.bind({});

WithAppLogo.args = {
  homeUrl: '/',
  origin: 'https://arcane.no',
  appLogo: <ResearchText />

};
WithAppLogo.parameters = {
  layout: 'fullscreen',
}
