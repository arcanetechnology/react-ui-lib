import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ArcaneUIProvider from '../../ArcaneUIProvider';
import CookiePopup from './index';

describe('CookiePopup', () => {
  test('renders the children inside the CookiePopup', async () => {
    const { getByText } = render(
      <ArcaneUIProvider
        PortalComponent={({ children }) => (
          ReactDOM.createPortal(children, document.body)
        )}
      >
        <CookiePopup />
      </ArcaneUIProvider>
    );

    expect(getByText('Cookie Settings')).toBeInTheDocument();
    expect(getByText('Allow Cookies')).toBeInTheDocument();
  });

  test('goes to the second page when the Manage Cookies button is clicked', async () => {
    const component = render(
      <ArcaneUIProvider
        PortalComponent={({ children }) => (
          ReactDOM.createPortal(children, document.body)
        )}
        LinkComponent={({ ...props }) => (
          <a {...props} />
        )}
      >
        <CookiePopup />
      </ArcaneUIProvider>
    );

    const saveButton = component.getByText('Manage Cookies');
    saveButton.click();

    expect(component.getByText('Product Development')).toBeInTheDocument();
  });
});
