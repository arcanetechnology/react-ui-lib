import { useEffect, useState, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useWhoAmI from './useWhoAmI';

export interface Props {
  /**
   * Application content wrapped inside the AuthProvider.
   */
  children: React.ReactNode;
}

export const AuthContext = createContext(null);

/**
 * Wrap all components in this provider to access the current authentication state and user details by using the useUser hook.
 *
 * Prerequisites:
 *   - firebase must be initialized: call initializeApp(firebaseConfig)
 *   - react-query must be initialized: wrap the AuthProvider in a QueryClientProvider
 */
export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<any>({ loading: true });
  const [token, setToken] = useState<string | undefined>();

  const userData = useWhoAmI(token);

  useEffect(() => {
    if (userData) {
      if (userData.error) {
        setUser(null);
        console.log('Error authenticating user', userData);
      } else {
        setUser(userData);
      }
    }
  }, [userData]);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (u: any) => {
      u === null
        ? setUser(null)
        : setToken(u.accessToken);
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}
