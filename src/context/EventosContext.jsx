
import { createContext, useState, useEffect } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

import { getData } from "../api/firebaseConfig";

export const EventosContext = createContext()



export const EventosProvider = ({ children }) => {

    const [eventos, setEventos] = useState([]);

    const getEventos = async () => {
        try {
            const res = await getData();
            setEventos(res)
        } catch (error) {

        }
        console.log(eventos);
    }
    useEffect(() => {

        getEventos()

    }, [])



    const createEvento = async (idEvento, newEvento) => {
        await setDoc(doc(db, "eventos", `${idEvento}`), newEvento);

    }


    return (
        <EventosContext.Provider value={{ eventos, createEvento }}>
            {children}
        </EventosContext.Provider>
    )

}