import React from 'react';
import { Story, Meta } from '@storybook/react';
import PageBackground, { Props } from './index';

export default {
  title: 'Components/PageBackground',
  component: PageBackground
} as Meta;

const Template: Story<Props> = (args) => <PageBackground {...args} />;

export const LongPage = Template.bind({});

LongPage.args = {
  children: (
    <div style={{ width: '100%' }}>
      <p>This is the page content.</p>
      <p>Scroll down to see the various background images on the left and right of the page.</p>
      <p>You can also resize the browser to tablet and mobile version to see how the background images change.</p>
      {Array(251).fill(null).map((_, i) => (
        <p>{i}</p>
      ))}
    </div>
  )
};
LongPage.parameters = {
  layout: 'fullscreen',
}
