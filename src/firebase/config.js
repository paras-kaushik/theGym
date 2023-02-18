import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX8ZOaQJTptcLUlPD-jo7KfCsC-P1a_LU",
  authDomain: "thegym-2493c.firebaseapp.com",
  projectId: "thegym-2493c",
  storageBucket: "thegym-2493c.appspot.com",
  messagingSenderId: "566189469998",
  appId: "1:566189469998:web:9cc88d4d160fd2e05a0abf",
  measurementId: "G-QK3Q1W1L7T"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth();
const projectStorage=firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage ,timestamp }
