"use strict";
import firebase from "firebase/app";
import "firebase/auth";
import setup from "./.firebaseSdk.js";

const firebaseConfig = {
  apiKey: setup.FIREBASE_API_KEY,
  authDomain: setup.FIREBASE_AUTH_DOMAIN,
  projectId: setup.FIREBASE_PROJECT_ID,
  storageBucket: setup.FIREBASE_STORAGE_BUCKET,
  appId: setup.FIREBASE_APP_ID,
};

console.log("firebaseConfig", firebaseConfig);

export default firebase.initializeApp(firebaseConfig);
