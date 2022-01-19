import { getAuth, signOut } from 'firebase/auth';
import Button from '../../Button';
import useUser from '../useUser';
import useLinkComponent from '../../../hooks/useLinkComponent';
import styles from './index.module.scss';

export interface Props {
  /**
   * A CSS class to apply to the button.
   */
  className?: string,
  /**
   * Additional props passed directly to the &lt;Button&gt; component.
   */
  [propName: string]: any;
}

/**
 * A button to sign in when the user is not authenticated.
 * When the user is authenticated, changes to a sign out button.
 */
export default function SignInSignOutButton({ className, ...props }: Props) {
  const LinkComponent = useLinkComponent();
  const user = useUser();

  const handleSignOut = () => {
    signOut(getAuth());
  };

  if (typeof window === 'undefined') { // return null on server-side
    return null;
  }

  // @ts-ignore
  if (user && user.loading) {
    return null;
  }

  return (
    user ? (
      <Button className={className} small secondary onClick={handleSignOut} data-testid="sign-out-button" {...props}>
        Sign Out
      </Button>
    ) : (
      <LinkComponent href={`${window.location.origin}/auth?redirect=${window.location.href}`} className={styles.link}>
        <Button className={className} small secondary data-testid="sign-in-button" {...props}>
          Sign In
        </Button>
      </LinkComponent>
    )
  );
}
