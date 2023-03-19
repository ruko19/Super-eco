import useRecuperador from "../../../hooks/useRecuperador"
import { MdDeleteOutline } from "react-icons/md";

const RecuperadoresAdmin = () => {

    const { recuperadores, getRecuperadores, eliminarRecuperador } = useRecuperador();

    const handleDelete = async (id) => {
        await eliminarRecuperador(id)
        getRecuperadores();
    }


    return (
        <div className='w-full h-screen p-12'>
            <div className=' bg-white'>
                <h2 className='text-6xl font-medium mb-10'>Recuperadores</h2>

                <table className='w-full'>
                    <thead>
                        <tr className='text-4xl'>
                            <td>Nombre</td>
                            <td>Cédula</td>
                            <td>Correo</td>
                            <td>Celular</td>

                        </tr>
                    </thead>
                    <tbody className='p-'>


                        {
                            recuperadores.map(({ cedula, celular, correo, nombre, id }) => (
                                <tr className='bg-yellow-200 ' key={id}>
                                    <td className='border border-gray-500 p-6'>{nombre}</td>
                                    <td className='border border-gray-500 p-6'>{cedula}</td>
                                    <td className='border border-gray-500 p-6'>{correo}</td>
                                    <td className='border border-gray-500 p-6'>{celular}</td>
                                    <td onClick={() => { handleDelete(id) }} className='border border-gray-500 p-6'><MdDeleteOutline className='cursor-pointer text-5xl text-red-500' /></td>
                                </tr>

                            ))

                        }



                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default RecuperadoresAdmin