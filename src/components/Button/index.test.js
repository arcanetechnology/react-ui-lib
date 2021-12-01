import { render } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  test('renders the button and clicks on it', async () => {
    const fn = jest.fn();

    const component = render(
      <Button onClick={fn}>
        Click me
      </Button>
    );

    const element = await component.findByText('Click me');
    expect(element).toBeTruthy();

    element.click();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
