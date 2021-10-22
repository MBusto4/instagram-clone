// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUUfKVwbZgGl8z3l3ccVXNDEIQmgXJr0M",
    authDomain: "instagram-clone-44c18.firebaseapp.com",
    projectId: "instagram-clone-44c18",
    storageBucket: "instagram-clone-44c18.appspot.com",
    messagingSenderId: "26219758188",
    appId: "1:26219758188:web:feb11f9cda10b5e1e74e49"
};

// Initialize Firebase
//get the apps we initialized if the length of that is null initialize a new app otherwise use the current app 
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }