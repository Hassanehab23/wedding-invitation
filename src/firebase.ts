import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoMzMoYXGwAHw1RoT6kxtojFi38LPZ35Q",
  authDomain: "party-9c67e.firebaseapp.com",
  projectId: "party-9c67e",
  storageBucket: "party-9c67e.firebasestorage.app",
  messagingSenderId: "236575121699",
  appId: "1:236575121699:web:cb511a71e8836140efec96",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);