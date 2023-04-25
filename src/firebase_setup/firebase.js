// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlnDkLusRKEg22hRPgbaIflea7688KfuQ",
  authDomain: "login-auth-d513c.firebaseapp.com",
  projectId: "login-auth-d513c",
  storageBucket: "login-auth-d513c.appspot.com",
  messagingSenderId: "599722188382",
  appId: "1:599722188382:web:176496b15c64dc1b229ecf",
  measurementId: "G-HT5F2WSMJS",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
