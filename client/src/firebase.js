// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-b88e6.firebaseapp.com",
  projectId: "movie-b88e6",
  storageBucket: "movie-b88e6.appspot.com",
  messagingSenderId: "166660673590",
  appId: "1:166660673590:web:661a2c61ff520020604897"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);