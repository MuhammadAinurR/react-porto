// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9jqpt6iw8Hjuc0qEb2zsw17endp0PNs8",
  authDomain: "fir-react-9a098.firebaseapp.com",
  projectId: "fir-react-9a098",
  storageBucket: "fir-react-9a098.appspot.com",
  messagingSenderId: "607881439334",
  appId: "1:607881439334:web:782a1cf0da7115d4b1a5a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
