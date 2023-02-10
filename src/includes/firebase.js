"use strict";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import setup from "./.firebaseSdk.js";

const firebaseConfig = {
  apiKey: setup.FIREBASE_API_KEY,
  authDomain: setup.FIREBASE_AUTH_DOMAIN,
  projectId: setup.FIREBASE_PROJECT_ID,
  storageBucket: setup.FIREBASE_STORAGE_BUCKET,
  appId: setup.FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");

export { auth, db, usersCollection, storage };
