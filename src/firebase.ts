// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTOMEI3NbgT_IN6g1b9jReQCaSvKUNgZQ",
  authDomain: "projects360-contact.firebaseapp.com",
  projectId: "projects360-contact",
  storageBucket: "projects360-contact.appspot.com",
  messagingSenderId: "1049752769646",
  appId: "1:1049752769646:web:2dc9d8615d8b33034d427f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Initialize Firestore and EXPORT it
export const db = getFirestore(app);
