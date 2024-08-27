// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeNoSkw3FSsWQPViTB-s8s1AIPZ7R5f84",
  authDomain: "billingsoftware-e9c1d.firebaseapp.com",
  projectId: "billingsoftware-e9c1d",
  storageBucket: "billingsoftware-e9c1d.appspot.com",
  messagingSenderId: "187997646124",
  appId: "1:187997646124:web:88de2c9464136d728e9089",
  measurementId: "G-RRCVF32GDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);