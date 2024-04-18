// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ODfeSO82iPGPCo2dg4RJPsaQOT7LilM",
  authDomain: "contech-8ef2f.firebaseapp.com",
  projectId: "contech-8ef2f",
  storageBucket: "contech-8ef2f.appspot.com",
  messagingSenderId: "215544313492",
  appId: "1:215544313492:web:98dc069c224309235ea681",
  measurementId: "G-F277J96YX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
