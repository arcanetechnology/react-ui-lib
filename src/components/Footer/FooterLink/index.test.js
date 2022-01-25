import { render } from '@testing-library/react';
import FooterLink from './index';

describe('FooterLink', () => {
  test('renders the link', async () => {
    const component = render(
      <FooterLink>
        <a href="/page-link">
          Go to page
        </a>
      </FooterLink>
    );

    const element = await component.findByText('Go to page');
    expect(element).toBeTruthy();
    expect(element.href).toMatch('/page-link');
  });
});
