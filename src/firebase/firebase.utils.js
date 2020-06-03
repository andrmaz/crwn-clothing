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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        };
    }
    return userRef;   
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error.message, error.code)
});

export default firebase;