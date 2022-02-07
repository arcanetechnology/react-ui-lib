import { useEffect, useState, createContext, useCallback } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

export interface Props {
  /**
   * Application content wrapped inside the AuthProvider.
   */
  children: React.ReactNode;
}

export const AuthContext = createContext({ state: 'STATE_ERROR_MISSING_AUTH_PROVIDER' });

const USER_STATE_LOADING = 'USER_STATE_LOADING';
const USER_STATE_NOT_SIGNED_IN_IN_FIREBASE = 'USER_STATE_NOT_SIGNED_IN_IN_FIREBASE';
const USER_STATE_NOT_SIGNED_IN_PENDING_TNC = 'USER_STATE_NOT_SIGNED_IN_PENDING_TNC';
const USER_STATE_SIGNED_IN = 'USER_STATE_SIGNED_IN';

interface User {
  state: 'STATE_ERROR_MISSING_AUTH_PROVIDER'
    | typeof USER_STATE_LOADING
    | typeof USER_STATE_NOT_SIGNED_IN_IN_FIREBASE
    | typeof USER_STATE_NOT_SIGNED_IN_PENDING_TNC
    | typeof USER_STATE_SIGNED_IN;
  data?: { uid: string };
  changeStateAfterTncAccept?: () => void
}

/**
 * Wrap all components in this provider to access the current authentication state and user details by using the useUser hook.
 *
 * Prerequisites:
 *   - firebase must be initialized: call initializeApp(firebaseConfig)
 *
 * About useUser:
 *    - contains a state field with one of the following values:
 *      - AuthProvider.USER_STATE_LOADING
 *      - AuthProvider.USER_STATE_NOT_SIGNED_IN_IN_FIREBASE
 *      - AuthProvider.USER_STATE_NOT_SIGNED_IN_PENDING_TNC
 *      - AuthProvider.USER_STATE_SIGNED_IN
 *    - contains a data field with all firebase data related to the user
 *
 * Check that user.state === AuthProvider.USER_STATE_SIGNED_IN to ensure the user is (fully) signed-in.
 *
 * Use AuthProvider.signOut() to sign-out the existing user.
 */
export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({ state: USER_STATE_LOADING });

  /**
   * Changes the user state to AuthProvider.USER_STATE_SIGNED_IN after the terms and conditions has been accepted.
   * This function is attached to the user object returned from userUser(), so the Platform app can call it.
   */
  const changeStateAfterTncAccept = () => {
    setUser((u: any) => ({
      data: u.data,
      state: USER_STATE_SIGNED_IN
    }))
  };

  /**
   * Checks whether the given user has accepted the terms and conditions.
   * The Platofrm app sets a localStorage variable with the tnc data when tnc are accepted.
   */
  const hasUserAcceptedTnc = (userData?: { uid: string }) => {
    const tncData = localStorage.tncData && JSON.parse(localStorage.tncData);
    return tncData && userData && tncData.uid === userData.uid && tncData.accepted;
  }

  /**
   * Called when a change in the localStorage is detected from another document.
   * The Platofrm app sets a localStorage variable with the tnc data when tnc are accepted.
   *
   * This function changes the state of the user after terms and conditions are accepted from another document (popup).
   */
  const handleStorageChange = useCallback(() => {
    if (hasUserAcceptedTnc(user.data)) {
      changeStateAfterTncAccept();
    }
  }, [user]);

  /**
   * Listens for localStorage changes so it can update the user state if the user has accepted terms and conditions from another document.
   */
  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  }, [handleStorageChange]);

  /**
   * Subscribes to firebase auth events.
   */
  useEffect(() => {
    onAuthStateChanged(getAuth(), (u: any) => {
      if (!u) {
        setUser({
          state: USER_STATE_NOT_SIGNED_IN_IN_FIREBASE
        });

        return;
      }

      if (hasUserAcceptedTnc(u)) {
        setUser({
          data: u,
          state: USER_STATE_SIGNED_IN
        });
      } else {
        setUser({
          data: u,
          state: USER_STATE_NOT_SIGNED_IN_PENDING_TNC,
          changeStateAfterTncAccept
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.USER_STATE_LOADING = USER_STATE_LOADING;
AuthProvider.USER_STATE_NOT_SIGNED_IN_IN_FIREBASE = USER_STATE_NOT_SIGNED_IN_IN_FIREBASE;
AuthProvider.USER_STATE_NOT_SIGNED_IN_PENDING_TNC = USER_STATE_NOT_SIGNED_IN_PENDING_TNC;
AuthProvider.USER_STATE_SIGNED_IN = USER_STATE_SIGNED_IN;

/**
 * Signs out the user.
 */
AuthProvider.signOut = () => {
  signOut(getAuth());
  delete localStorage.tncData;
};
