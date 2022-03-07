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
    expect(getByText('Save settings')).toBeInTheDocument();
  });
});
