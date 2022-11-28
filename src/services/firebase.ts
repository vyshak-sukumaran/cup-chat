// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7hCvk_4Cou370RrNHs9wOfLC6PMisL2o",
  authDomain: "react-firebase-chat-e2c37.firebaseapp.com",
  projectId: "react-firebase-chat-e2c37",
  storageBucket: "react-firebase-chat-e2c37.appspot.com",
  messagingSenderId: "613478664948",
  appId: "1:613478664948:web:bb154cfbb9db394fc62ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export { app as firebaseApp, firestore }