import { addDoc, collection } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import { getDataRecuperadores } from "../api/firebaseConfig";

export const RecuperadoresContext = createContext();

export const RecuperadoresProvider = ({ children }) => {

    const [recuperadores, setRecuperadores] = useState([]);

    ////// obtener recuperdor
    const getEventos = async () => {
        try {
            const res = await getDataRecuperadores();
            setRecuperadores(res)

        } catch (error) {

        }
    }
    useEffect(() => {
        getDataRecuperadores()
    }, [])


    ////// agregar recuperadores a la base de datos
    const addRecuperador = async (newRecuperador) => {
        await addDoc(collection(db, "recuperadores"), newRecuperador);
        getEventos()
    }

    return (
        <RecuperadoresContext.Provider value={{ addRecuperador }}>
            {children}
        </RecuperadoresContext.Provider>
    )
}