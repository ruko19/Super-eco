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

                <div className="container">
                    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead>
                            {
                                recuperadores.map(({ cedula, celular, correo, nombre, id }) => (
                                    <tr className="bg-green-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 text-white" key={id}>
                                        <th className="p-3 text-left">Nombre</th>
                                        <th className="p-3 text-left">Cédula</th>
                                        <th className="p-3 text-left">Correo</th>
                                        <th className="p-3 text-left">Celular</th>
                                        <th className="p-3 text-left" >Eliminar</th>
                                    </tr>
                                ))
                            }
                        </thead>
                        <tbody className='flex-1 sm:flex-none'>
                            {
                                recuperadores.map(({ cedula, celular, correo, nombre, id }) => (
                                    <tr className='flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0' key={id}>
                                        <td className='border-grey-light border hover:bg-gray-100 p-3'>{nombre}</td>
                                        <td className='border-grey-light border hover:bg-gray-100 p-3'>{cedula}</td>
                                        <td className='border-grey-light border hover:bg-gray-100 p-3'>{correo}</td>
                                        <td className='border-grey-light border hover:bg-gray-100 p-3'>{celular}</td>
                                        <td onClick={() => { handleDelete(id) }} className='border-grey-light border hover:bg-gray-100 p-3'><MdDeleteOutline className='cursor-pointer text-5xl text-red-500' /></td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    )
}

export default RecuperadoresAdmin