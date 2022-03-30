import { fireEvent, render } from '@testing-library/react';
import DotNavigation from './DotNavigation';
import Carousel from './index';

const getJSX = ({ slides }) => (
  <Carousel
    indicatorComponent={<DotNavigation />}
    prevSlideComponent={
      (
        <div className="navigation-arrow prev-slide">
          <i className="icon-chevron-left" />
        </div>
      )
    }
    nextSlideComponent={
      (
        <div className="navigation-arrow next-slide">
          <i className="icon-chevron-right" />
        </div>
      )
    }
  >
    {Array(slides).fill(null).map((item, i) => (
      /* Don't use Math.random() as a key in application code :) */
      <div className="slide-content" key={Math.random()} data-key={Math.random()} style={{ width: '100px', height: '100px' }}>{i}</div>
    ))}
  </Carousel>
);

let container;

/**
 * Returns the slide at the given index.
 *
 * @param  {Number} index
 * @return {ReactWrapper}
 */
const slide = (index) => {
  const element = container.querySelectorAll('.slide')[index];
  element.transform = element.style.transform;
  return element;
};

/**
 * Expects that all the slides are positioned correctly according to the given activeSlide index and the number of slides.
 *
 * @param  {Number} activeSlide
 * @param  {Number} length
 */
const expectSlides = ({ activeSlide, length }) => {
  Array(length).fill(null).forEach((item, i) => {
    const position = i < activeSlide
      ? `${-100 * (activeSlide - i)}%`
      : i > activeSlide ? `${100 * (i - activeSlide)}%` : 0;
    expect(slide(i).transform).toBe(`translateX(${position})`);
  });
};

const createTouchEvent = ({ x = 0, y = 0 }) => ({
  touches: [{ pageX: x, pageY: y }],
  cancelable: true,
  bubbles: true,
});

describe('Carousel', () => {
  test('renders all provided slides and position them correctly', () => {
    const component = render(getJSX({ slides: 4 }));
    container = component.container;

    expect(container.querySelectorAll('div.slide-content').length).toBe(4);
    expectSlides({ activeSlide: 0, length: 4 });
  });

  test('switches to the next and prev slide correctly', () => {
    const component = render(getJSX({ slides: 4 }));
    container = component.container;

    expect(container.querySelector('.navigation-arrow.prev-slide')).toBeFalsy();
    expect(container.querySelector('.navigation-arrow.next-slide')).toBeTruthy();

    container.querySelector('.navigation-arrow.next-slide').click();

    expectSlides({ activeSlide: 1, length: 4 });

    expect(container.querySelector('.navigation-arrow.prev-slide')).toBeTruthy();

    container.querySelector('.navigation-arrow.prev-slide').click();

    expectSlides({ activeSlide: 0, length: 4 });
  });

  test('switches slides by using the dot navigation correctly', () => {
    const component = render(getJSX({ slides: 4 }));
    container = component.container;

    expect(container.querySelector('.dotNavigation')).toBeTruthy();
    expect(container.querySelectorAll('.dotNavigation .dot').length).toBe(4);

    container.querySelectorAll('.dotNavigation .dotWrapper')[2].click();

    expectSlides({ activeSlide: 2, length: 4 });

    container.querySelectorAll('.dotNavigation .dotWrapper')[3].click();

    expectSlides({ activeSlide: 3, length: 4 });
  });

  test('navigates by using touch events to swipe right', () => {
    const component = render(getJSX({ slides: 4 }));
    container = component.container;

    fireEvent(
      slide(0),
      new TouchEvent('touchstart', createTouchEvent({ x: 1, y: 0 }))
    );

    fireEvent(
      slide(0),
      new TouchEvent('touchmove', createTouchEvent({ x: 10, y: 0 }))
    );

    fireEvent(
      slide(0),
      new TouchEvent('touchmove', createTouchEvent({ x: 30, y: 0 }))
    );

    expect(slide(0).style.transform).toBe('translateX(29px)');

    fireEvent(
      slide(0),
      new TouchEvent('touchend', createTouchEvent({ x: 30, y: 0 }))
    );

    expectSlides({ activeSlide: 0, length: 4 });
  });

  test('navigates by using touch events to swipe left', () => {
    const component = render(getJSX({ slides: 4 }));
    container = component.container;

    fireEvent(
      slide(0),
      new TouchEvent('touchstart', createTouchEvent({ x: 1, y: 0 }))
    );

    fireEvent(
      slide(0),
      new TouchEvent('touchmove', createTouchEvent({ x: -10, y: 0 }))
    );

    fireEvent(
      slide(0),
      new TouchEvent('touchmove', createTouchEvent({ x: -30, y: 0 }))
    );

    expect(slide(0).transform).toBe('translateX(-31px)');

    fireEvent(
      slide(0),
      new TouchEvent('touchend', createTouchEvent({ x: -30, y: 0 }))
    );

    expectSlides({ activeSlide: 1, length: 4 });
  });
});
