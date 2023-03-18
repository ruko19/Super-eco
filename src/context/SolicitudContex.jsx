import { createContext, useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

import { getDataSolicitud } from "../api/firebaseConfig";

export const SolicitudContext = createContext()


export const SolicitudProvider = ({ children }) => {


    const [solicitud, setSolicitud] = useState([])



    const [nombreEmpresa, setNombreEmpresa] = useState("")
    const [rut, setRut] = useState("")
    const [correo, setCorreo] = useState("")
    const [Contacto, setContacto] = useState("")
    const [solicitudReg, setSolicitudReg] = useState("")



    const getSolicitud = async () => {
        try {
            const res = await getDataSolicitud();
            setSolicitud(res)

        } catch (error) {

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


    const eliminarSolicitud = async (idEvento) => {
        await deleteDoc(doc(db, "solicitudes", idEvento))
    }


    return (
        <SolicitudContext.Provider value={{
            solicitud,
            RegistroEmpresa
        }}>
            {children}

        </SolicitudContext.Provider>

    )
}

