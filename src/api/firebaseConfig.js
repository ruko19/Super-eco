// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, setDoc, addDoc, Firestore } from "firebase/firestore";

// import { getEventos } from "../features/eventos/eventosSlice";
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
  measurementId: "G-ZGSZHWLTCQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const database = getFirestore(app);

const db = getFirestore(app);


export const getData = async () => {
  const snapshot = await getDocs(collection(db, "eventos"));
  const data = [];

  snapshot.forEach(doc => {
    const evento = doc.data()
    data.push({ ...evento })
  })

  return data

}

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