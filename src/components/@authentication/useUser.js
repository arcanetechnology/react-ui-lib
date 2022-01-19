import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

/**
 * A custom hook to access the currently signed in user.
 */
const useUser = () => (
  useContext(AuthContext)
);

export default useUser;
