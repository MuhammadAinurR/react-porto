// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
    authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIRESTORE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIRESTORE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIRESTORE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
