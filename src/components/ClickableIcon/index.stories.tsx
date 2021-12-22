import React from 'react';
import { Story, Meta } from '@storybook/react';
import ClickableIcon, { Props } from './index';
import LinkedIn from '../../svg/LinkedIn';
import './index.stories.css';

export default {
  title: 'Components/ClickableIcon',
  component: ClickableIcon,
} as Meta;

const Template: Story<Props> = (args) => (
  <ClickableIcon {...args}>
    <LinkedIn />
  </ClickableIcon>
);

export const SmallIcon = Template.bind({});

SmallIcon.args = {
  className: 'linkedin-icon',
  onClick: () => { alert('Icon is clicked'); }
};
