// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV7jJueIT6vNdFLWufhGiV48MQwiRsSaw",
  authDomain: "netflixgpt-8844c.firebaseapp.com",
  projectId: "netflixgpt-8844c",
  storageBucket: "netflixgpt-8844c.firebasestorage.app",
  messagingSenderId: "773607310630",
  appId: "1:773607310630:web:2bff01c49e6000f14dede7",
  measurementId: "G-N209K6GEP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
