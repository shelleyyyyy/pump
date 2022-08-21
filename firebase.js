// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2SUp2lsHxUOyDaNM_jdSRtuoHjLMDP80",
  authDomain: "pump-7271d.firebaseapp.com",
  databaseURL: "https://pump-7271d-default-rtdb.firebaseio.com",
  projectId: "pump-7271d",
  storageBucket: "pump-7271d.appspot.com",
  messagingSenderId: "2321873098",
  appId: "1:2321873098:web:6b9174362ad455252d5c33",
  measurementId: "G-K51NJ0M7XE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const database = getDatabase(app);

export { firebase };