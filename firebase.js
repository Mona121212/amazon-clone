// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBAzHhgz230ikC5fNMzNKcqsbpuh3LVl1c",
  authDomain: "challenge-7b241.firebaseapp.com",
  projectId: "challenge-7b241",
  storageBucket: "challenge-7b241.appspot.com",
  messagingSenderId: "590887176765",
  appId: "1:590887176765:web:b9df9e3ec61aacbabc7854",
  measurementId: "G-R2KHNB0ST7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
