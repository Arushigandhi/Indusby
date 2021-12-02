// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYCbADsB-NktIIzo9EMgwGF206SjIamw",
  authDomain: "indusby.firebaseapp.com",
  databaseURL:
    "https://indusby-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "indusby",
  storageBucket: "indusby.appspot.com",
  messagingSenderId: "134495161686",
  appId: "1:134495161686:web:02a0957ae1bcc19df99af7",
  measurementId: "G-JXL2CBSBD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function loginUser(email: string, password: string) {
  const auth = getAuth();
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred;
}
