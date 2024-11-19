// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlqaQ0csASQlzUXCROy_kUzzFfumSVqwg",
  authDomain: "winter-clothing-1acc4.firebaseapp.com",
  projectId: "winter-clothing-1acc4",
  storageBucket: "winter-clothing-1acc4.firebasestorage.app",
  messagingSenderId: "98659676306",
  appId: "1:98659676306:web:d6d6047e13222321d0b64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;