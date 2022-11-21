import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9nm7leaGyouyNa8QhKBU1Ikcjib7r1WM',
  authDomain: 'life-control-d380d.firebaseapp.com',
  projectId: 'life-control-d380d',
  storageBucket: 'life-control-d380d.appspot.com',
  messagingSenderId: '315037113051',
  appId: '1:315037113051:web:567885718a312209d74afe',
  measurementId: 'G-1CL2YLNBL8',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
