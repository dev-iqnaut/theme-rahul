// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_crnvW0cZLMEzoftaKjjVrB73FM5HCQw",
  authDomain: "kidztar-f89d6.firebaseapp.com",
  projectId: "kidztar-f89d6",
  storageBucket: "kidztar-f89d6.appspot.com",
  messagingSenderId: "596448516195",
  appId: "1:596448516195:web:96f56e7cc34ec272e08056",
  measurementId: "G-R6CD2E7L25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);


// "rewrites": [
    //   {
    //     "source": "**",
    //     "destination": "/index.html"
    //   }
    // ]