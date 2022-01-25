import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignInSignOutButton, { Props } from './SignInSignOutButton';
import AuthProvider from './AuthProvider';

export default {
  title: 'Authentication/SignInSignOutButton',
  component: SignInSignOutButton
} as Meta;

const Template: Story<Props> = (args) => (
  <AuthProvider>
    <p>&lt;SignInSignOutButton&gt;: In order to work, the Platform App should be deployed on the same domain as the application hosting this button</p>
    <SignInSignOutButton />
  </AuthProvider>
);

export const Default = Template.bind({});

Default.args = {};
