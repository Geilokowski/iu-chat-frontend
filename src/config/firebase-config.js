import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyA4kBJ5A7b_dTYqe5DZHJEUoL_c-bBEenM",
    authDomain: "iu-chat-demo.firebaseapp.com",
    projectId: "iu-chat-demo",
    storageBucket: "iu-chat-demo.appspot.com",
    messagingSenderId: "793752187843",
    appId: "1:793752187843:web:d70abed6a2b396df0c0376"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const messageCollection = collection(db, "messages");

export {messageCollection}