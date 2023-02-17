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

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistance error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
