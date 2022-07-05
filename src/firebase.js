// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvfjPT88_Mvba-ZVRylMBk2ay5Ox6Tlvk",
  authDomain: "sparta-react-js-d111a.firebaseapp.com",
  projectId: "sparta-react-js-d111a",
  storageBucket: "sparta-react-js-d111a.appspot.com",
  messagingSenderId: "537571055229",
  appId: "1:537571055229:web:24b4d138d6b4b2dd3d0314",
  measurementId: "G-0JZFGRGNB5"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();