
import { async } from "@firebase/util";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Swal from 'sweetalert2'

import useEventos from "../../hooks/useEventos";

const ModalEventosRegistro = ({ handleBorrarModal }) => {

    const { createEvento, organizador, setOrganizador, dia, setDia, mes, setMes, titulo, setTitulo, lugar, setLugar, id, setId, image, setImage, descripcion,
        setDescripcion } = useEventos()
    const [message, setMessage] = useState({ error: false, msg: "" });

    // const dispatch = useDispatch()

    const newEvento = {
        id,
        organizador,
        dia,
        mes,
        titulo,
        lugar,
        image,
        descripcion
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (id === "" || organizador === "" || dia === "" || mes === "" || titulo === "" || lugar === "" || image === "" || descripcion === "") {
            setMessage({
                error: true, msg: Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Llena todos los campos por favor',

                })
            });
            return;
        }
        console.log(newEvento);
        try {
            await createEvento(id, newEvento)

            setMessage({
                error: false, msg: Swal.fire({
                    icon: 'success',
                    title: 'Wow',
                    text: 'Nuevo evento agregrado',

                })
            })
            console.log(message);
            setId("")
            setOrganizador("")
            setDia("")
            setMes("")
            setTitulo("")
            setLugar("")
            setImage("")
            setDescripcion("")
        } catch (error) {
            setMessage({ error: true, msg: error.message })

        }

    }


    return (
        <div className="bg-black h-screen w-full absolute top-0 bottom-0 left-0 right-0">

            <FaRegTimesCircle
                className="text-white text-4xl m-8 cursor-pointer"
                onClick={handleBorrarModal}
            />
            <div className="w-1/2 mx-auto">
                <h3 className=" text-center mb-12 uppercase text-4xl font-bold text-white">Registrar evento</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>

                    <input onChange={(e) => setId(e.target.value)} value={id} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Id' />

                    <input onChange={(e) => setOrganizador(e.target.value)} value={organizador} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Organizador' />

                    <input onChange={(e) => setDia(e.target.value)} value={dia} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Día' />

                    <input onChange={(e) => setMes(e.target.value)} value={mes} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Mes' />

                    <input onChange={(e) => setTitulo(e.target.value)} value={titulo} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Nombre evento' />

                    <input onChange={(e) => setLugar(e.target.value)} value={lugar} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Lugar' />

                    <input onChange={(e) => setDescripcion(e.target.value)} value={descripcion} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Descripcion' />

                    <input onChange={(e) => setImage(e.target.value)} value={image} className='p-3 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Imagen' />



                    <input className='mb-8 p-3 bg-gray-500 cursor-pointer outline-none text-white rounded-lg hover:bg-transparent hover:border transition-all hover:border-gray-500 hover:text-gray-500' type="submit" value="Registrar evento" />
                </form>
            </div >
        </div>
    )
}

export default ModalEventosRegistro
