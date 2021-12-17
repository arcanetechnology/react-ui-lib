import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export interface Props {
  /**
   * Page content
   */
  children: React.ReactNode;
  /**
   * CSS class for additional styling
   */
  className?: string;
}

/**
 * A wrapper component for pages that displays backgrounds.
 */
export default function PageBackground({ children, className }: Props) {
  return (
    <div className={cn(styles.pageBackground, { [className as string]: !!className })}>
      {children}
    </div>
  );
}
