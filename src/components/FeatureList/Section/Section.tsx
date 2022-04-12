import styles from './Section.module.scss';
import cn from 'classnames';

interface Props {
  /**
   * Section content.
   */
  children: React.ReactNode;
  /**
   * Indicates if the column order should be reversed.
   */
  columnReverse?: Boolean;
  /**
   * Prevents the scroll-out animation.
   */
  noScrollAnimation?: boolean;
  /**
   * An additional class name for the section.
   */
  className?: string;
};

export default function Section({ children, columnReverse, className, noScrollAnimation, ...props }: Props) {
  return (
    <div
      className={cn(styles.section, { [className as string]: !!className })}
      {...(noScrollAnimation ? {} : { 'data-scroll': true })}
      {...props}
    >
      <div className={cn(styles.content, { [styles.columnReverse]: !!columnReverse })}>
        {children}
      </div>
    </div>
  );
}
