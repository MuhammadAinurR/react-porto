// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZ6ukO9X9EpXhl2LjhDy9JZpAe346IDbI",
  authDomain: "react-project-6e568.firebaseapp.com",
  projectId: "react-project-6e568",
  storageBucket: "react-project-6e568.appspot.com",
  messagingSenderId: "470042049569",
  appId: "1:470042049569:web:3bc9f1164c94b4ae95f760",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
