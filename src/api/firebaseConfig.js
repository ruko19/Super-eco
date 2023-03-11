// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  Firestore,
} from "firebase/firestore";

// import { getEventos } from "../features/eventos/eventosSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR568TuEg3P1v_Qe2YwST25cShjH2WNoM",
  authDomain: "practicafirebase-872d8.firebaseapp.com",
  projectId: "practicafirebase-872d8",
  storageBucket: "practicafirebase-872d8.appspot.com",
  messagingSenderId: "783857961251",
  appId: "1:783857961251:web:2562d65b7bc7662ef5e496",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const database = getFirestore(app);

export const db = getFirestore(app);

export const getData = async () => {
  const snapshot = await getDocs(collection(db, "eventos"));
  const data = [];

  snapshot.forEach((doc) => {
    const evento = doc.data();
    data.push({ ...evento });
  });

  return data;
};


export const getDataBlogs = async () => {
  const snapshot = await getDocs(collection(db, "blogs"));
  const data = [];

  snapshot.forEach((doc) => {
    const blog = doc.data();
    data.push({ ...blog });
  });

  return data;
};

// export const fetchEventos = () => async (dispatch) => {
//   const snapshot = await getDocs(collection(db, "eventos"));
//   const data = [];

//   snapshot.forEach((doc) => {
//     const evento = doc.data();
//     data.push({ ...evento });
//   });

//   dispatch(getEventos(data));
// };

// export const addData = () => async (dispatch) => {
//   const snapshotAdd = await addDoc(doc(db, "eventos"))
// }

// export const addData = () => async (dispatch) => {
//   await add(collection(db, { dispatch }))

// }
