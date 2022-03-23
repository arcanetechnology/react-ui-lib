import { render, screen } from '@testing-library/react';
import FeatureList from './index';

describe('FeatureList', () => {
  test('renders the given title', () => {
    render((
      <FeatureList
        content={{
          itemsCollection: [
            {
              title: 'Learn',
              text: {}
            },
            {
              title: 'Invest',
              text: {}
            }
          ]
        }}
      />
    ));

    expect(screen.getByText(/Learn/i)).toBeInTheDocument();
    expect(screen.getByText(/Invest/i)).toBeInTheDocument();
  });

  test('renders the given content', () => {
    render((
      <FeatureList
        content={{
          itemsCollection: [
            {
              title: 'Learn',
              content: (
                <div>Go from beginner to expert</div>
              )
            }
          ]
        }}
      />
    ));

    expect(screen.getByText(/Go from beginner to expert/i)).toBeInTheDocument();
  });
});
