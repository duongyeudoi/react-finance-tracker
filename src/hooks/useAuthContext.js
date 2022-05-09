import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('useAuthContext must be inside provider');
  }
  return context;
}

export default useAuthContext;
