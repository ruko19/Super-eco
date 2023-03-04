import { useState } from "react"
import FormularioEditar from "./FormularioEditar"
import ModalEventosRegistro from "./ModalEventosRegistro"
import ListaEventos from "./ListaEventos"


const EventosComponente = () => {

    const [modal, setModal] = useState(false)

    const mostrarModal = () => {
        setModal(true)
    }

    const handleBorrarModal = () => {
        setModal(false)
    }

    return (
        <>
            <div>
                <button
                    onClick={() => mostrarModal()}
                    className="mb-12 uppercase bg-blue-500 p-3 rounded-lg text-white">Insertar nuevo evento</button>
                <div className="md:flex justify-between">
                    <FormularioEditar />
                    <ListaEventos />
                </div>
            </div>

            {modal ? <ModalEventosRegistro handleBorrarModal={handleBorrarModal} /> : ""}
        </>
    )
}

export default EventosComponente
