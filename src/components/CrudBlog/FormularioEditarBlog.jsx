import { useBlogs } from "../../hooks/useBlogs"
import Swal from 'sweetalert2'

import { useState } from "react";



const FormularioEditar = () => {
    const { organizador, id, dia, getEventos, mes, titulo, lugar, editarEvento, setOrganizador, setDia, setMes, setTitulo, setLugar, image, setImage, descripcion,
        setDescripcion } = useBlogs();
    const [success, setSuccess] = useState(null)
    const newFields = {
        id,
        organizador,
        dia,
        mes,
        titulo,
        lugar,
        image,
        descripcion
    };

    const handleEditarEvento = async (e) => {
        e.preventDefault();
        // if ([organizador, id, dia, mes, titulo, lugar].includes("")) {
        //     Swal.fire("no hay datos")
        // }
        try {
            setSuccess(false)
            await editarEvento(id, newFields)
            console.log(typeof id, newFields);
            setSuccess(true)
            getEventos();


        } catch (error) {
            console.log(error)
        }
    }
    console.log();
    return (
        <div className="md:w-1/3 text-center">
            <form className='flex flex-col' onSubmit={handleEditarEvento}>
                <input defaultValue={id} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Id' />


                <input onChange={(e) => setDia(e.target.value)} defaultValue={dia} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Día' />

                <input onChange={(e) => setMes(e.target.value)} defaultValue={mes} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Mes' />

                <input onChange={(e) => setTitulo(e.target.value)} defaultValue={titulo} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Nombre Blog' />


                <input onChange={(e) => setDescripcion(e.target.value)} defaultValue={descripcion} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Descripcion' />

                <input onChange={(e) => setImage(e.target.value)} defaultValue={image} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Imagen' />


                <input className='mb-8 p-3 bg-gray-500 cursor-pointer outline-none text-white rounded-lg hover:bg-transparent hover:border transition-all hover:border-gray-500 hover:text-gray-500' type="submit" value="Editar evento" />
            </form>
        </div>
    )
}

export default FormularioEditar
