// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgo0LbaDCSyGGhrO8VTZ3v3nzh9Z6mON8",
  authDomain: "booleanbitss.firebaseapp.com",
  projectId: "booleanbitss",
  storageBucket: "booleanbitss.firebasestorage.app",
  messagingSenderId: "149738842499",
  appId: "1:149738842499:web:b7244ed56d5f31e611eeb6",
  measurementId: "G-52ZF1K2MLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);