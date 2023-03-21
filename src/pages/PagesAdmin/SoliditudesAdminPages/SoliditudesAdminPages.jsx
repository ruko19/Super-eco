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

        <>
            <div className='w-full h-screen p-12'>
                <div className=' bg-white'>
                    <div className='flex justify-between items-center'>
                        <div className='mb-10'>
                            <h2 className='text-6xl font-medium'>Solicitudes</h2>
                            <p className='font-light'>En caso de llegar a un acuerdo de una alianza <br /> con la empresa por favor registra la empresa y sino por favor elimina la solicitud.</p>
                        </div>
                        <button onClick={mostrarModal} className='bg-green-600 py-2 px-6 text-white'>Registrar empresas</button>
                    </div>

                    {/* <table className='table  w-full'>
                        <thead>
                            <tr className='text-4xl'>
                                <td>Nombre de la Empresa</td>
                                <td>RUT</td>
                                <td>Correo</td>
                                <td>Contacto</td>
                            </tr>
                        </thead>
                        <tbody className=''>
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
                    </table> */}


                    <div className="container ">
                        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                            <thead className="text-white">
                                {
                                    solicitud.map(({ name, rut, correo, telefono, id }) => (
                                        <tr className="bg-green-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" key={id}>
                                            <th className="p-3 text-left">Nombre de la Empresa</th>
                                            <th className="p-3 text-left">RUT</th>
                                            <th className="p-3 text-left">Correo</th>
                                            <th className="p-3 text-left">Contacto</th>
                                            <th className="p-3 text-left" >Eliminar</th>
                                        </tr>
                                    ))
                                }
                            </thead>
                            <tbody className="flex-1 sm:flex-none">
                                {
                                    solicitud.map(({ name, rut, correo, telefono, id }) => (
                                        <tr className='flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0' key={id}>
                                            <td className='border-grey-light border hover:bg-gray-100 p-3'>{name}</td>
                                            <td className='border-grey-light border hover:bg-gray-100 p-3'>{rut}</td>
                                            <td className='border-grey-light border hover:bg-gray-100 p-3'>{correo}</td>
                                            <td className='border-grey-light border hover:bg-gray-100 p-3'>{telefono}</td>
                                            <td onClick={() => { handleDelete(id) }} className='border-grey-light border hover:bg-gray-100 p-3'><MdDeleteOutline className='cursor-pointer text-5xl text-red-500' /></td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {modalAlianza && <ModalEmpresaRegistro setModalAlianza={setModalAlianza} />}
            </div>
        </>


    )
}

export default SoliditudesAdminPages