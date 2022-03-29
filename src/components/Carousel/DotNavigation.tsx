import cn from 'classnames';
import styles from './DotNavigation.module.scss';

export interface Props {
  /**
   * The carousel slides.
   */
  slides?: Array<JSX.Element>;
  /**
   * The current active slide.
   */
  activeSlide?: number;
  /**
   * Called to navigate to a particular slide.
   */
  onSlideNavigationClick?: (activeSlide?: number) => void;
  /**
   * Called to navigate to the previous slide.
   */
  onPrevSlideClick?: () => void;
  /**
   * Called to navigate to the next slide.
   */
  onNextSlideClick?: () => void;
}

/**
 * This is a complimentary component to the Carousel component.
 * It represents a dot navigation and a current slide indicator.
 *
 * Example usage:
 * <Carousel indicatorComponent={<DotNavigation />}>
 *   ...
 * </Carousel>
 */
const DotNavigation = ({ slides, activeSlide, onSlideNavigationClick }: Props) => (
  <>
    {slides && slides.length > 1 && (
      <div className={styles.dotNavigation} data-dotnavigation>
        {slides.map((child, i) => (
          <button
            className={styles.dotWrapper}
            onClick={() => { onSlideNavigationClick && onSlideNavigationClick(i); }}
            key={child.props['data-key']}
          >
            <div
              className={cn(styles.dot, { [styles.active]: i === activeSlide })}
            />
          </button>
        ))}
      </div>
    )}
  </>
);

export default DotNavigation;
