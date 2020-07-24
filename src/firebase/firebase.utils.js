import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCay89Sm-S_-LXEeODZXLykY-YqiQXGPcg',
  authDomain: 'crwn-8681f.firebaseapp.com',
  databaseURL: 'https://crwn-8681f.firebaseio.com',
  projectId: 'crwn-8681f',
  storageBucket: 'crwn-8681f.appspot.com',
  messagingSenderId: '297869943474',
  appId: '1:297869943474:web:d0a42b799e7e5aaf689fab',
  measurementId: 'G-YLC77XM2Y1',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
