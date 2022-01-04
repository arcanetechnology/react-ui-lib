import { useState } from 'react';
import styles from './index.module.scss';
import ArcaneLogo from '../../components/ArcaneLogo';
import useScroll from '../../hooks/useScroll';
import cn from 'classnames';
import GridMenu from '../../svg/GridMenu';
import useLinkComponent from '../../hooks/useLinkComponent';
import Menu from './Menu';
// import SignInSignOutButton from 'components/SignInSignOutButton';

const STICKY_THRESHOLD = 136;

export interface Props {
  /**
   * App home page URL, used to redirect when the user clicks on the logo
   */
  homeUrl: string;
  /**
   * URL origin, used to apply relative links to, e.g. https://arcane.no
   */
  origin: string;
  /**
   * The current active menu item
   */
  activeItem?: 'Research' | 'Trade' | 'Invest';
}

/**
 * Application top bar with Arcane logo and grid menu.
 */
export default function TopBar({ homeUrl, origin, activeItem }: Props) {
  const LinkComponent = useLinkComponent();

  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useScroll((offset) => {
    setIsSticky((state) => (
      state === false
        ? offset > STICKY_THRESHOLD
        : offset > 0
    ));
  });

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  }

  return (
    <>
      {isSticky && (
        <div className={styles.fakeTopBar} />
      )}

      <div className={cn(styles.topBar, { [styles.sticky]: isSticky })} data-testid="topBar">
        <LinkComponent href={homeUrl}>
          <ArcaneLogo className={styles.logo} />
        </LinkComponent>

        {/* <SignInSignOutButton className={styles.button} /> */}

        <button
          className={cn(styles.menuWrapper, { [styles.open]: isMenuOpen })}
          onClick={toggleMenu}
          data-testid="grid"
        >
          <GridMenu />

          <div className={cn(styles.menu)}>
            <Menu
              origin={origin}
              isOpen={isMenuOpen}
              onClose={() => { setIsMenuOpen(false); }}
              activeItem={activeItem}
            />
          </div>
        </button>
      </div>
    </>
  );
}