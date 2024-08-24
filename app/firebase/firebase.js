// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF_Z46uIKuF1qsaZYUaLlfZdg9ENMNrQw",
  authDomain: "statuscode1-c411d.firebaseapp.com",
  databaseURL: "https://statuscode1-c411d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "statuscode1-c411d",
  storageBucket: "statuscode1-c411d.appspot.com",
  messagingSenderId: "815127678930",
  appId: "1:815127678930:web:3481bd90b2dc7b64dcc20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app , db};
