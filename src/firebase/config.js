import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdU0twzCACprxkScMynXvBw4ZsYbRFYMQ',
  authDomain: 'money-finance-fe11e.firebaseapp.com',
  projectId: 'money-finance-fe11e',
  storageBucket: 'money-finance-fe11e.appspot.com',
  messagingSenderId: '905201196626',
  appId: '1:905201196626:web:022527e7783b403f2c098b',
};

// init firebase
firebase.initializeApp(firebaseConfig);
// init service

const projectFirestore = firebase.firestore();

export { projectFirestore };
