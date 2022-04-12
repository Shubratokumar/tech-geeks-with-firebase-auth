// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3FtRjVCoNCe_zcHT7j-wEEmoorpFezwE",
  authDomain: "tech-geeks-with-firebase-auth.firebaseapp.com",
  projectId: "tech-geeks-with-firebase-auth",
  storageBucket: "tech-geeks-with-firebase-auth.appspot.com",
  messagingSenderId: "1038978655262",
  appId: "1:1038978655262:web:f4dde84f1cf195d63aba0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;