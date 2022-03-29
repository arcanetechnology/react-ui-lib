import { useEffect } from 'react';
import useKeyPress from './useKeyPress';

interface Props {
  /**
   * A key to listen for (e.g. ArrowLeft, w, x).
   */
  targetKey: string;
  /**
   * A function to call when the user presses the targetKey.
   */
  callback: () => void;
  /**
   * When true, prevents listening
   */
  disabled?: boolean;
}

/**
 * A custom hook used to call the given callback when the given targetKey is pressed.
 *
 * @param  {String}   targetKey:
 * @param  {Function} callback:
 * @param  {Boolean}  disabled:
 */
const useKeyCallback = ({ targetKey, callback, disabled = false }: Props) => {
  const keyPressed = useKeyPress(targetKey, { disabled });

  useEffect(() => {
    keyPressed && callback();
  }, [keyPressed]);
};

export default useKeyCallback;
