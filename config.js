import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBAm17uYLd-cdHp_NQ0gO-NPrYpUVoSU04",
    authDomain: "native-upload-image.firebaseapp.com",
    projectId: "native-upload-image",
    storageBucket: "native-upload-image.appspot.com",
    messagingSenderId: "1063822362096",
    appId: "1:1063822362096:web:0b5e35e6b717fdbd9e8935"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export {firebase}