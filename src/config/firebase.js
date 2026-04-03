import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqfxlf0jUA3eJPMJJzcgnjTUabyeFA1To",
  authDomain: "kathawate-ecommerce.firebaseapp.com",
  projectId: "kathawate-ecommerce",
  storageBucket: "kathawate-ecommerce.firebasestorage.app",
  messagingSenderId: "30140593252",
  appId: "1:30140593252:web:aa4a5ae57e613128865b71",
  measurementId: "G-DL3X5ZY58K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);