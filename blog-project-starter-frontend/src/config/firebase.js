import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb5S1SjCWtVub2-5EBvNfVzV7meESto2s",
  authDomain: "blog-portfoilo.firebaseapp.com",
  projectId: "blog-portfoilo",
  storageBucket: "blog-portfoilo.firebasestorage.app",
  messagingSenderId: "639837804847",
  appId: "1:639837804847:web:e1b9939fc7b35dcf31a9da",
  measurementId: "G-WDWD70PFL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication
export const auth = getAuth(app);
export default app;