import Clickable from '../Clickable';
import styles from './index.module.scss';

export interface Props {
  /**
   * The icon itself provided as a React child to this component.
   */
  children: React.ReactNode,
  /**
   * An additional CSS class for this component.
   */
  className?: string,
  /**
   * Additional props passed directly to the Clickable component (e.g. onClick handler).
   */
  [propName: string]: any;
}

/**
 * A utility component simplifying icon usage. Encapsulates common icon styles.
 *
 * The idea is that the clickable area of an icon should always be 48 by 48 pixels no matter how small the icon is. This is especially important for mobile devices.
 */
const ClickableIcon = ({ children, className, ...props }: Props) => (
  <Clickable className={`${styles.icon} ${className}`} tabIndex="-1" {...props}>
    {children}
  </Clickable>
);

export default ClickableIcon;
