import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import { getDataRecuperadores } from "../api/firebaseConfig";

export const RecuperadoresContext = createContext();

export const RecuperadoresProvider = ({ children }) => {

    const [recuperadores, setRecuperadores] = useState([]);
    const [logueado, setLogeado] = useState(false)

    ////// obtener recuperdor
    const getRecuperadores = async () => {
        try {
            const res = await getDataRecuperadores();
            setRecuperadores(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRecuperadores()
    }, [])


    ////// agregar recuperadores a la base de datos
    const addRecuperador = async (newRecuperador) => {
        await addDoc(collection(db, "recuperadores"), newRecuperador);
        getRecuperadores()
    }


    // elimiar un nuevo registro
    const eliminarRecuperador = async (id) => {
        await deleteDoc(doc(db, "recuperadores", id))
    }

    return (
        <RecuperadoresContext.Provider value={{ addRecuperador, recuperadores, getRecuperadores, eliminarRecuperador, logueado, setLogeado }}>
            {children}
        </RecuperadoresContext.Provider>
    )
}