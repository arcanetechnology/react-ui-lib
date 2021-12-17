import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import ArrowRight from '../../svg/ArrowRight';

export interface Props {
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * CSS class for additional styling
   */
  className?: string;
  /**
   * Sets a small version of the button
   */
  small?: boolean;
  /**
   * Sets the secondary UI of the button
   */
  secondary?: boolean;
  /**
   * Indicates that the button is displayed on top of a dark background
   */
  onDark?: boolean;
  /**
   * Displays an arrow to the right of the button content
   */
  arrowRight?: boolean;
  /**
   * An icon to the right of the button content
   */
  iconRight?: React.ReactNode;
  /**
   * Additional props passed directly to the native HTML &lt;button&gt; (e.g. onClick)
   */
  [propName: string]: any;
}

export default function Button({
  children,
  className,
  small = false,
  secondary = false,
  onDark = false,
  arrowRight = false,
  iconRight,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={cn(styles.button, {
        [className as string]: !!className,
        [styles.small]: small,
        [styles.primary]: !secondary,
        [styles.secondary]: secondary,
        [styles.onLight]: !onDark,
        [styles.onDark]: onDark,
      })}
      {...props}
    >
      <>
        {children}

        {arrowRight && (
          <ArrowRight />
        )}

        {iconRight && (
          <div className={styles.iconRight}>
            {iconRight}
          </div>
        )}
      </>
    </button>
  );
}
