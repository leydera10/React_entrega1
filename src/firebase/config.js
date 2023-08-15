
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBiDAIysqaTbw6KNv6SqAQwyRTkM8xjBK8",
  authDomain: "myapp-118ed.firebaseapp.com",
  projectId: "myapp-118ed",
  storageBucket: "myapp-118ed.appspot.com",
  messagingSenderId: "691662177365",
  appId: "1:691662177365:web:6d16544dcb3111524700dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);