import React from 'react';
import { Story, Meta } from '@storybook/react';
import AuthProvider, { Props } from './AuthProvider';
import useUser from './useUser';

export default {
  title: 'Authentication/AuthProvider',
  component: AuthProvider
} as Meta;

const App = () => {
  const user = useUser();

  return (
    <div>
      <p>This is an app wrapped inside &lt;AuthProvider&gt; that can use <code>useUser()</code>.</p>
      <p>Current User: <code>{JSON.stringify(user)}</code></p>
    </div>
  );
};

const Template: Story<Props> = (args) => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export const Default = Template.bind({});

Default.args = {};
