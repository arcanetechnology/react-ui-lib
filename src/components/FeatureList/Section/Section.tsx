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
   * An additional class name for the section.
   */
  className?: string;
};

export default function Section({ children, columnReverse, className, ...props }: Props) {
  return (
    <div className={cn(styles.section, { [className as string]: !!className })} data-scroll {...props}>
      <div className={cn(styles.content, { [styles.columnReverse]: !!columnReverse })}>
        {children}
      </div>
    </div>
  );
}
