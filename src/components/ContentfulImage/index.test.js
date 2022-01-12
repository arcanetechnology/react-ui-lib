import { render } from '@testing-library/react';
import ContentfulImage from './index';
import imageData from './image-data.json';

describe('ContentfulImage', () => {
  test('renders the image correctly', async () => {
    const { container } = render(
      <ContentfulImage image={imageData} />
    );

    const element = await container.querySelector('img');
    expect(element).toBeTruthy();
    expect(element.src).toBe(imageData.url);
  });
});
