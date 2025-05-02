// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqC3DaO20G9g8g0wjlLl78qZ00bgFWwFs",
  authDomain: "auth-integration-7fd9e.firebaseapp.com",
  projectId: "auth-integration-7fd9e",
  storageBucket: "auth-integration-7fd9e.firebasestorage.app",
  messagingSenderId: "249616212246",
  appId: "1:249616212246:web:2002db83729d6910d73037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);