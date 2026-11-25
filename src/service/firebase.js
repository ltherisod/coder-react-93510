// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//uso de variables de entorno
  //apiKey: import.meta.env.VITE_API_KEY,

const firebaseConfig = {
  apiKey: "AIzaSyCv8pHhv4BdbqEk51d-voOswnNMEEdUqxA",
  authDomain: "coder-react-93510.firebaseapp.com",
  projectId: "coder-react-93510",
  storageBucket: "coder-react-93510.firebasestorage.app",
  messagingSenderId: "977989187383",
  appId: "1:977989187383:web:0ca6e6fa90bbea89458cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//OBTENER LA BASE DE DATOS
export const db = getFirestore(app)