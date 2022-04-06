import { render, screen } from '@testing-library/react';
import Hero from './index';

test('renders the given text', () => {
  render((
    <Hero
      title="Build wealth in crypto"
      subtitle="with us"
    />
  ));

  expect(screen.getByText(/Build wealth in crypto/i)).toBeInTheDocument();
  expect(screen.getByText(/with us/i)).toBeInTheDocument();
});
