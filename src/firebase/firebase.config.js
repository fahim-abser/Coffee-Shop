// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAyptWZrAF2AQPTIWiO_67f8wI7XZQvNo",
  authDomain: "coffee-shop-81b0a.firebaseapp.com",
  projectId: "coffee-shop-81b0a",
  storageBucket: "coffee-shop-81b0a.appspot.com",
  messagingSenderId: "139123206091",
  appId: "1:139123206091:web:33356893e66dd3f78f784e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;