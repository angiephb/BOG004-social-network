// Import the functions you need from the SDKs you need
// import { getFirestore, collection, addDoc } from './firebase-imports.js';
import { initializeApp } from './firebase-imports.js';

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyDJ8Qe7SMPkF_hatOQE9Bn-ZKbRM2haSx8',
  authDomain: 'social-trip-d4874.firebaseapp.com',
  projectId: 'social-trip-d4874',
  storageBucket: 'social-trip-d4874.appspot.com',
  messagingSenderId: '1051343663987',
  appId: '1:1051343663987:web:457e3e7d42c8eb7d19cb06',
  measurementId: 'G-ZNYLJDYZZK',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseApp;

