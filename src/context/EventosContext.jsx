
import { createContext, useState, useEffect } from "react";

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

    return (
        <EventosContext.Provider value={{ eventos }}>
            {children}
        </EventosContext.Provider>
    )

}