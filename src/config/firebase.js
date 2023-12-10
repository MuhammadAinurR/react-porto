// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldmNAo0I-LjFeXcRD6DpKPvbd1_EqZpg",
  authDomain: "fb-project-arof.firebaseapp.com",
  projectId: "fb-project-arof",
  storageBucket: "fb-project-arof.appspot.com",
  messagingSenderId: "1064394003073",
  appId: "1:1064394003073:web:86ed1d49f686299161f380",
  measurementId: "G-087MSZEV70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
