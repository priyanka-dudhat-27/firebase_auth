/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTAXe2Gt8AFFKKEMS4tkZ_nv-aurah1wg",
  authDomain: "auth-firebase-23e6b.firebaseapp.com",
  projectId: "auth-firebase-23e6b",
  storageBucket: "auth-firebase-23e6b.appspot.com",
  messagingSenderId: "725880629473",
  appId: "1:725880629473:web:879a8ef2ed949cb08e2fa0",
  measurementId: "G-BDH0Q59R20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};