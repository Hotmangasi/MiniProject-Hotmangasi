// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe9-FkiF38gZTZqS_jgnLxHi0f5gzhARw",
  authDomain: "todo-list-1ed56.firebaseapp.com",
  databaseURL: "https://todo-list-1ed56-default-rtdb.firebaseio.com",
  projectId: "todo-list-1ed56",
  storageBucket: "todo-list-1ed56.appspot.com",
  messagingSenderId: "540302298900",
  appId: "1:540302298900:web:a49f82da461706bfa13c01",
  measurementId: "G-CGJKF6P5CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);


