// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUXgsSYWudulsBHeXeZUNsJ6nPLKfNqVc",
  authDomain: "vizaryon-301bd.firebaseapp.com",
  projectId: "vizaryon-301bd",
  storageBucket: "vizaryon-301bd.firebasestorage.app",
  messagingSenderId: "748332923160",
  appId: "1:748332923160:web:3d7b7818b7a75265b2066d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
