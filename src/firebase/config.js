// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqvY6UYDDc5ifXUcwiMGnxhUFF6CXSh2Q",
  authDomain: "klercat-react.firebaseapp.com",
  projectId: "klercat-react",
  storageBucket: "klercat-react.appspot.com",
  messagingSenderId: "127123099677",
  appId: "1:127123099677:web:ab4c3f93b2942c978176f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)