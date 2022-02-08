import { getAuth, signOut } from 'firebase/auth';
import Button from '../../Button';
import useUser from '../useUser';
import useLinkComponent from '../../../hooks/useLinkComponent';
import styles from './index.module.scss';
import AuthProvider from '../AuthProvider';

export interface Props {
  /**
   * A CSS class to apply to the button.
   */
  className?: string;
  /**
   * Indicates if the authentication should be performed with a redirect instead of using a pop-up. Not recommended.
   */
  authWithRedirect?: boolean;
  /**
   * Additional props passed directly to the &lt;Button&gt; component.
   */
  [propName: string]: any;
}

/**
 * A button to sign in when the user is not authenticated.
 * When the user is authenticated, changes to a sign out button.
 *
 * It redirects to <current_domain>/auth, where the Platform App should be hosted for authentication to work correctly.
 */
export default function SignInSignOutButton({ className, authWithRedirect = false, ...props }: Props) {
  const LinkComponent = useLinkComponent();
  const user = useUser();

  const handleSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const width = 512;
    const height = 563;
    var left = (window.screen.width / 2) - (width / 2);
    var top = (window.screen.height / 2) - (height / 2);
    window.open(getAuthLink(), 'authentication', `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`)
  }

  const handleSignOut = () => {
    signOut(getAuth());
  };

  if (typeof window === 'undefined') { // return null on server-side
    return null;
  }

  if (user.state === AuthProvider.USER_STATE_LOADING) {
    return null;
  }

  return (
    user.state === AuthProvider.USER_STATE_SIGNED_IN ? (
      <Button className={className} small secondary onClick={handleSignOut} data-testid="sign-out-button" {...props}>
        Sign Out
      </Button>
    ) : (
      <LinkComponent href={getAuthLink()} className={styles.link}>
        <Button className={className} small secondary data-testid="sign-in-button" onClick={authWithRedirect ? null : handleSignIn} {...props}>
          Sign In
        </Button>
      </LinkComponent>
    )
  );
}

const getAuthLink = () => (
  `${window.location.origin}/auth?redirect=${window.location.href}&t=${Date.now()}`
);
