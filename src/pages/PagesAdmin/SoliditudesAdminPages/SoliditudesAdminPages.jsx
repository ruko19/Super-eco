import React, { useEffect, useState } from 'react'
import useSolicitud from '../../../hooks/useSolicitud'
import { MdDeleteOutline } from "react-icons/md";

const SoliditudesAdminPages = () => {

    const { solicitud } = useSolicitud();

    const handleDelete = () => {

    }




    return (

        <div className='w-full h-screen '>
            <div className=' bg-white'>
                <h2 className='text-6xl font-medium mb-10'>Solicitudes</h2>

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
                            solicitud.map(({ name, rut, correo, telefono }) => (
                                <tr className='bg-yellow-200 ' key={rut}>

                                    <td className='border border-gray-500 p-6'>{name}</td>
                                    <td className='border border-gray-500 p-6'>{rut}</td>
                                    <td className='border border-gray-500 p-6'>{correo}</td>
                                    <td className='border border-gray-500 p-6'>{telefono}</td>
                                    <td onClick={handleDelete} className='border border-gray-500 p-6'><MdDeleteOutline className='cursor-pointer text-5xl text-red-500' /></td>

                                </tr>

                            ))

                        }



                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default SoliditudesAdminPages