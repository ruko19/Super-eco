import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "@firebase/firestore";

import { createContext, useEffect, useState } from "react";

import { db, getDataBlogs } from "../api/firebaseConfig";



export const BlogContext = createContext();


export const BlogProvider = ({ children }) => {



    const [blogs, setBlogs] = useState([])


    const [id, setId] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [titulo, setTitulo] = useState("")
    const [image, setImage] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [blogId, setBlogId] = useState("")



    // obtener blogs

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


    // crearBlog

    const createBlog = async (idBlog, newBlog) => {

        await setDoc(doc(db, "blogs", `${idBlog}`), newBlog);
        fechDataBlogs()
    }

    // eliminarBlog
    const eliminarBlog = async (idBlog) => {
        await deleteDoc(doc(db, "blogs", idBlog))
    }


    // editarBlog
    const editarBlog = async (idBlog, newFields) => {
        await updateDoc(doc(db, "blogs", idBlog), newFields)
    }


    // funcion para hacer peticion de la data de collecion blog


    return (
        <BlogContext.Provider value={{
            setBlogs,
            blogs,
            createBlog,
            eliminarBlog,
            editarBlog,
            id,
            setId,
            dia,
            setDia,
            mes,
            setMes,
            titulo,
            setTitulo,
            image,
            setImage,
            descripcion,
            setDescripcion,
            blogId,
            setBlogId,
            fechDataBlogs,



        }}>
            {children}
        </BlogContext.Provider>
    )
}