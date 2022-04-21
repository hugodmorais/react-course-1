import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-Do-8UZXBnvcgNWW7L3HYNJDAq-CqBZ8",
    authDomain: "react-course-1-hm.firebaseapp.com",
    databaseURL: "https://react-course-1-hm-default-rtdb.firebaseio.com"
  }
);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;