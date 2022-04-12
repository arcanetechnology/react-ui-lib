import styles from './index.module.scss';

export interface Props {
  /**
   * Hero title.
   */
  title: string;
  /**
   * Hero subtitle.
   */
  subtitle?: string;
  /**
   * Prevents the scroll-out animation.
   */
  noScrollAnimation?: boolean;
}

/**
 * Hero section.
 */
export default function PageHero({ title, subtitle, noScrollAnimation }: Props) {
  return (
    <div
      className={styles.pageHero}
      data-testid="Hero"
      {...(noScrollAnimation ? {} : { 'data-scroll': true })}
    >
      <h1 className={styles.title}>{title}</h1>

      {subtitle && (
        <div className={styles.subtitle}>{subtitle}</div>
      )}
    </div>
  );
}
