// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB8ocBSDcXZ0aRmb4QGbBOiVvgNJFs5d-8",
    authDomain: "sarang-2a28d.firebaseapp.com",
    projectId: "sarang-2a28d",
    storageBucket: "sarang-2a28d.appspot.com",
    messagingSenderId: "73266879258",
    appId: "1:73266879258:web:9c2ae2eea982ea62296aa3",
    measurementId: "G-PBJ0977HLK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
