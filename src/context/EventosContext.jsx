
import { createContext, useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

import { getData } from "../api/firebaseConfig";

export const EventosContext = createContext()



export const EventosProvider = ({ children }) => {

    const [eventos, setEventos] = useState([]);

    const [id, setId] = useState("")
    const [organizador, setOrganizador] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [titulo, setTitulo] = useState("")
    const [lugar, setLugar] = useState("")

    //obtener evento
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

    //crear evento
    const createEvento = async (idEvento, newEvento) => {
        await setDoc(doc(db, "eventos", `${idEvento}`), newEvento);
        getEventos();
    }

    //eliminar evento
    const eliminarEvento = async (idEvento) => {
        await deleteDoc(doc(db, "eventos", idEvento))
    }

    //editar evento


    return (
        <EventosContext.Provider value={{ eventos, createEvento, eliminarEvento, getEventos, id, setId, organizador, setOrganizador, dia, setDia, mes, setMes, titulo, setTitulo, lugar, setLugar }}>
            {children}
        </EventosContext.Provider>
    )

}