import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDGNMZRUITZOOTESYvvBrRoTZiH-zzYPnQ",
    authDomain: "crwn-db-75ac0.firebaseapp.com",
    databaseURL: "https://crwn-db-75ac0.firebaseio.com",
    projectId: "crwn-db-75ac0",
    storageBucket: "crwn-db-75ac0.appspot.com",
    messagingSenderId: "314176907033",
    appId: "1:314176907033:web:0eea6127bedb3b9e01c788",
    measurementId: "G-RD6Y91GWSX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// acces to GoogleAuthProvider from authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// we want to always trigger the Google pop up whenever we use GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account' });

// taking provider class for popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;