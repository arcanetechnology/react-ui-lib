import { useCallback, useEffect } from 'react';

/**
 * A custom hook to track scroll events.
 *
 * @param  {Function} callback: called when the user scrolls
 */
const useScroll = (callback: Callback) => {
  const onScroll = useCallback(() => {
    callback(document.documentElement.scrollTop);
  }, [callback]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
};

type Callback = (scrollTop: Number) => any;

export default useScroll;
