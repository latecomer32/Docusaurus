import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = (afterAction = () => {}) => {
  signOut(auth).then((r) => afterAction(null));
};

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    if (user.uid !== "xnUWtpimJuMl4bQxM6qehHPclWf1") {
      alert("로그인 권한이 없습니다.");
      logout(() => window.location.reload());
    }

    // ...
  } else {
    // User is signed out
    // ...
  }
});
