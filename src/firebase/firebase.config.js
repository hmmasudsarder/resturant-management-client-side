// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOjPo-5rgzJmN6rJDifDOQhfyl8_qWwSY",
  authDomain: "management-the-restaurant.firebaseapp.com",
  projectId: "management-the-restaurant",
  storageBucket: "management-the-restaurant.appspot.com",
  messagingSenderId: "868497634824",
  appId: "1:868497634824:web:74e0a51c6d8842511243bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;