// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC54TXZRmLkmR4xxuFKN-eaIpEys-borWg",
  authDomain: "realtor-clone-react-58af7.firebaseapp.com",
  projectId: "realtor-clone-react-58af7",
  storageBucket: "realtor-clone-react-58af7.appspot.com",
  messagingSenderId: "1079990960452",
  appId: "1:1079990960452:web:076fe1e76814a4738b9711"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();