import { addDecorator } from '@storybook/react';
import ReactDOM from 'react-dom';
import { withTests } from '@storybook/addon-jest';

import ArcaneUIProvider from '../src/ArcaneUIProvider';
import '../src/global.css';
import '../src/toggle.css';

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
    <ArcaneUIProvider
      LinkComponent={({...props}) => (
        <a {...props} />
      )}
      PortalComponent={({ children }) => (
        ReactDOM.createPortal(children, document.querySelector('#root'))
      )}
    >
      <Story />
    </ArcaneUIProvider>
  ),
];
