import { useEffect, useRef } from 'react';

interface Props {
  isDisplayed: boolean; // indicates if the component is displayed
  onOutsideClick: (e: any) => void; // called when a click outside of the component is detected
}

/**
 * A custom hook used to track clicks happening outside of the component.
 *
 * @return {React.Ref} ref that should be link to the component
 */
const useOutsideClick = ({ isDisplayed, onOutsideClick }: Props) => {
  const componentRef = useRef<HTMLElement>();

  useEffect(() => {
    // Called when the user is clicking on the document while the component is shown
    const handleOutsideClick = (e: any) => {
      if (componentRef.current && componentRef.current.contains(e.target)) {
        return;
      }

      onOutsideClick(e);
    };

    if (isDisplayed) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDisplayed]);

  return componentRef;
};

export default useOutsideClick;
