import { render } from '@testing-library/react';
import PageBackground from './index';

describe('PageBackground', () => {
  test('renders the provided content', async () => {
    const component = render(
      <PageBackground className="page">
        Page content
      </PageBackground>
    );

    const page = component.container.querySelector('.page');
    expect(page.innerHTML).toMatch('Page content');
  });
});
