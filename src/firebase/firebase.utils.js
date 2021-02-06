import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADj4US3ysZl3BTy-u4vmfyocHsUdU9fa8",
    authDomain: "musk-db.firebaseapp.com",
    projectId: "musk-db",
    storageBucket: "musk-db.appspot.com",
    messagingSenderId: "682928227095",
    appId: "1:682928227095:web:b4efe944486d8f9c6aed52",
    measurementId: "G-2PL421Y945"
  };

  export const createUserProfileDocument = async(userAuth , additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();
if(!snapShot.exists){
    const {displayName , email} = userAuth;
    const createdAt =new Date();

try{
    await userRef.set({
        displayName,email,createdAt,...additionalData
    })
}catch(error){

}

}

return userRef;
  }

  export const addCollectionAndDocuments = (collectionKey, objectsToAdd ) =>{
      const collectionRef = firestore.collection(collectionKey);
const batch =firestore.batch();
objectsToAdd.forEach(obj => {
    const ref = collectionRef.doc();
    batch.set(ref,obj);
    
});

batch.commit();

  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;