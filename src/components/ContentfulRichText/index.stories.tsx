import React from 'react';
import { Story, Meta } from '@storybook/react';
import ContentfulRichText, { Props } from './index';
import textData from './text-data.json';
import './index.stories.css';

export default {
  title: 'Components/ContentfulRichText',
  component: ContentfulRichText
} as Meta;

const Template: Story<Props> = (args) => <ContentfulRichText {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: textData
};

export const WithCustomClass = Template.bind({});

WithCustomClass.args = {
  text: textData,
  className: 'customRichText'
};
