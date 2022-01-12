import React from 'react';
import { Story, Meta } from '@storybook/react';
import ContentfulImage, { Props } from './index';
import imageData from './image-data.json';

export default {
  title: 'Components/ContentfulImage',
  component: ContentfulImage,
  argTypes: {
    w: { control: 'number' },
    showDescription: { control: 'boolean', defaultValue: true }
  }
} as Meta;

const Template: Story<Props> = (args) => <ContentfulImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: imageData
};

export const FixedWidth = Template.bind({});

FixedWidth.args = {
  image: imageData,
  w: 300
};
