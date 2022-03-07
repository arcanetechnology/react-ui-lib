import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ArcaneUIProvider from '../../ArcaneUIProvider';
import Popup from './index';

describe('Popup', () => {
  test('renders the children inside the Popup', async () => {
    const { getByText } = render(
      <ArcaneUIProvider
        PortalComponent={({ children }) => (
          ReactDOM.createPortal(children, document.body)
        )}
      >
        <Popup isOpen={true}>
          <p>Popup content</p>
        </Popup>
      </ArcaneUIProvider>
    );

    expect(getByText('Popup content')).toBeInTheDocument();
  });
});
