// Import the functions you need from the SDKs you need
import * as firebase  from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC53Je42jPPPYTAPgRxB0oXiPaXj0ZqcEI",
  authDomain: "studentstudycommunityapp-6b8cc.firebaseapp.com",
  projectId: "studentstudycommunityapp-6b8cc",
  storageBucket: "studentstudycommunityapp-6b8cc.appspot.com",
  messagingSenderId: "940829156984",
  appId: "1:940829156984:web:e575d69075d2a601202f8d",
  measurementId: "G-FELFSB4XEV"
};
const app = initializeApp(firebaseConfig);

export { firebase};
  

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);