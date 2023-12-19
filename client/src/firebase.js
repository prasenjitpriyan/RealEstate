// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-58a2a.firebaseapp.com",
  projectId: "real-estate-58a2a",
  storageBucket: "real-estate-58a2a.appspot.com",
  messagingSenderId: "303391681354",
  appId: "1:303391681354:web:75ac0eda72eddf9d69afb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);