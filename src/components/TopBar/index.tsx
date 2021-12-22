import { useState } from 'react';
import styles from './index.module.scss';
import ClickableIcon from '../../components/ClickableIcon';
import ArcaneLogo from '../../components/ArcaneLogo';
import useScroll from '../../hooks/useScroll';
import cn from 'classnames';
import GridMenu from '../../svg/GridMenu';
// import SignInSignOutButton from 'components/SignInSignOutButton';

const STICKY_THRESHOLD = 136;

export interface Props {
  onMenuOpen: () => void;
}

export default function TopBar({ onMenuOpen }: Props) {
  const [isSticky, setIsSticky] = useState(false);

  useScroll((offset) => {
    setIsSticky((state) => (
      state === false
        ? offset > STICKY_THRESHOLD
        : offset > 0
    ));
  });

  return (
    <>
      {isSticky && (
        <div className={styles.fakeTopBar} />
      )}

      <div className={cn(styles.topBar, { [styles.sticky]: isSticky })} data-testid="topBar">
        <ArcaneLogo className={styles.logo} />

        {/* <SignInSignOutButton className={styles.button} /> */}

        <ClickableIcon className={styles.menuWrapper} onClick={onMenuOpen} data-testid="grid">
          <GridMenu />
        </ClickableIcon>
      </div>
    </>
  );
}
