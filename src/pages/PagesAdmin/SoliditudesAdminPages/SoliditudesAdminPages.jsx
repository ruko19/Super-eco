import React, { useEffect, useState } from 'react'
import useSolicitud from '../../../hooks/useSolicitud'
import { MdDeleteOutline } from "react-icons/md";
import ModalEmpresaRegistro from '../../../components/ModalEmpresaRegistro/ModalEmpresaRegistro';

const SoliditudesAdminPages = () => {

    const { solicitud, eliminarSolicitud, getSolicitud } = useSolicitud();
    const [modalAlianza, setModalAlianza] = useState(false)

    const handleDelete = async (id) => {
        await eliminarSolicitud(id)
        getSolicitud();
    }

    const mostrarModal = () => {
        setModalAlianza(true)
    }
    return (

        <div className='w-full h-screen p-12'>
            <div className=' bg-white'>
                <div className='flex justify-between items-center'>
                    <div className='mb-10'>
                        <h2 className='text-6xl font-medium'>Solicitudes</h2>
                        <p className='font-light'>En caso de llegar a un acuerdo de una alianza con la empresa por favor registra la empresa</p>
                    </div>
                    <button onClick={mostrarModal} className='bg-green-600 py-2 px-6 text-white'>Registrar empresas</button>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr className='text-4xl'>
                            <td>Nombre de la Empresa</td>
                            <td>RUT</td>
                            <td>Correo</td>
                            <td>Contacto</td>
                        </tr>
                    </thead>
                    <tbody className='p-'>
                        {
                            solicitud.map(({ name, rut, correo, telefono, id }) => (
                                <tr className='bg-yellow-200 ' key={rut}>
                                    <td className='border border-gray-500 p-6'>{name}</td>
                                    <td className='border border-gray-500 p-6'>{rut}</td>
                                    <td className='border border-gray-500 p-6'>{correo}</td>
                                    <td className='border border-gray-500 p-6'>{telefono}</td>
                                    <td onClick={() => { handleDelete(id) }} className='border border-gray-500 p-6'><MdDeleteOutline className='cursor-pointer text-5xl text-red-500' /></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {modalAlianza && <ModalEmpresaRegistro setModalAlianza={setModalAlianza} />}
        </div>
    )
}

export default SoliditudesAdminPages