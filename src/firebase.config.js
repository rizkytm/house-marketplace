import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaglfjCMY39cOWOPfNHKrm5wPep78DPXg',
  authDomain: 'house-marketplace-app-dd31a.firebaseapp.com',
  projectId: 'house-marketplace-app-dd31a',
  storageBucket: 'house-marketplace-app-dd31a.appspot.com',
  messagingSenderId: '829962163624',
  appId: '1:829962163624:web:cc76dd41771cf86256b99d'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
