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
}

/**
 * Hero section.
 */
export default function PageHero({ title, subtitle }: Props) {
  return (
    <div
      className={styles.pageHero}
      data-testid="Hero"
      data-scroll
    >
      <h1 className={styles.title}>{title}</h1>

      {subtitle && (
        <div className={styles.subtitle}>{subtitle}</div>
      )}
    </div>
  );
}
