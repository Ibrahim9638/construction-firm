// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2I7WZ6CHdFgopr9DHV5cMFPE024oIPA",
  authDomain: "construction-firm.firebaseapp.com",
  projectId: "construction-firm",
  storageBucket: "construction-firm.appspot.com",
  messagingSenderId: "309190879441",
  appId: "1:309190879441:web:6ff5518b8ee531d3dcbdf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);