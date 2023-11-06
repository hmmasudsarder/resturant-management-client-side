// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuqpYjDm7UUhHdvDBu0QfR4sFo5dG7owU",
  authDomain: "restaurant-management-59c25.firebaseapp.com",
  projectId: "restaurant-management-59c25",
  storageBucket: "restaurant-management-59c25.appspot.com",
  messagingSenderId: "618441906920",
  appId: "1:618441906920:web:cefc64fe67a73d5e57075d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;