
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFNuwRQQwG42m1ES_3bfSuM9xo4pYlab0",  
    authDomain: "olx-app-b11b4.firebaseapp.com",  
    projectId: "olx-app-b11b4",  
    storageBucket: "olx-app-b11b4.appspot.com",  
    messagingSenderId: "317942937490",  
    appId: "1:317942937490:web:d8fe132b27281a4781734b"
  
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app)
 export const db =getFirestore();
  