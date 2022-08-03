import React, { useState } from 'react';
import styles from './index.module.scss';
import ArcaneLogo from '../../components/ArcaneLogo';
import useScroll from '../../hooks/useScroll';
import cn from 'classnames';
import GridMenu from '../../svg/GridMenu';
import Menu from './Menu';
import SignInSignOutButton from '../@authentication/SignInSignOutButton';

const STICKY_THRESHOLD = 136;

const ITEMS = {
  Platform: 'Platform',
  Research: 'Research',
  Trade: 'Trade',
  Invest: 'Invest'
}

export interface Props {
  /**
   * App home page URL, used to redirect when the user clicks on the logo.
   */
  homeUrl: string;
  /**
   * URL origin, used to apply relative links to, e.g. https://arcane.no
   */
  origin: string;
  /**
   * The current active menu item.
   * All options available inside the TopBar.ITEMS object.
   */
  activeItem?: keyof typeof ITEMS;
  /**
   * App-specific logo displayed next to the Arcane one.
   */
  appLogo?: React.ReactNode;
  /**
   * If true, hides the SignInSignOutButton.
   */
  noAuthButton?: boolean;
  /**
   * Indicates if the authentication should be performed with a redirect instead of using a pop-up. Not recommended.
   */
  authWithRedirect?: boolean;
}

/**
 * Application top bar with Arcane logo and grid menu.
 */
export default function TopBar({ homeUrl, origin, activeItem, appLogo, noAuthButton, authWithRedirect }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useScroll((offset) => {
    setIsSticky(offset > 0);
    setIsSmall(offset > STICKY_THRESHOLD);
  });

  const toggleMenu = (e: any) => {
    e.stopPropagation();
    setIsMenuOpen((state) => !state);
  }

  const onGridKeyDown = (e: any) => {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
      toggleMenu(e);
    }
  }

  return (
    <>
      {isSticky && (
        <div className={styles.fakeTopBar} />
      )}

      <div className={cn(styles.topBar, { [styles.sticky]: isSticky, [styles.isSmall]: isSmall })} data-testid="topBar">
        <div className={styles.topBarContent}>
          <ArcaneLogo homeUrl={homeUrl} appLogo={appLogo} logoClassName={cn(styles.logo, { [styles.withAppLogo]: !!appLogo })} />

          <div
            role="button"
            tabIndex={0}
            className={cn(styles.menuWrapper, { [styles.open]: isMenuOpen, [styles.noAuthButton]: noAuthButton })}
            onClick={toggleMenu}
            onKeyDown={onGridKeyDown}
            data-testid="grid"
          >
            <GridMenu />

            <div className={styles.menu} data-grid-menu={true}>
              <Menu
                origin={origin}
                isOpen={isMenuOpen}
                onClose={() => { setIsMenuOpen(false); }}
                activeItem={activeItem}
              />

              {!noAuthButton && (
                <SignInSignOutButton authWithRedirect={authWithRedirect} className={styles.authInGrid} />
              )}
            </div>
          </div>

          {!noAuthButton && (
            <SignInSignOutButton authWithRedirect={authWithRedirect} className={styles.authButton} />
          )}
        </div>
      </div>
    </>
  );
}

TopBar.ITEMS = ITEMS;
