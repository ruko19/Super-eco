
import { async } from "@firebase/util";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

import useEventos from "../../hooks/useEventos";

const ModalEventosRegistro = ({ handleBorrarModal }) => {

    const { createEvento } = useEventos()
    const [message, setMessage] = useState({ error: false, msg: "" });

    // const dispatch = useDispatch()



    const [id, setId] = useState("")
    const [organizador, setOrganizador] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [titulo, setTitulo] = useState("")
    const [lugar, setLugar] = useState("")





    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (id === "" || organizador === "" || dia === "" || mes === "" || titulo === "" || lugar === "") {
            setMessage({ error: true, msg: "por favor llenar todos los campos" });
            return;
        }
        const newEvento = {
            id,
            organizador,
            dia,
            mes,
            titulo,
            lugar,
        };
        console.log(newEvento);
        try {
            await createEvento(id, newEvento)

            setMessage({ error: false, msg: "nuevo evento agregado" })
            console.log(message);
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

                    <input onChange={(e) => setId(e.target.value)} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Id' />

                    <input onChange={(e) => setOrganizador(e.target.value)} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Organizador' />

                    <input onChange={(e) => setDia(e.target.value)} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Día' />

                    <input onChange={(e) => setMes(e.target.value)} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Mes' />

                    <input onChange={(e) => setTitulo(e.target.value)} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Nombre evento' />

                    <input onChange={(e) => setLugar(e.target.value)} className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Lugar' />



                    <input className='mb-8 p-6 bg-blue-500 cursor-pointer outline-none text-white rounded-lg hover:bg-transparent hover:border transition-all hover:border-blue-500 hover:text-blue-500' type="submit" value="Registrar evento" />
                </form>
            </div >
        </div>
    )
}

export default ModalEventosRegistro
