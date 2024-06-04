import { auth, firestore } from '../firebase/index.js';
import { doc, setDoc } from 'firebase/firestore';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast.js';
import useAuthStore from '../store/authStore.js';

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
      showToast('Error', 'Please fill all the fields', 'error');
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);

      if (!newUser && error) {
        showToast('Error', error.message, 'error');
        return;
      }

      if (newUser) {
        const userDocument = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: '',
          profilePictureurl: '',
          followers: [],
          followings: [],
          posts: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(firestore, 'users', newUser.user.uid), userDocument);
        localStorage.setItem('user-info', JSON.stringify(userDocument));
        loginUser(userDocument);
      }
    } catch (error) {
      showToast('Error', error.message, 'error');
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
