import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdv5sF1jb4_thwPXeXbk0cadq09W04E8s",
  authDomain: "buybox-875c8.firebaseapp.com",
  projectId: "buybox-875c8",
  storageBucket: "buybox-875c8.appspot.com",
  messagingSenderId: "1068758814252",
  appId: "1:1068758814252:web:baa602013b11c55fa94b89",
  measurementId: "G-B30TH6RBCZ",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);