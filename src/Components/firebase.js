import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVHCnfLa0mFVII-b0QT18LSt50oIWvAj0",
    authDomain: "linkedinclone-40dbe.firebaseapp.com",
    projectId: "linkedinclone-40dbe",
    storageBucket: "linkedinclone-40dbe.appspot.com",
    messagingSenderId: "989457698184",
    appId: "1:989457698184:web:d384306b0a1fa413813e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export default db;
export {auth};

