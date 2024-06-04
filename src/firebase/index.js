import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBA0xIqH4q3QnYxIsBtgQIhbRJKBfMA3Vo',
  authDomain: 'insta-clone-free-code-camp.firebaseapp.com',
  projectId: 'insta-clone-free-code-camp',
  storageBucket: 'insta-clone-free-code-camp.appspot.com',
  messagingSenderId: '1094224830554',
  appId: '1:1094224830554:web:fadfac738fc5694aa8b863',
  measurementId: 'G-8E9EVRFCXP',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
