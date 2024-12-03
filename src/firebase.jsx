import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD9YSjEbc67bvP7lWSN1SS94-xI9fkQzEk",
  authDomain: "auth-email-5435b.firebaseapp.com",
  projectId: "auth-email-5435b",
  storageBucket: "auth-email-5435b.firebasestorage.app",
  messagingSenderId: "1017523958601",
  appId: "1:1017523958601:web:d657be51cf582f743d2098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
