import { useCallback, useEffect, useState } from "react";

interface Props {
  delay: number;
}

/**
 * Returns true only after the page loads and the specified deplay has expired.
 */
const useAfterLoad = ({ delay }: Props) => {
  const [isAfterLoad, setIsAfterLoad] = useState(false);

  const onLoad = useCallback(() => {
    setTimeout(() => {
      setIsAfterLoad(true);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      onLoad();
      return;
    }

    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
    }
  }, []);

  return isAfterLoad;
};

export default useAfterLoad;
