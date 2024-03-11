import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-D0cAGJZ0bp5QmOStpdarm8kkhreTJJQ",
  authDomain: "fertility-c7ec7.firebaseapp.com",
  projectId: "fertility-c7ec7",
  storageBucket: "fertility-c7ec7.appspot.com",
  messagingSenderId: "52423370215",
  appId: "1:52423370215:web:944dbfa598db9520240942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage, ref};

