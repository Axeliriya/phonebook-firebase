import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApTjqTqOjNePafmmQm7MRWbf2zJ_AkGac',
  authDomain: 'axeliriya-phonebook.firebaseapp.com',
  databaseURL: 'https://axeliriya-phonebook-default-rtdb.firebaseio.com',
  projectId: 'axeliriya-phonebook',
  storageBucket: 'axeliriya-phonebook.appspot.com',
  messagingSenderId: '464116843692',
  appId: '1:464116843692:web:879c17950f3c973c070b09',
};

export const fire = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(fire);

axios.defaults.baseURL = `https://connections-api.herokuapp.com/`;

export const apiService = {
  getCurrentUser() {
    return firebase.auth().currentUser;
  },

  logInUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  registerUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  logOutUser() {
    return firebase.auth().signOut();
  },

  getFetchContacts() {
    return db.collection('contacts').get();
  },

  addContact(contact) {
    return db.collection('contacts').add(contact);
  },

  deleteContact(contactId) {
    return db.collection('contacts').doc(contactId).delete();
  },
};
