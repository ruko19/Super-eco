import { collection, getDocs } from "@firebase/firestore";

import { createContext, useEffect, useState } from "react";

import { db, getDataBlogs } from "../api/firebaseConfig";



export const BlogContext = createContext();


export const BlogProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([])




    const fechDataBlogs = async () => {

        try {
            const res = await getDataBlogs()
            setBlogs(res)

        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fechDataBlogs()


    }, [])






    // funcion para hacer peticion de la data de collecion blog


    return (
        <BlogContext.Provider value={{ setBlogs, blogs }}>
            {children}
        </BlogContext.Provider>
    )
}