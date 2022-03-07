import { useEffect } from 'react';

/**
 * Custom hook for preventing global scroll across the application when a component is rendered.
 */
const usePreventGlobalScroll = ({ prevent }) => {
  useEffect(() => {
    if (prevent) {
      document.querySelector('body').setAttribute('data-noscroll', true);
    }

    return () => {
      document.querySelector('body').removeAttribute('data-noscroll');
    };
  }, [prevent]);
};

export default usePreventGlobalScroll;
