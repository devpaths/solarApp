// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpBMwk130_byO4KLviCcXSVKizIP6ntBw",
  authDomain: "solarapp-d56fc.firebaseapp.com",
  projectId: "solarapp-d56fc",
  storageBucket: "solarapp-d56fc.appspot.com",
  messagingSenderId: "243299070373",
  appId: "1:243299070373:web:2613396a9d05750732384c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);