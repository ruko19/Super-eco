import useEventos from "../../hooks/useEventos"
import Swal from 'sweetalert2'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";

const FormularioEditar = () => {
    const { organizador, id, dia, mes, titulo, lugar, editarEvento } = useEventos();

    const newEvento = {
        id,
        organizador,
        dia,
        mes,
        titulo,
        lugar,
    };

    const handleEditarEvento = async (e) => {
        e.preventDefault();
        if ([organizador, id, dia, mes, titulo, lugar].includes("")) {
            Swal.fire("no hay datos")
        }
        try {
            console.log(await editarEvento(id, newEvento))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="md:w-1/3 text-center">
            <form className='flex flex-col' onSubmit={handleEditarEvento}>
                <input defaultValue={id} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Id' />

                <input defaultValue={organizador} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Organizador' />

                <input defaultValue={dia} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Día' />

                <input defaultValue={mes} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Mes' />

                <input defaultValue={titulo} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Nombre evento' />

                <input defaultValue={lugar} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Lugar' />


                <input className='mb-8 p-6 bg-blue-500 cursor-pointer outline-none text-white rounded-lg hover:bg-transparent hover:border transition-all hover:border-blue-500 hover:text-blue-500' type="submit" value="Editar evento" />
            </form>
        </div>
    )
}

export default FormularioEditar
