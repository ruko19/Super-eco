import React, { useState } from 'react'
import { BiSelectMultiple } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useAlianzas } from '../../../hooks/useAlianzas'
import useRecuperador from '../../../hooks/useRecuperador';

const EmpresasRecuperador = () => {

    const [trabajoTomado, setTrabajoTomado] = useState(false);

    const { alianzas } = useAlianzas();
    const { puntos, setPuntos } = useRecuperador()

    const handleTomarTrabajo = (name) => {
        Swal.fire(
            `Super has tomado este trabajo de la empresa ${name}`,
            "<p></p>",
            'info'
        )
        setPuntos(puntos + 10)
        setTrabajoTomado(true)
    }


    return (
        <div className='w-full h-screen p-12'>
            <div className="container">
                <table className='w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5'>
                    <thead>
                        {
                            alianzas.map(({ name, rut, correo, contacto, id, ubicacion, horario }) => (
                                <tr className="bg-green-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 text-xl text-white" key={rut}>
                                    <th className="p-3 text-left">Nombre de la Empresa</th>
                                    <th className="p-3 text-left">Contacto</th>
                                    <th className="p-3 text-left">Horaio</th>
                                    <th className="p-3 text-left">Ubicacion</th>
                                    <th className="p-3 text-left">Tomar trabajo</th>
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody className=''>

                        {
                            alianzas.map(({ name, rut, correo, contacto, id, ubicacion, horario }) => (
                                <tr className='flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-xl' key={rut}>
                                    <td className='border-grey-light border hover:bg-gray-100 p-3'>{name}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 p-2 md:p-3'>{contacto}</td>
                                    <td className='border-grey-light border hover:bg-gray-100 md:p-2'>
                                        <ul>
                                            <li>{horario[0]}</li>
                                            <li>{horario[1]}</li>
                                        </ul>
                                    </td>
                                    <td className='border-grey-light border hover:bg-gray-100 p-2'>{ubicacion[0]}</td>
                                    { }
                                    <td className='border-grey-light border hover:bg-gray-100 md:p-2'>
                                        <div>

                                            <BiSelectMultiple onClick={() => handleTomarTrabajo(name)} className='cursor-pointer text-4xl text-green-500' />
                                            <p>toma este trabajo</p>


                                        </div>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmpresasRecuperador
