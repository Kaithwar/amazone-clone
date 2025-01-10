// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfMF6MIo90VNU4skMoaSS4PLqozvF09GM",
  authDomain: "clone-75c00.firebaseapp.com",
  projectId: "clone-75c00",
  storageBucket: "clone-75c00.appspot.com",
  messagingSenderId: "396452959871",
  appId: "1:396452959871:web:bdccaeb02754df86c6914a",
  measurementId: "G-J5GDNTTRVP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };