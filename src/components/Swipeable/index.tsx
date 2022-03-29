import { useState } from 'react';

export interface Props {
  /**
   * Components rendered inside this &lt;div&gt; element.
   */
  children: React.ReactNode;
  /**
   * Called while while swiping horizontally.
   */
  onSwipingHorizontally: ({ deltaX }: {deltaX: number}) => void;
  /**
   * Called at the end of the swipe gesture.
   */
  onSwiped: ({ deltaX }: {deltaX: number}) => void;
  /**
   * Indicates if the swipe gestures are disabled, false by default.
   */
  disableSwiping?: boolean;
  /**
   * The rest of the props that are passed to this &lt;div&gt; element, e.g. className
   */
  [propName: string]: any;
}

/**
 * Generic component used to implement swiping logic via touch events.
 * Renders a <div> and passes all props to the div itself.
 *
 * How to use:
 *
 *   <Swipeable
 *     onSwipingHorizontally={({ deltaX }) => { }}
 *     onSwiped={({ deltaX }) => { }}
 *     className="..."
 *     ...
 *   >
 *     // children
 *   </Swipeable>
 *
 *  onSwipingHorizontally and onSwiped are called during the swipe and at the end of the swipe and pass
 *  deltaX that represents the horizontal change in px since the start of the swipe
 */
const Swipeable = ({ children, onSwipingHorizontally, onSwiped, disableSwiping, ...props }: Props) => {
  const [initialTouchX, setInitialTouchX] = useState<number | null>(null);
  const [initialTouchY, setInitialTouchY] = useState<number | null>(null);
  const [latestDeltaX, setLatestDeltaX] = useState<number | null>(null);

  /**
   * Checks if the user swipes horizontally.
   *
   * @param  {Number}  dx: delta x
   * @param  {Number}  dy: delta y
   * @return {Boolean}
   */
  const isSwipingHorizontally = (dx: number, dy: number) => (
    Math.abs(dx) > Math.abs(dy)
  );

  /**
   * Triggered when the user starts swiping.
   *
   * @param  {Event} e
   */
  const onTouchStart = (e: any) => {
    setInitialTouchX(e.touches[0].pageX);
    setInitialTouchY(e.touches[0].pageY);
  };

  /**
   * Triggered when the user swipes.
   *
   * @param  {Event} e
   */
  const onTouchMove = (e: any) => {
    if (initialTouchX === null || initialTouchY === null) {
      return;
    }

    const currentX = e.touches[0].pageX;
    const currentY = e.touches[0].pageY;

    const deltaX = currentX - initialTouchX;
    const deltaY = currentY - initialTouchY;

    if (latestDeltaX !== null || isSwipingHorizontally(deltaX, deltaY)) {
      setLatestDeltaX(deltaX);
      e.stopPropagation();

      onSwipingHorizontally({ deltaX });
    } else {
      cleanUp();
    }
  };

  /**
   * Triggered when the user ends the swipe.
   */
  const onTouchEnd = () => {
    initialTouchX && latestDeltaX && onSwiped({ deltaX: latestDeltaX });
    cleanUp();
  };

  /**
   * Cleans up the state after the swipe gesture ends.
   */
  const cleanUp = () => {
    setInitialTouchX(null);
    setInitialTouchY(null);
    setLatestDeltaX(null);
  };

  return (
    <div
      onTouchStart={disableSwiping ? undefined : onTouchStart}
      onTouchMove={disableSwiping ? undefined : onTouchMove}
      onTouchEnd={disableSwiping ? undefined : onTouchEnd}
      {...props}
    >
      {children}
    </div>
  );
};

export default Swipeable;
