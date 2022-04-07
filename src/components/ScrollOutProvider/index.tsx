import { useEffect } from 'react';
import ScrollOut from 'scroll-out';
import useWillMount from '../../hooks/useWillMount';
import './scroll-out.scss';

const MOBILE_WIDTH = 839;

export interface Props {
  /**
   * Children that can be affected by scroll-out animations.
   */
  children: React.ReactNode | any;
}

/**
 * Provides scroll-related effects (appear / disappear element effects) when the user scrolls the page.
 * To use, wrap all elements inside the ScrollOutProvider, then add [data-scroll] attribute on an element you want to include in the page annimation effects.
 *
 * Uses: https://scroll-out.github.io/
 */
export default function ScrollOutProvider({ children }: Props) {
  useWillMount({
    onWillMount: () => {
      document.body.classList.add('scroll-out-provider');
    },
    onUnmount: () => {
      document.body.classList.remove('scroll-out-provider');
    }
  });

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
    children
  );
}
