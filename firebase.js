// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Zw7eLGKSBNQapXCviyUBgLEMtXZxw3I",
  authDomain: "test-aiman.firebaseapp.com",
  databaseURL: "https://test-aiman-default-rtdb.firebaseio.com",
  projectId: "test-aiman",
  storageBucket: "test-aiman.appspot.com",
  messagingSenderId: "466713497835",
  appId: "1:466713497835:web:6c20210c77ddbc0344aeae",
  measurementId: "G-FQ9D0HDTGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
