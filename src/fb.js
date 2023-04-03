import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDt1ejlNDOhQn4CY-vD4H0yHlVExhsS3JA",
  authDomain: "qtdlt-quytindung.firebaseapp.com",
  projectId: "qtdlt-quytindung",
  storageBucket: "qtdlt-quytindung.appspot.com",
  messagingSenderId: "605211877327",
  appId: "1:605211877327:web:d19b692b27236644617cba",
  measurementId: "G-JD483J7V1P"
  };
  const firebase = initializeApp(firebaseConfig)

  const db = getFirestore(firebase);
  export default db