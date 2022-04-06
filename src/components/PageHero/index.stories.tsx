import React from 'react';
import { Story, Meta } from '@storybook/react';
import PageHero, { Props } from './index';

export default {
  title: 'Components/PageHero',
  component: PageHero
} as Meta;

const Template: Story<Props> = (args) => <PageHero {...args} />;

export const WithTitle = Template.bind({});

WithTitle.args = {
  title: 'Build wealth in crypto with confidence.'
};

export const WithTitleAndSubtitle = Template.bind({});

WithTitleAndSubtitle.args = {
  title: 'Build wealth in crypto with confidence.',
  subtitle: 'Build generational wealth with our actively managed crypto fund.'
};
