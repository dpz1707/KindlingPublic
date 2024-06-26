import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials);
}

export default firebase;
