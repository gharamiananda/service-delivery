// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxLLcQEGP2COsHzVaBwsUwEvIRpJUboJI",
    authDomain: "delivery-service-c8635.firebaseapp.com",
    projectId: "delivery-service-c8635",
    storageBucket: "delivery-service-c8635.appspot.com",
    messagingSenderId: "55051956532",
    appId: "1:55051956532:web:0862545eef8cde16ef7561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

