import { createContext, useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

import { getDataSolicitud } from "../api/firebaseConfig";

export const SolicitudContext = createContext()


const SolicitudContext = ({ children }) => {



    const getSolicitud = async () => {
        try {
            const res = await getDataSolicitud();
            setEventos(res)

        } catch (error) {

        }
    }


    useEffect(() => {

        getSolicitud()

    }, [])


    return (
        <div>SolicitudContex</div>
    )
}

export default SolicitudContext