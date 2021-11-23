// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJZd-zV5GA1e1Dg7Ab2LxkOxTcr6ef3w",
  authDomain: "my-expo-project-5b8ed.firebaseapp.com",
  databaseURL: "https://my-expo-project-5b8ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-expo-project-5b8ed",
  storageBucket: "my-expo-project-5b8ed.appspot.com",
  messagingSenderId: "1070700498271",
  appId: "1:1070700498271:web:58a8c1f8f76ac58b84baea",
  measurementId: "G-63M9MMLKKC"
};

// Initialize Firebase
let app: FirebaseApp;
export const fbInit = () => {
  app = initializeApp(firebaseConfig);
};