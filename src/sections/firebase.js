// firebase.js

// Import پایه‌ای از SDK
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove,push } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";


// تنظیمات Firebase پروژه‌ات (این مقادیر از خودت هستن)
const firebaseConfig = {
  apiKey: "AIzaSyBasJY3q_xJ4pmb3NY-hbVt4rPd0QLnvro",
  authDomain: "persianstories-c0d1d.firebaseapp.com",
  databaseURL: "https://persianstories-c0d1d-default-rtdb.firebaseio.com/",
  projectId: "persianstories-c0d1d",
  storageBucket: "persianstories-c0d1d.appspot.com", // ← درست شد
  messagingSenderId: "636214961250",
  appId: "1:636214961250:web:19b7a83396d913edbe5d3b",
  measurementId: "G-SMXHCNWGD8"
};

// مقداردهی اولیه Firebase
const app = initializeApp(firebaseConfig);

// گرفتن Realtime Database
const database = getDatabase(app);
const storage = getStorage(app);

// خروجی توابع مورد نیاز
export { database, ref, set, onValue, remove, storage,push, storageRef, uploadBytes, getDownloadURL }; 