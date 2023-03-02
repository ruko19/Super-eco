// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHrqLvDbX5_wYv6L_eVtQi7eEi2VxSHcs",
    authDomain: "rrop-app.firebaseapp.com",
    projectId: "rrop-app",
    storageBucket: "rrop-app.appspot.com",
    messagingSenderId: "656131921632",
    appId: "1:656131921632:web:49dc1ef573e76fe0d56285",
    measurementId: "G-ZGSZHWLTCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);