import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzJextbcUuzDkPFNiGGUMR2bbMb4oxrM8",
  authDomain: "kanban-board-jimmy.firebaseapp.com",
  projectId: "kanban-board-jimmy",
  storageBucket: "kanban-board-jimmy.appspot.com",
  messagingSenderId: "1021114775150",
  appId: "1:1021114775150:web:632ef68cc9e72263e1187f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
