import React from 'react';
import { Story, Meta } from '@storybook/react';
import ScrollOutProvider, { Props } from './index';
import PageHero from '../PageHero';

export default {
  title: 'Page/ScrollOutProvider',
  component: ScrollOutProvider
} as Meta;

const Template: Story<Props> = (args) => <ScrollOutProvider {...args} />;

export const LongPage = Template.bind({});

LongPage.args = {
  children: (
    <div style={{ width: '100%' }}>
      <PageHero title="Scroll the page down and up or just refresh the page to experience the effect." />
      {Array(251).fill(null).map((_, i) => (
        <p data-scroll key={i} style={{ marginTop: '12px' }}>{i}</p>
      ))}
      <PageHero title="The end." />
    </div>
  )
};
