import React from 'react';
import styles from './index.module.scss';

export interface Props {
  /**
   * Section content.
   */
  children: React.ReactNode;
}

/**
 * A simple component that wraps other page components and encapsulate spacing between them.
 */
export default function PageSectionWrapper({ children }: Props) {
  return (
    <div className={styles.sectionWrapper}>
      {children}
    </div>
  );
}
