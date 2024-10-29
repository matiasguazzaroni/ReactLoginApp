// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzEljBH0kK7cDvOn7sMgcSQrG-CxgwpE8",
  authDomain: "login-proyect-dd7f7.firebaseapp.com",
  projectId: "login-proyect-dd7f7",
  storageBucket: "login-proyect-dd7f7.appspot.com",
  messagingSenderId: "402580536289",
  appId: "1:402580536289:web:90d33ac43077675fe530a0"
};

// Initialize Firebase
export const FiresbaseApp = initializeApp(firebaseConfig);
export const FiresbaseAuth = getAuth(FiresbaseApp);
export const FiresbaseDB = getFirestore(FiresbaseApp);
