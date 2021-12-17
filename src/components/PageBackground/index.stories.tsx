import React from 'react';
import { Story, Meta } from '@storybook/react';
import PageBackground, { Props } from './index';

export default {
  title: 'Example/PageBackground',
  component: PageBackground
} as Meta;

const Template: Story<Props> = (args) => <PageBackground {...args} />;

export const LongPage = Template.bind({});

LongPage.args = {
  children: (
    <div style={{ width: '90vw', height: '3000px', border: '1px dashed black' }}>
      page content
    </div>
  )
};
