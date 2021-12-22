import { render } from '@testing-library/react';
import ArcaneUIProvider from '../../ArcaneUIProvider';
import Clickable from './index';

describe('Clickable', () => {
  test('renders an <a> html element when target is provided', async () => {
    const component = render(
      <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
        <Clickable href="/page-link" target="_blank">
          Go to page
        </Clickable>
      </ArcaneUIProvider>
    );

    const element = await component.findByText('Go to page');
    expect(element).toBeTruthy();
    expect(element.outerHTML).toMatch('<a href="/page-link" target="_blank">Go to page</a>');
  });

  test('renders an <a> html element when target is not provided', async () => {
    const component = render(
      <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
        <Clickable href="/page-link">
          Go to page
        </Clickable>
      </ArcaneUIProvider>
    );

    const element = await component.findByText('Go to page');
    expect(element).toBeTruthy();
    expect(element.outerHTML).toMatch('<a href="/page-link">Go to page</a>');
  });

  test('renders an <button> html element when href is not provided', async () => {
    const component = render(
      <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
        <Clickable>
          Click me
        </Clickable>
      </ArcaneUIProvider>
    );

    const element = await component.findByText('Click me');
    expect(element).toBeTruthy();
    expect(element.outerHTML).toMatch('<button type="button">Click me</button>');
  });
});
