import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBcnoV7cO7uXGj9B996MupQh5MZ6WMI4ig",
  authDomain: "ecommerce-dee0d.firebaseapp.com",
  projectId: "ecommerce-dee0d",
  storageBucket: "ecommerce-dee0d.appspot.com",
  messagingSenderId: "622738425359",
  appId: "1:622738425359:web:151933b40c22917480857a",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
