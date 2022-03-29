import { useEffect } from 'react';

/**
 * A custom hook to track resize events.
 *
 * @param  {Function} callback: called when the browser window resizes
 */
const useResize = (callback) => {
  useEffect(() => {
    window.addEventListener('resize', callback);
    callback();

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);
};

export default useResize;
