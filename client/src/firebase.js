// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-89462.firebaseapp.com",
  projectId: "mern-estate-89462",
  storageBucket: "mern-estate-89462.appspot.com",
  messagingSenderId: "101931701697",
  appId: "1:101931701697:web:a59030b99c993090b74b40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);