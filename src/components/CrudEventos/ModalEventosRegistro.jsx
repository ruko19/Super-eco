import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addEventos } from "../../features/eventos/eventosSlice";

const ModalEventosRegistro = ({ handleBorrarModal }) => {

    // const dispatch = useDispatch()


    const [id, setId] = useState("")
    const [organizador, setOrganizador] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [titulo, setTitulo] = useState("")
    const [lugar, setLugar] = useState("")

    console.log(id);
    console.log(organizador);
    console.log(dia);
    console.log(mes);
    console.log(titulo);
    console.log(lugar);


    const onSubmit = () => {
        e.preventDefault();
        dispatch(addEventos({ id }))
    }


    return (
        <div className="bg-black h-screen w-full absolute top-0 bottom-0 left-0 right-0">

            <FaRegTimesCircle
                className="text-white text-4xl m-8 cursor-pointer"
                onClick={handleBorrarModal}
            />
            <div className="w-1/2 mx-auto">
                <h3 className=" text-center mb-12 uppercase text-4xl font-bold text-white">Registrar evento</h3>
                <form className='flex flex-col'>

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
