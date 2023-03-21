import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { useAlianzas } from '../../../hooks/useAlianzas';


const AlianzasAdmin = () => {
    const { alianzas, getAlianzas, eliminarAlianza } = useAlianzas()


    const handleDelete = async (id) => {
        await eliminarAlianza(id)
        getAlianzas();
    }


    return (
        <div className='w-full h-screen p-12'>
            <div className=''>
                <h2 className='text-6xl font-medium mb-10'>Alianzas</h2>
                <table className='w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5'>
                    <thead>
                        {
                            alianzas.map(({ name, rut, correo, contacto, id, ubicacion, horario }) => (
                                <tr className="text-white bg-green-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 text-xl" key={id}>
                                    <th className="p-3 text-left">Nombre de la Empresa</th>
                                    <th className="p-3 text-left">RUT</th>
                                    <th className="p-3 text-left">Correo</th>
                                    <th className="p-3 text-left">Contacto</th>
                                    <th className="p-3 text-left">Horaio</th>
                                    <th className="p-3 text-left">Ubicacion</th>
                                    <th className="p-3 text-left">Coordenadas</th>
                                    <th className="p-3 text-left" >Eliminar</th>
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody className='flex-1 sm:flex-none'>

                        {
                            alianzas.map(({ name, rut, correo, contacto, id, ubicacion, horario }) => (
                                <tr className='flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-xl' key={rut}>
                                    <td className='border-grey-light border hover:bg-gray-100 p-3'>{name}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 p-3'>{rut}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 p-3'>{correo}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 p-3'>{contacto}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 p-2'>
                                        <ul>
                                            <li>{horario[0]}</li>
                                            <li>{horario[1]}</li>
                                        </ul>
                                    </td>
                                    <td className='border-grey-light border hover:bg-gray-100 md:p-3 '>{ubicacion[0]}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 md:p-3'>
                                        <ul>
                                            <li><span>Lat= </span>{ubicacion[1].coordenada1}</li>
                                            <li><span>long= </span>{ubicacion[1].coordenada2}</li>
                                        </ul>
                                    </td>
                                    <td onClick={() => { handleDelete(id) }} className='border-grey-light border hover:bg-gray-100 p-3'><MdDeleteOutline className='cursor-pointer text-3xl text-red-500' /></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AlianzasAdmin