import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Props } from './index';

function Component({ ...props }) {
  return (
    <div>
      <p>This component is not rendered in order to avoid adding real Google Analytics to this page.</p>
      <p>Use together with &lt;CookiePopupWithStorage&gt;</p>
    </div>
  );
}

export default {
  title: 'NextJS/NextGoogleAnalytics',
  component: Component,
} as Meta;

const Template: Story<Props> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});

Default.args = {};
