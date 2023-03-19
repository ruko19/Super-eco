import { createContext, useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

import { getDataSolicitud } from "../api/firebaseConfig";

export const SolicitudContext = createContext()


export const SolicitudProvider = ({ children }) => {


    const [solicitud, setSolicitud] = useState([])

    const getSolicitud = async () => {
        try {
            const res = await getDataSolicitud();
            setSolicitud(res)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        getSolicitud()

    }, [])

    // Crear un nuevo registro

    const RegistroEmpresa = async (newRegisterEMp) => {
        await addDoc(collection(db, "solicitudes"), newRegisterEMp);
        getSolicitud();
    }

    // elimiar un nuevo registro
    const eliminarSolicitud = async (id) => {
        await deleteDoc(doc(db, "solicitudes", id))
    }


    return (
        <SolicitudContext.Provider value={{
            solicitud,
            RegistroEmpresa,
            eliminarSolicitud,
            getSolicitud
        }}>
            {children}

        </SolicitudContext.Provider>

    )
}

