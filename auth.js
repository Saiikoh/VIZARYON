// -----------------------------
// Firebase Initialization
// -----------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "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",
  authDomain: "vizaryon-301bd.firebaseapp.com",
  projectId: "vizaryon-301bd",
  storageBucket: "vizaryon-301bd.firebasestorage.app",
  messagingSenderId: "748332923160",
  appId: "1:748332923160:web:3d7b7818b7a75265b2066d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// -----------------------------
// SIGNUP FUNCTION
// -----------------------------
export async function signupUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Account Created Successfully!");
    window.location.href = "homepage.html";
  } catch (error) {
    alert(error.message);
  }
}

// -----------------------------
// LOGIN FUNCTION
// -----------------------------
export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Welcome Vizaryon!");
    window.location.href = "homepage.html";
  } catch (error) {
    alert(error.message);
  }
}

// -----------------------------
// AUTO LOGIN REDIRECT
// -----------------------------
onAuthStateChanged(auth, (user) => {
  if (user && window.location.pathname.includes("login.html")) {
    window.location.href = "homepage.html";
  }
});
