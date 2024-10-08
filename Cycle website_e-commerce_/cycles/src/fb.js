// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4r1UhGftdY5GxN7nifrQZJI9uKyhlzI",
  authDomain: "project-876f1.firebaseapp.com",
  projectId: "project-876f1",
  storageBucket: "project-876f1.appspot.com",
  messagingSenderId: "1094593982263",
  appId: "1:1094593982263:web:381ceb7f90ef43191cb4b2",
  measurementId: "G-EC3XWS2Y8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);