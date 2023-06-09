
import { createContext, useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";
import { getDataAlianzas } from "../api/firebaseConfig";

export const AlianzasContext = createContext();


export const AlianzasProvider = ({ children }) => {

    const [alianzas, setAlianzas] = useState([]);


    const getAlianzas = async () => {

        try {
            const res = await getDataAlianzas();
            setAlianzas(res)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAlianzas();
    }, [])



    // crear un nuevo registro empresa

    const createAlianza = async (newAlianza) => {
        await addDoc(collection(db, "alianzas"), newAlianza);
        getAlianzas();
    }


    // elimiar un nuevo registro
    const eliminarAlianza = async (id) => {
        await deleteDoc(doc(db, "alianzas", id))
    }

    return (

        <AlianzasContext.Provider
            value={{
                alianzas,
                createAlianza,
                getAlianzas,
                eliminarAlianza
            }}>
            {children}
        </AlianzasContext.Provider>

    )
}