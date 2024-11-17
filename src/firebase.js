import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER,
  appId: process.env.REACT_APP_FIREBASE_ID
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);