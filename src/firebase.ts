
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebase = {
  apiKey: "AIzaSyD3cl6nkhkSBtAHnOSAYWksSPdL5hnacbE",
  authDomain: "trying-ionic.firebaseapp.com",
  projectId: "trying-ionic",
  storageBucket: "trying-ionic.appspot.com",
  messagingSenderId: "951425049288",
  appId: "1:951425049288:web:705384af7d466b0bb57bfd",
  measurementId: "G-E92GSQYHCL"
};


const app = initializeApp(firebase);
const analytics = getAnalytics(app);