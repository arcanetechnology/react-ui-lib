import { render } from '@testing-library/react';
import ContentfulRichText from './index';
import textData from './text-data.json';

describe('Button', () => {
  test('renders the rich text correctly', async () => {
    const component = render(
      <ContentfulRichText text={textData} />
    );

    const element = await component.findByText('What to double-down on');
    expect(element).toBeTruthy();
  });
});
