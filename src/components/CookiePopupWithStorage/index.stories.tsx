import React from 'react';
import { Story, Meta } from '@storybook/react';
import CookiePopupWithStorage, { Props } from './index';

function GoogleAnalyticsComponent({ allowAnalytics, firebaseMeasurementId }) {
  return (
    <>
      <div>This is an implementation of the GoogleAnalyticsComponent that is rendered after the user has made their choice</div>
      <div>firebaseMeasurementId: {firebaseMeasurementId}</div>
      <div>allowAnalytics: {allowAnalytics ? 'YES' : 'NO'}</div>
    </>
  )
}

export default {
  title: 'Components/CookiePopupWithStorage',
  component: CookiePopupWithStorage,
} as Meta;

const Template: Story<Props> = (args) => (
  <CookiePopupWithStorage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  firebaseMeasurementId: 'MOCK',
  GoogleAnalyticsComponent
};
