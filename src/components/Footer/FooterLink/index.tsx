import styles from './index.module.scss';
import cn from 'classnames';

interface Props {
  /**
   * Link content
   */
  children: React.ReactNode;
  /**
   * Indicates if the link is white
   */
  white?: boolean;
  /**
   * Indicates if the link is active
   */
  active?: boolean;
}

/**
 * Link in the footer.
 */
export default function FooterLink({ children, white, active = false }: Props) {
  return (
    <div data-active={active} className={cn(styles.link, { [styles.white]: white })}>
      {children}
    </div>
  );
}
