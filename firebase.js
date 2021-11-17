// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnlx9_6HV_B4C9LVXaqIqsFxViQaWF0Do",
  authDomain: "insta-cl-334f7.firebaseapp.com",
  projectId: "insta-cl-334f7",
  storageBucket: "insta-cl-334f7.appspot.com",
  messagingSenderId: "597052811641",
  appId: "1:597052811641:web:ca797827e0966dc3afe7a8",
  measurementId: "G-2RWP2HGK55",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
