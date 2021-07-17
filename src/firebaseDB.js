import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMm7flVubO0U3o7j8FW7opEWEnDmKhs-k",
    authDomain: "crud-contactos.firebaseapp.com",
    projectId: "crud-contactos",
    storageBucket: "crud-contactos.appspot.com",
    messagingSenderId: "588696572859",
    appId: "1:588696572859:web:b99c690fae1b4ac650aa9e",
    measurementId: "G-0YZ4LPDCE2"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();