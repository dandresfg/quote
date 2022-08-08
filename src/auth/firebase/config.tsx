import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyD-4L7VEMkkPsWhxogHGa-wqRvAD8lXHpM",
    authDomain: "smartblockquote.firebaseapp.com",
    projectId: "smartblockquote",
    storageBucket: "smartblockquote.appspot.com",
    messagingSenderId: "291839492777",
    appId: "1:291839492777:web:4a124b75262dece5119fb8"
};

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)
const provider = new GoogleAuthProvider();

export { auth, provider, firebase };