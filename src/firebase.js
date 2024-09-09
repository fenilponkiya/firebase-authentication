import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh0NtOpgvnIRt9hCdj8BYjrDHqMHU6F38",
  authDomain: "signin-signup-auth-bbc40.firebaseapp.com",
  projectId: "signin-signup-auth-bbc40",
  storageBucket: "signin-signup-auth-bbc40.appspot.com",
  messagingSenderId: "468474762649",
  appId: "1:468474762649:web:eea078574164f6e88cef08",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
