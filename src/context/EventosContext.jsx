
// import { createContext, useState, useEffect } from "react";

// import { getData } from "../api/firebaseConfig";

// export const EventosContext = createContext()



// export const EventosProvider = ({ children }) => {

//     const [eventos, setEventos] = useState([]);

//     const getEventos = async () => {
//         try {
//             const res = await getData();
//             setEventos(res.data)
//         } catch (error) {

//         }
//     }

//     useEffect(() => {

//         getEventos()

//     }, [])

//     return (
//         <EventosContext.Provider value={{ eventos, getEventos }}>
//             {children}
//         </EventosContext.Provider>
//     )

// }