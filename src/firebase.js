// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBO6tLFDhQJYQ7Sua8_ozEdzRQsaktVHlI",
    authDomain: "netflix-clone-25824.firebaseapp.com",
    projectId: "netflix-clone-25824",
    storageBucket: "netflix-clone-25824.appspot.com",
    messagingSenderId: "286858574261",
    appId: "1:286858574261:web:8c61b5ad04424aa0df41fc",
    measurementId: "G-DD3KCWXHCF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};

export default db;