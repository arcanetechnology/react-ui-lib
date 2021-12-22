import React from 'react';
import { Story, Meta } from '@storybook/react';
import ArcaneLogo, { Props } from './index';
import './index.stories.css';

export default {
  title: 'Components/ArcaneLogo',
  component: ArcaneLogo
} as Meta;

const Template: Story<Props> = (args) => <ArcaneLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  onDark: false
};

const DarkTemplate: Story<Props> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '400px', height: '400px', backgroundColor: 'black' }}>
    <ArcaneLogo {...args} />
  </div>
);

export const OnDarkBackground = DarkTemplate.bind({});
OnDarkBackground.args = {
  onDark: true
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  onDark: false,
  className: 'custom-logo-styles'
};
