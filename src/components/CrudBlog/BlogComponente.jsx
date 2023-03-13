import FormularioEditarBlog from "./FormularioEditarBlog"
import ListaBlog from "./ListaBlog"
import { useState } from "react"
import ModalBlogRegistro from "./ModalBlogRegistro"

const BlogComponente = () => {
    const [modalBlog, setModalBlog] = useState(false)

    const mostrarModallBlog = () => {
        setModalBlog(true)
    }

    return (
        <>
            <div className="mt-36">
                <button
                    onClick={() => mostrarModallBlog()}
                    className="mb-12 uppercase bg-gray-500 p-3 rounded-lg text-white">Insertar nuevo Blog</button>
                <div className="md:flex justify-between">
                    <FormularioEditarBlog />
                    <ListaBlog />
                </div>
            </div>

            {modalBlog ? <ModalBlogRegistro setModalBlog={setModalBlog} /> : ""}
        </>
    )
}

export default BlogComponente
