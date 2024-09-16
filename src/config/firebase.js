// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsl2QxLgmAQ1QYLipt8ZIVEFftt6v-W4E",
  authDomain: "netten-8f8b1.firebaseapp.com",
  projectId: "netten-8f8b1",
  storageBucket: "netten-8f8b1.appspot.com",
  messagingSenderId: "42695980224",
  appId: "1:42695980224:web:b610f84e21c76fb7866925",
  measurementId: "G-EF51L8RWVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)