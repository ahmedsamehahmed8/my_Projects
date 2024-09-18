// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzQKP0tZI9CTlqBM9yaKtuV9tdbeLgx9s",
  authDomain: "test-1414f.firebaseapp.com",
  projectId: "test-1414f",
  storageBucket: "test-1414f.appspot.com",
  messagingSenderId: "644774984659",
  appId: "1:644774984659:web:4e1d7ca63fe1fd96820d26",
  measurementId: "G-9BE111WHMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);