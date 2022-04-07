import React from 'react';
import { Story, Meta } from '@storybook/react';
import PageSectionWrapper, { Props } from './index';

export default {
  title: 'Page/PageSectionWrapper',
  component: PageSectionWrapper
} as Meta;

const Template: Story<Props> = (args) => <PageSectionWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Build wealth in crypto with confidence.'
};
