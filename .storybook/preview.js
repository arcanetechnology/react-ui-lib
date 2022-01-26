import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import ArcaneUIProvider from '../src/ArcaneUIProvider';
import '../src/global.scss';

import results from './.jest-test-results.json';

import { initializeApp } from 'firebase/app';

if (!window.firebaseInitialized) {
  initializeApp({
    apiKey: 'MOCK_KEY'
  });

  window.firebaseInitialized = true;
}

addDecorator(
  withTests({
    results,
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}

export const decorators = [
  (Story) => (
    <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
      <Story />
    </ArcaneUIProvider>
  ),
];