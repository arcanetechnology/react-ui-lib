import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ArcaneUIProvider from '../../ArcaneUIProvider';
import Overlay from './index';

describe('Overlay', () => {
  test('renders the children inside the Overlay', async () => {
    const { getByText } = render(
      <ArcaneUIProvider
        PortalComponent={({ children }) => (
          ReactDOM.createPortal(children, document.body)
        )}
      >
        <Overlay isOpen={true}>
          <p>Overlay content</p>
        </Overlay>
      </ArcaneUIProvider>
    );

    expect(getByText('Overlay content')).toBeInTheDocument();
  });
});
