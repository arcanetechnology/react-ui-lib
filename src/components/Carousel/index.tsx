import React, { useReducer, useLayoutEffect, useRef } from 'react';
import useInterval from '../../hooks/useInterval';
import useKeyCallback from '../../hooks/useKeyCallback';
import useResize from '../../hooks/useResize';
import Swipeable from '../../components/Swipeable';
import cn from 'classnames';
import styles from './index.module.scss';

const TRANSITION_DURATION = '300ms';
const SLIDE_INTERVAL = 4000;

const DEFAULT_STATE = {
  slidePositions: [],
  isTransitioning: false,
  activeSlide: 0,
  isAutoSlidingActive: true,
  isSwipingStarted: false
};

const ACTIONS = {
  INIT_SLIDE_POSITIONS: 'INIT_SLIDE_POSITIONS',
  GO_TO_PREV_SLIDE: 'GO_TO_PREV_SLIDE',
  GO_TO_NEXT_SLIDE: 'GO_TO_NEXT_SLIDE',
  GO_TO_SLIDE: 'GO_TO_SLIDE',
  SWIPE: 'SWIPE',
  SWIPE_ENDED: 'SWIPE_ENDED'
};

export interface Props {
  /**
   * Each child represents a slide of the carousel.
   */
  children: Array<JSX.Element>;
  /**
   * Additional carousel className.
   */
  className?: string;
  /**
   * Additional className for each slide.
   */
  slideClassName?: string;
  /**
   * Indicates if the slides auto rotate themselves.
   */
  autoRotate?: boolean;
  /**
   * When true, the user can navigate between slides with the keyboard's arrow keys.
   */
  enableKeyNavigation?: boolean;
  /**
   * Indicates the initial slide index, starting from 0. Default is 0.
   */
  initialActiveSlide?: number;
  /**
   * When specified, renders this component, providing all data and functions so it can display current slide indicator and implement navigation between slides
   *   props: { slides, activeSlide, onSlideNavigationClick, onPrevSlideClick, onNextSlideClick }
   */
  indicatorComponent?: React.ReactElement;
  /**
   * Represents a previous arrow component, when clicked, it navigates to the previous slide.
   */
  prevSlideComponent?: React.ReactElement;
  /**
   * Represents a next arrow component, when clicked, it navigates to the next slide
   */
  nextSlideComponent?: React.ReactElement;
  /**
   * Callback, called when the slide is changed
   */
  onSlideChange?: (activeSlide?: number) => void;
  /**
   * Top / bottom padding of the slides to the carousel component.
   */
  slideVerticalPadding?: number;
}

/**
 * Represents a carousel component used to rotate slides.
 * The user can manually switch between slides by clicking on some of the navigation components or swiping left and right on a mobile device.
 * The slides can also be rotated automatically.
 *
 * This component is transparent regarding the content it rotates.
 * Each slide should be provided as a child to this component, and only slides can be children. Any single child is concidered a slide.
 * The only requirement for the provided children is that they all have a unique data-key attribute, which is used to set a key attribute for each slide.
 *
 * Usage: <br />
 * &lt;Carousel&gt; <br />
 *   &lt;div data-key="unique-key"&gt;This is a slide&lt;/div&gt; <br />
 *   &lt;div data-key="another-key"&gt;This is another slide&lt;/div&gt; <br />
 * &lt;/Carousel&gt; <br />
 */
