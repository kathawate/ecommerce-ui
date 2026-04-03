import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../../../config/firebase";

const provider = new GoogleAuthProvider();

// ✅ Google Login
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  return result.user.getIdToken();
};

// ✅ Email Login
export const loginWithEmail = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user.getIdToken();
};

// ✅ Email Signup
export const signupWithEmail = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user.getIdToken();
};

// ✅ Logout
export const logout = () => signOut(auth);