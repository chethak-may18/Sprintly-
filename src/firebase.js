import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyArppxf-cg2eKvxjb2pAHHqXe8EuFC_Z8M",
  authDomain: "sprintly-2026.firebaseapp.com",
  projectId: "sprintly-2026",
  storageBucket: "sprintly-2026.firebasestorage.app",
  messagingSenderId: "1000077088022",
  appId: "1:1000077088022:web:8c3d67278b7987c884ac37"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
