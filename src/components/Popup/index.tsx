import React from 'react';
import Overlay from '../../components/Overlay';
import styles from './index.module.scss';

export interface Props {
  /**
   * Indicates if the popup is open.
   * <Popup /> with isOpen={false} is effectively not rendered.
   */
  isOpen: boolean;
  /**
   * Popup content.
   */
  children: React.ReactNode;
}

/**
 * An agressive popup blocking the user interaction.
 */
export default function Popup({ isOpen, children }: Props) {
  return (
    <Overlay isOpen={isOpen}>
      <div className={styles.popupOverlay}>
        <div className={styles.popup}>
          {children}
        </div>
      </div>
    </Overlay>
  );
}
