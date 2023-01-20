import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// nothing here is secret :)
export const FirebaseMuse = firebase.initializeApp({
  apiKey: "AIzaSyDfzvvLjwkfHBmkA7go0DawuE5yS1k-H48",
  authDomain: "nifty-depth-375204.firebaseapp.com",
  projectId: "nifty-depth-375204",
  storageBucket: "nifty-depth-375204.appspot.com",
  messagingSenderId: "21068523860",
  appId: "1:21068523860:web:c031a263d27041956580c1",
  measurementId: "G-ZP4BGK1MLF",
}, 'muse')