const Carousel = ({ children, className, slideClassName, autoRotate, enableKeyNavigation, initialActiveSlide = 0, indicatorComponent, prevSlideComponent, nextSlideComponent, onSlideChange, slideVerticalPadding = 0 }: Props) => {
  const carouselRef = useRef<any>();

  const defaultState = {
    ...DEFAULT_STATE,
    activeSlide: initialActiveSlide
  };

  /**
   * Sets the slidesWrapper height in pixels based on the highest slide.
   */
  useResize(() => {
    setTimeout(() => {
      const slideList = carouselRef.current.querySelector('[data-slide-list]');
      const slides = carouselRef.current.querySelectorAll('[data-slide]');
      let maxHeight = 0;

      slides.forEach((slide: any) => {
        const children = [].slice.call(slide.children);

        const height = children.reduce((currentResult: number, child: any) => (
          currentResult + child.offsetHeight
        ), 0);

        maxHeight = Math.max(maxHeight, height);
      });

      slideList.style.height = `${maxHeight + slideVerticalPadding * 2}px`;
    }, 50);
  });

  const reducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
      case ACTIONS.INIT_SLIDE_POSITIONS:
        return {
          ...state,
          slidePositions: children.map((child, i) => (
            i < state.activeSlide
              ? `${-100 * (state.activeSlide - i)}%`
              : i > state.activeSlide ? `${100 * (i - state.activeSlide)}%` : 0
          ))
        };

      case ACTIONS.GO_TO_PREV_SLIDE:
        return {
          ...state,
          isTransitioning: true,
          activeSlide: Math.max(0, state.activeSlide - 1)
        };

      case ACTIONS.GO_TO_NEXT_SLIDE:
        return {
          ...state,
          isTransitioning: true,
          activeSlide: Math.min(children.length - 1, state.activeSlide + 1)
        };

      case ACTIONS.GO_TO_SLIDE:
        return {
          ...state,
          isTransitioning: true,
          activeSlide: action.slide
        };

      case ACTIONS.SWIPE: {
        const slides = carouselRef.current.querySelectorAll('[data-slide]');
        const width = slides[0].offsetWidth;

        if (!state.isSwipingStarted) {
          const slidePositions = children.map((child, i) => (
            i < state.activeSlide
              ? `-${width * (state.activeSlide - i)}px`
              : i > state.activeSlide ? `${width * (i - state.activeSlide)}px` : 0
          ));

          return {
            ...state,
            slidePositions: [...slidePositions],
            initialSlidePositions: [...slidePositions],
            isTransitioning: false,
            isSwipingStarted: true,
            isAutoSlidingActive: false
          };
        }

        return {
          ...state,
          slidePositions: state.initialSlidePositions.map((position: any) => (
            `${parseInt(position) + action.deltaX}px`
          ))
        };
      }

      case ACTIONS.SWIPE_ENDED: {
        const slides = carouselRef.current.querySelectorAll('[data-slide]');
        const width = slides[0].offsetWidth;

        const activeSlide = parseInt(state.slidePositions[state.activeSlide]) < -width / 6
          ? Math.min(children.length - 1, state.activeSlide + 1)
          : parseInt(state.slidePositions[state.activeSlide]) > width / 6
            ? Math.max(0, state.activeSlide - 1)
            : state.activeSlide;

        if (state.activeSlide !== activeSlide) {
          setTimeout(() => {
            onSlideChange && onSlideChange(activeSlide);
          });
        }

        return {
          ...state,
          activeSlide,
          isTransitioning: true,
          slidePositions: children.map((child, i) => (
            i < state.activeSlide
              ? `${-100 * (state.activeSlide - i)}%`
              : i > state.activeSlide ? `${100 * (i - state.activeSlide)}%` : 0
          )),
          isSwipingStarted: false,
          isAutoSlidingActive: true,
        };
      }

      default:
        return state;
    }
  };

  const [state, changeState] = useReducer(reducer, defaultState);

  useLayoutEffect(() => {
    changeState({ type: ACTIONS.INIT_SLIDE_POSITIONS });
  }, [children.length, state.activeSlide]);

  const restartInterval = useInterval(() => {
    isLastSlide() ? goToSlide(0) : goToNextSlide();
  }, autoRotate && state.isAutoSlidingActive ? SLIDE_INTERVAL : null);

  /**
   * Switches to the previous slide.
   */
  const goToPrevSlide = () => {
    onSlideChange && onSlideChange();
    changeState({ type: ACTIONS.GO_TO_PREV_SLIDE });
  };

  /**
   * Switches to the next slide.
   */
  const goToNextSlide = () => {
    onSlideChange && onSlideChange();
    changeState({ type: ACTIONS.GO_TO_NEXT_SLIDE });
  };

  /**
   * Switches to the given slide index.
   *
   * @param  {Number} slide: slide index
   */
  const goToSlide = (slide: number) => {
    changeState({ type: ACTIONS.GO_TO_SLIDE, slide });
  };

  /**
   * Called while the user swipes a slide.
   *
   * @param  {Number} deltaX: change in px according to the initial position of the slide
   */
  const onSwipingHorizontally = ({ deltaX }: { deltaX: number }) => {
    changeState({ type: ACTIONS.SWIPE, deltaX });
  };

  /**
   * Called when the swipe gesture ends.
   */
  const onSwiped = () => {
    changeState({ type: ACTIONS.SWIPE_ENDED });
  };

  /**
   * Called when the user manually changes to the previous slide.
   */
  const onPrevSlideClick = () => {
    goToPrevSlide();
    restartInterval();
  };

  /**
   * Called when the user manually changes to the next slide.
   */
  const onNextSlideClick = () => {
    goToNextSlide();
    restartInterval();
  };

  /**
   * Called when the user manually changes the slide.
   *
   * @param  {Number} slide: slide index
   */
  const onSlideNavigationClick = (slide: number) => {
    goToSlide(slide);
    restartInterval();
  };

  /**
   * Indicates if the active slide is the last one.
   *
   * @return {Boolean}
   */
  const isLastSlide = () => (
    state.activeSlide === children.length - 1
  );

  useKeyCallback({ targetKey: 'ArrowLeft', callback: onPrevSlideClick, disabled: !enableKeyNavigation });
  useKeyCallback({ targetKey: 'ArrowRight', callback: onNextSlideClick, disabled: !enableKeyNavigation });

  return (
    <div className={cn(styles.carousel, { [className as string]: !!className })} ref={carouselRef}>
      <div className={styles.slides} data-slide-list>
        {children.map((child, i) => (
          <Swipeable
            key={child.props['data-key']}
            className={cn(styles.slide, { [slideClassName as string]: !!slideClassName })}
            style={{
              transform: `translateX(${state.slidePositions[i]})`,
              transitionDuration: `${state.isTransitioning ? TRANSITION_DURATION : '0ms'}`
            }}
            onSwipingHorizontally={onSwipingHorizontally}
            onSwiped={onSwiped}
            data-slide
          >
            {child}
          </Swipeable>
        ))}
      </div>
      {state.activeSlide > 0 && prevSlideComponent && (
        React.cloneElement(prevSlideComponent, {
          onClick: onPrevSlideClick
        })
      )}
      {!isLastSlide() && nextSlideComponent && (
        React.cloneElement(nextSlideComponent, {
          onClick: onNextSlideClick
        })
      )}

      {indicatorComponent && (
        React.cloneElement(indicatorComponent, {
          slides: children,
          activeSlide: state.activeSlide,
          onSlideNavigationClick,
          onPrevSlideClick,
          onNextSlideClick
        })
      )}
    </div>
  );
};

export default Carousel;
