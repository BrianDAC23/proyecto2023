// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAprVN3PmBIYg4K5goW5TEZb4cdPUUy_c8",
  authDomain: "prodect-94f16.firebaseapp.com",
  projectId: "prodect-94f16",
  storageBucket: "prodect-94f16.appspot.com",
  messagingSenderId: "885166020958",
  appId: "1:885166020958:web:4bb616bf8df21781a2d7cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)