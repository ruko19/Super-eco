import FormularioEditarBlog from "./FormularioEditarBlog"
import ListaBlog from "./ListaBlog"
import { useState } from "react"
import ModalBlogRegistro from "./ModalBlogRegistro"

const BlogComponente = () => {
    const [modal, setModal] = useState(false)

    const mostrarModal = () => {
        setModal(true)
    }

    const handleBorrarModal = () => {
        setModal(false)
    }

    return (
        <>
            <div className="mt-36">
                <button
                    onClick={() => mostrarModal()}
                    className="mb-12 uppercase bg-gray-500 p-3 rounded-lg text-white">Insertar nuevo Blog</button>
                <div className="md:flex justify-between">
                    <FormularioEditarBlog />
                    <ListaBlog />
                </div>
            </div>

            {modal ? <ModalBlogRegistro handleBorrarModal={handleBorrarModal} /> : ""}
        </>
    )
}

export default BlogComponente
