import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(atob(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_SECRET))
    ),
  });
}

export const firestore = admin.firestore();
export const auth = admin.auth();

export default { firestore, auth };
