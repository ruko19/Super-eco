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

    const handleTomarTrabajo = () => {

        Swal.fire(
            'Super has tomado este trabajo',
            "<p></p>",

            'info'
        )
        setPuntos(puntos + 10)
    }


    return (
        <div className='w-full h-screen p-12'>
            <table className='w-full'>
                <thead>
                    <tr className='text-3xl'>
                        <td>Nombre de la Empresa</td>
                        <td>Contacto</td>
                        <td>Horaio</td>
                        <td>Ubicacion</td>

                    </tr>
                </thead>
                <tbody className=''>
                    {
                        alianzas.map(({ name, rut, correo, contacto, id, ubicacion, horario }) => (
                            <tr className='bg-yellow-200 ' key={rut}>
                                <td className='border border-gray-500 text-lg px-4'>{name}</td>

                                <td className='border border-gray-500 text-lg px-4'>{contacto}</td>
                                <td className='border border-gray-500 text-lg px-4'>
                                    <ul>
                                        <li>{horario[0]}</li>
                                        <li>{horario[1]}</li>
                                    </ul>
                                </td>

                                <td className='border border-gray-500 text-lg px-4'>{ubicacion[0]}</td>
                                { }
                                <td onClick={() => { handleDelete(id) }} className='border border-gray-500 p-6'>
                                    <div>

                                        <BiSelectMultiple onClick={handleTomarTrabajo} className='cursor-pointer text-5xl text-green-500' />
                                        <p>Completa esta tarea.</p>


                                    </div>
                                </td>
                            </tr>

                        ))

                    }



                </tbody>
            </table>
        </div>
    )
}

export default EmpresasRecuperador
