// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_UIMifYWt5YKf2EoqVFp95S88Pvhh4lg",
  authDomain: "bistro-boss-1a5d5.firebaseapp.com",
  projectId: "bistro-boss-1a5d5",
  storageBucket: "bistro-boss-1a5d5.appspot.com",
  messagingSenderId: "355402687550",
  appId: "1:355402687550:web:de1117cf52dcab6d231d6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
