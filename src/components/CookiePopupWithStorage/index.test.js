import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ArcaneUIProvider from '../../ArcaneUIProvider';
import CookiePopupWithStorage from './index';

function GoogleAnalyticsComponent({ allowAnalytics, firebaseMeasurementId }) {
  return (
    <div>GoogleAnalyticsComponent</div>
  )
}

describe('CookiePopupWithStorage', () => {
  test('first renders the CookiePopup, then when the user selects an answer, renders the GoogleAnalyticsComponent', async () => {
    const component = render(
      <ArcaneUIProvider
        PortalComponent={({ children }) => (
          ReactDOM.createPortal(children, document.body)
        )}
      >
        <CookiePopupWithStorage firebaseMeasurementId="MOCK" GoogleAnalyticsComponent={GoogleAnalyticsComponent} />
      </ArcaneUIProvider>
    );

    expect(() => component.getByText('GoogleAnalyticsComponent')).toThrow();

    expect(component.getByText('Cookie Settings')).toBeInTheDocument();
    expect(component.getByText('Save settings')).toBeInTheDocument();

    const saveButton = component.getByText('Save settings');
    saveButton.click();

    expect(JSON.parse(localStorage.cookieChoice).productDevCookie === 'YES').toBeTruthy();
    delete localStorage.cookieChoice;

    expect(component.getByText('GoogleAnalyticsComponent')).toBeInTheDocument();
  });
});
