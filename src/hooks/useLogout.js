import useAuthStore from '../store/authStore';
import { auth } from '../firebase';
import useShowToast from './useShowToast.js';
import { useSignOut } from 'react-firebase-hooks/auth';

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('user-info');
      showToast('Success', 'Loged out', 'success');
      logoutUser();
    } catch (error) {
      showToast('Error', error.message, 'error');
    }
  };

  return { handleLogout, isLoggingOut, error };
};

export default useLogout;
