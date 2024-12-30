import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCe6m67zARBHuxAEfOUT_509tanuWhLWdM",
  authDomain: "todo-app-ddb2d.firebaseapp.com",
  projectId: "todo-app-ddb2d",
  storageBucket: "todo-app-ddb2d.firebasestorage.app",
  messagingSenderId: "13133991044",
  appId: "1:13133991044:web:ff1e52347b3f04dddb06d1",
  measurementId: "G-V0JVPJLQLE"
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)