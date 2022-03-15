import React from 'react';
import cn from 'classnames';
import Overlay from '../../components/Overlay';
import styles from './index.module.scss';
import ClickableIcon from '../ClickableIcon';
import Close from '../../svg/Close';

export interface Props {
  /**
   * Indicates if the popup is open.
   * <Popup /> with isOpen={false} is effectively not rendered.
   */
  isOpen: boolean;
  /**
   * An optional className for the overlay.
   */
  overlayClassName?: string;
  /**
   * Indicates if the content of the popup is fullscreen.
   */
  fullscreen?: boolean;
  /**
   * If true, displays a close icon and calls the onClose function when clicked by the user.
   */
  showCloseIcon?: boolean;
  /**
   * Callback called when the close icon is clicked.
   */
  onClose?: () => void;
  /**
   * Popup content.
   */
  children: React.ReactNode;
}

/**
 * An agressive popup blocking the user interaction.
 */
export default function Popup({ isOpen, overlayClassName, fullscreen, showCloseIcon, onClose, children }: Props) {
  return (
    <Overlay className={overlayClassName} isOpen={isOpen}>
      <div className={styles.popupOverlay}>
        <div className={cn(styles.popup, { [styles.fullscreen as string] : fullscreen })}>
          {showCloseIcon && (
            <ClickableIcon className={styles.close} onClick={onClose}>
              <Close />
            </ClickableIcon>
          )}
          {children}
        </div>
      </div>
    </Overlay>
  );
}
