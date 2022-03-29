import { useRef, useEffect } from 'react';

/**
 * Always useInterval instead of setInterval because https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * @param  {Function} callback
 * @param  {Number}   delay: interval delay
 * @return {Function} restartInterval: restarts the interval with the same delay
 */
const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<any>();
  const id = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const restartInterval = () => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      clearInterval(id.current);
      id.current = setInterval(tick, delay);
    }
  };

  useEffect(() => {
    restartInterval();
    return () => {
      clearInterval(id.current);
    };
  }, [delay]);

  return restartInterval;
};

export default useInterval;
