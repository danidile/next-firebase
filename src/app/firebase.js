// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0g-3Zka-uRtCvvSMtqs9MF4XTvsncpjo",
  authDomain: "freechurch-e7410.firebaseapp.com",
  projectId: "freechurch-e7410",
  storageBucket: "freechurch-e7410.appspot.com",
  messagingSenderId: "368657968492",
  appId: "1:368657968492:web:307c4e09ee83f82a379749",
  measurementId: "G-H8X6SMYQKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);