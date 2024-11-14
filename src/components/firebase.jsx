// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDDJYgfNAFczYV-6X_vSgCBA2ggvvp2Ji0",
  authDomain: "security-website-f174b.firebaseapp.com",
  projectId: "security-website-f174b",
  storageBucket: "security-website-f174b.appspot.com",
  messagingSenderId: "898014330217",
  appId: "1:898014330217:web:ebd6ea96a26bb59f3651f8",
  measurementId: "G-TKZQ8E4S5M"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app)
export const db = getFirestore(app)
const analytics = getAnalytics(app);
export default auth