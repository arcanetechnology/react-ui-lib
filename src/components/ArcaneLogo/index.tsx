import cn from 'classnames';
import useLinkComponent from '../../hooks/useLinkComponent';
import ArcaneLogoSVG from '../../svg/ArcaneLogo';
import styles from './index.module.scss';

export interface Props {
  /**
   * App home page URL, used to redirect when the user clicks on the logo.
   */
  homeUrl: string;
  /**
   * Indicates if the logo would be displayed on a dark background.
   */
  onDark?: boolean;
  /**
   * App-specific logo displayed next to the Arcane one.
   */
  appLogo?: React.ReactNode;
  /**
   * Styles applied to the main Arcane logo.
   */
  logoClassName?: string;
}

export default function ArcaneLogo({ homeUrl, onDark, appLogo, logoClassName }: Props) {
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent href={homeUrl} className={cn(styles.logoLink, { [styles.withAppLogo]: !!appLogo })}>
      <div className={cn(styles.logo, { [logoClassName as string]: !!logoClassName, [styles.onDark]: onDark })}>
        <ArcaneLogoSVG />
      </div>
      {appLogo && (
        <div className={styles.appLogo}>
          {appLogo}
        </div>
      )}
    </LinkComponent>
  );
}
