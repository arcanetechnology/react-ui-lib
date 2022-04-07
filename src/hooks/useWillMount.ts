import { useEffect, useRef } from "react";

interface Props {
  onWillMount: () => void;
  onUnmount: () => void;
}

/**
 * A custom hook that calls the given onWillMount callback when a component is about to mount.
 */
const useWillMount = ({ onWillMount, onUnmount }: Props) => {
  const willMount = useRef(true);

  if (willMount.current && typeof window !== 'undefined') {
    onWillMount();
  }

  willMount.current = false;

  useEffect(() => {
    return onUnmount;
  }, []);
}

export default useWillMount;
