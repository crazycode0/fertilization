import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf7poVJeDV9LIEgFzTSzLp3DA4MOqwUlA",
  authDomain: "fertility-a78f3.firebaseapp.com",
  projectId: "fertility-a78f3",
  storageBucket: "fertility-a78f3.appspot.com",
  messagingSenderId: "800502141758",
  appId: "1:800502141758:web:0f82e53ef1f3c7ff28926f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage, ref};

