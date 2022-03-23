import styles from './Child.module.scss';
import cn from 'classnames';

interface Props {
  /**
   * Section child content.
   */
  children: React.ReactNode;
  /**
   * Indicates if this section child contains a marketingImage.
   * False indicates that this section child contains text.
   */
  marketingImage?: Boolean;
};

export default function Child({ children, marketingImage }: Props) {
  return (
    <div
      className={cn(styles.child, {
        [styles.marketingImage]: marketingImage
      })}
    >
      {children}
    </div>
  );
}
