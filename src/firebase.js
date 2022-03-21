// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_KjFaDo6wF8ibJJPppBfvgeRXezK3bXk",
  authDomain: "menna-sameh.firebaseapp.com",
  projectId: "menna-sameh",
  storageBucket: "menna-sameh.appspot.com",
  messagingSenderId: "179216312683",
  appId: "1:179216312683:web:04f120cea2135624b9c42e",
  measurementId: "G-5ZYEQCZ17P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
