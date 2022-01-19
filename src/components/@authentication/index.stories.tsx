import React from 'react';
import { Story, Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider, { Props } from './AuthProvider';
import useUser from './useUser';
import SignInSignOutButton from './SignInSignOutButton';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />

      <div style={{ marginTop: '30px' }}>
        <p>&lt;SignInSignOutButton&gt;: In order to work, the Platform App should be deployed on the same domain as the application hosting this button</p>
        <SignInSignOutButton />
      </div>
    </AuthProvider>
  </QueryClientProvider>
);

export const Default = Template.bind({});

Default.args = {};
