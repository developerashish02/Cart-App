import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDngeZ5MNHziBYJzVr3c07qlFCCX1l0e2g",
  authDomain: "cart-1c300.firebaseapp.com",
  projectId: "cart-1c300",
  storageBucket: "cart-1c300.appspot.com",
  messagingSenderId: "478935146720",
  appId: "1:478935146720:web:e7945ace3f15bfd255b085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore 
export const db = getFirestore(app)