
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2aCgSiR2eChsipVdzGzUkygiYE9Wa16k",
  authDomain: "tienda-6cd43.firebaseapp.com",
  projectId: "tienda-6cd43",
  storageBucket: "tienda-6cd43.appspot.com",
  messagingSenderId: "827215735614",
  appId: "1:827215735614:web:e47e9e287c90cbf5ae1a6f"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;
