import { useState, useEffect } from 'react';

/**
 * A custom hook used to listen for the specified key to be pressed.
 *
 * @param  {String}  targetKey: key to listen for (e.g. ArrowLeft, w, x)
 * @param  {Boolean} disabled: when true, prevents listening
 * @return {Boolean} true when the targetKey is pressed
 */
const useKeyPress = (targetKey: string, { disabled = false } = {}) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }: any) => {
    key === targetKey && setKeyPressed(true);
  };

  const upHandler = ({ key }: any) => {
    key === targetKey && setKeyPressed(false);
  };

  useEffect(() => {
    if (!disabled) {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
    }

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [disabled]);

  return keyPressed;
};

export default useKeyPress;
