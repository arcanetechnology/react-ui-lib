import React from 'react';
import usePreventGlobalScroll from '../../hooks/usePreventGlobalScroll';
import cn from 'classnames';
import usePortalComponent from '../../hooks/usePortalComponent';
import styles from './index.module.scss';

export interface Props {
  /**
   * Indicates if the overlay is open.
   * <Overlay /> with isOpen={false} is effectively not rendered.
   */
  isOpen: boolean;
  /**
   * An additional CSS class.
   */
  className?: string;
  /**
   * A function called when the overlay is clicked.
   */
  onOverlayClick?: (e: any) => void;
  /**
   * Popup content.
   */
  children: React.ReactNode;
}

/**
 * A simple overlay.
 */
export default function Overlay({ children, isOpen, className, onOverlayClick }: Props) {
  usePreventGlobalScroll({ prevent: isOpen });

  const PortalComponent = usePortalComponent();

  return (
    <PortalComponent>
      <div
        className={cn(styles.overlay, { [className as string]: !!className, [styles.open]: isOpen })}
        onClick={onOverlayClick}
      >
        {children}
      </div>
    </PortalComponent>
  );
}
