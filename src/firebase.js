import { getDatabase, ref, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Js9aaYkuq-TtowYEYBU4cTl5SQZXvpE",
  authDomain: "water-scope-62e12.firebaseapp.com",
  projectId: "water-scope-62e12",
  storageBucket: "water-scope-62e12.firebasestorage.app",
  messagingSenderId: "397001931562",
  appId: "1:397001931562:web:11706bf7fb2b02b61f7c53",
  measurementId: "G-TKVT328B38"
};



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, child };