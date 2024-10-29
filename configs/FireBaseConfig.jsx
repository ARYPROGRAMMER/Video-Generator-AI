// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "supercool-mental-health-app.firebaseapp.com",
  projectId: "supercool-mental-health-app",
  storageBucket: "supercool-mental-health-app.appspot.com",
  messagingSenderId: "26005611530",
  appId: "1:26005611530:web:3eeedbf3f32703373babf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app);