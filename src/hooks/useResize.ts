import { useLayoutEffect } from 'react';

/**
 * A custom hook to track resize events.
 *
 * @param  {Function} callback: called when the browser window resizes, and also on initialization
 */
const useResize = (callback: () => void) => {
  useLayoutEffect(() => {
    window.addEventListener('resize', callback);
    callback();

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);
};

export default useResize;
