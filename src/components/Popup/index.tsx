import React from 'react';
import cn from 'classnames';
import Overlay from '../../components/Overlay';
import styles from './index.module.scss';

export interface Props {
  /**
   * Indicates if the popup is open.
   * <Popup /> with isOpen={false} is effectively not rendered.
   */
  isOpen: boolean;
  /**
   * Indicates if the content of the popup is fullscreen.
   */
  fullscreen: boolean;
  /**
   * Popup content.
   */
  children: React.ReactNode;
}

/**
 * An agressive popup blocking the user interaction.
 */
export default function Popup({ isOpen, fullscreen, children }: Props) {
  return (
    <Overlay isOpen={isOpen}>
      <div className={styles.popupOverlay}>
        <div className={cn(styles.popup, { [styles.fullscreen as string] : fullscreen })}>
          {children}
        </div>
      </div>
    </Overlay>
  );
}
