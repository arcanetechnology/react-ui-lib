import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { Props } from './index';
import DownloadDark from '../../svg/DownloadDark';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onDark: { control: 'boolean', defaultValue: false },
    small: { control: 'boolean', defaultValue: false },
    secondary: { control: 'boolean', defaultValue: false },
    arrowRight: { control: 'boolean', defaultValue: false }
  }
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'My Button',
  onDark: false
};

const DarkBackgroundTemplate: Story<Props> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: '90vw', height: '90vh' }}>
    <Button {...args} />
  </div>
);

export const DarkBackground = DarkBackgroundTemplate.bind({});

DarkBackground.args = {
  children: 'Button on dark',
  onDark: true
};

export const Clickable = Template.bind({});

Clickable.args = {
  children: 'Click me!',
  onDark: false,
  onClick: () => { alert('Button is clicked!'); }
};

export const SecondaryWithCustomIcon = Template.bind({});

SecondaryWithCustomIcon.args = {
  children: 'Download',
  secondary: true,
  iconRight: <DownloadDark />,
  onDark: false,
};