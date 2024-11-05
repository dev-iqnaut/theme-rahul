// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzH0v6igVadt8Fy9KXGpmZ5TxN7kMZn04",
  authDomain: "testing-king-f4bc5.firebaseapp.com",
  projectId: "testing-king-f4bc5",
  storageBucket: "testing-king-f4bc5.appspot.com",
  messagingSenderId: "401822606909",
  appId: "1:401822606909:web:9ce11aae80adffea95ec54",
  measurementId: "G-8RPW8JHC9Z"
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