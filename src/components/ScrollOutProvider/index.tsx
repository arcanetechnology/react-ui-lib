import { useEffect } from 'react';
import cn from 'classnames';
import ScrollOut from 'scroll-out';
import styles from './index.module.scss';

const MOBILE_WIDTH = 839;

export interface Props {
  /**
   * Children that can be affected by scroll-out animations.
   */
  children: React.ReactNode;
  /**
   * Additional className for the wrapper &lt;div&gt;.
   */
  className?: string;
}

/**
 * Provides scroll-related effects (appear / disappear element effects) when the user scrolls the page.
 * To use, wrap all elements inside the ScrollOutProvider, then add [data-scroll] attribute on an element you want to include in the page annimation effects.
 *
 * Uses: https://scroll-out.github.io/
 */
export default function ScrollOutProvider({ children, className, ...props }: Props) {
  useEffect(() => {
    ScrollOut({
      threshold: (element: HTMLElement, ctx: any) => {
        const isMobile = window.innerWidth < MOBILE_WIDTH;

        element.setAttribute('data-viewport', ctx.viewportY < 0 ? 'bottom' : ctx.viewportY > 0 ? 'top' : 'in-view');

        return isMobile
          ? 0.2
          : element.dataset.viewport === 'top' ? 0.8 : 0.4;
      }
    });
  }, []);

  return (
    <div className={cn(styles.scrollOutProvider, { [className as string]: !!className } )} {...props}>
      {children}
    </div>
  );
}
