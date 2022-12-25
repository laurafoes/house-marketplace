// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmxKxZfSeY9JoIluDQSIOsoc7p6iPreCI",
  authDomain: "olar-marketplace.firebaseapp.com",
  projectId: "olar-marketplace",
  storageBucket: "olar-marketplace.appspot.com",
  messagingSenderId: "121101181447",
  appId: "1:121101181447:web:6bbe8ed242fa00914f40a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
