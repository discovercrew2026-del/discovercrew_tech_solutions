import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCL88c-62Ybc5XdfLyqUXJpl7cGDUFR_YI",
  authDomain: "discover-crew.firebaseapp.com",
  projectId: "discover-crew",
  storageBucket: "discover-crew.firebasestorage.app",
  messagingSenderId: "533345556949",
  appId: "1:533345556949:web:598d9e87914e7256d7c55c",
  measurementId: "G-99FKZYX1LN",
  databaseURL: "https://discover-crew-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
