import { act, fireEvent, render, screen } from '@testing-library/react';
import ArcaneUIProvider from '../../ArcaneUIProvider';
import TopBar from './index';

describe('TopBar', () => {
  test('renders the TopBar with a link to the homeUrl', async () => {
    const { container } = render(
      <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
        <TopBar
          homeUrl="/home"
          origin="https://arcane.no"
        />
      </ArcaneUIProvider>
    );

    const link = container.querySelector('a[href="/home"]');
    expect(link).toBeTruthy();
  });

  test('renders the TopBar with all menu items', async () => {
    const { container } = render(
      <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
        <TopBar
          homeUrl="/home"
          origin="https://arcane.no"
        />
      </ArcaneUIProvider>
    );

    const menu = container.querySelector('[data-testid="menu"]');
    expect(menu).toBeTruthy();

    expect(menu.querySelector('a[href="https://arcane.no/research"]')).toBeTruthy();
    expect(menu.querySelector('a[href="https://arcane.no/trade"]')).toBeTruthy();
    expect(menu.querySelector('a[href="https://arcane.no/invest"]')).toBeTruthy();
  });

  test('renders the menu when the grid icon is clicked', async () => {
    const { container } = render(
      <ArcaneUIProvider LinkComponent={({...props}) => (<a {...props} />)}>
        <TopBar
          homeUrl="/home"
          origin="https://arcane.no"
        />
      </ArcaneUIProvider>
    );

    const gridIcon = container.querySelector('[data-testid="grid"]');
    expect(gridIcon.classList.contains('open')).toBeFalsy();

    fireEvent.click(gridIcon);
    expect(gridIcon.classList.contains('open')).toBeTruthy();
  });
});
