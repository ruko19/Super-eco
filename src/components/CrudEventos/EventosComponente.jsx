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
                {/* <table className="w-full text-center table">
                    <thead className="uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Organizador</th>
                            <th scope="col" className="px-6 py-3">Fecha</th>
                            <th scope="col" className="px-6 py-3">Lugar</th>
                            <th scope="col" className="px-6 py-3">Nombre evento</th>
                            <th scope="col" className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Gokú</td>
                            <td className="px-6 py-4">1/4/2023</td>
                            <td className="px-6 py-4">Planeta namek</td>
                            <td className="px-6 py-4">Frezzer vs gokú</td>
                            <td className="px-6 py-4">
                                <button className="bg-blue-500 p-3 rounded-lg text-white">Editar</button>{"  "}
                                <button className="bg-red-500 p-3 rounded-lg text-white">Elimar</button>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
            </div>

            {modal ? <ModalEventosRegistro handleBorrarModal={handleBorrarModal} /> : ""}


        </>
    )
}

export default EventosComponente
