import styles from './index.module.scss';
import ArcaneLogoSVG from '../../svg/ArcaneLogo';
import cn from 'classnames';

export interface Props {
  /**
   * CSS class for additional styling
   */
  className?: string;
  /**
   * Indicates if the logo would be displayed on a dark background
   */
  onDark?: boolean;
}

/**
 * The official Arcane Logo. It defaults to 30px height on desktop / 24px on mobile.
 * To modify, add a custom className to this component.
 */
export default function ArcaneLogo({ className, onDark = false }: Props) {
  return (
    <div className={cn(styles.logo, { [className as string]: !!className, [styles.onDark]: onDark })}>
      <ArcaneLogoSVG />
    </div>
  );
}
