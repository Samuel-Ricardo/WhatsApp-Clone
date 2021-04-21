import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore'

import firebase_config from './firebase_config';

const firebaseapp = firebase.initializeApp(firebase_config)
const database = firebase.firestore()
