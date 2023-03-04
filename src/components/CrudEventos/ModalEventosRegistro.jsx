import { FaRegTimesCircle } from "react-icons/fa";

const ModalEventosRegistro = ({ handleBorrarModal }) => {
    return (
        <div className="bg-black h-screen w-full absolute top-0 bottom-0 left-0 right-0">

            <FaRegTimesCircle
                className="text-white text-4xl m-8 cursor-pointer"
                onClick={handleBorrarModal}
            />
            <div className="w-1/2 mx-auto">
                <h3 className="text-center mb-12 uppercase text-4xl font-bold text-white">Registrar evento</h3>
                <form className='flex flex-col'>
                    <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Id' />

                    <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Organizador' />

                    <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Día' />

                    <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Mes' />

                    <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Nombre evento' />



                    <input className='mb-8 p-6 bg-blue-500 cursor-pointer outline-none text-white rounded-lg hover:bg-transparent hover:border transition-all hover:border-blue-500 hover:text-blue-500' type="submit" value="Registrar evento" />
                </form>
            </div >
        </div>
    )
}

export default ModalEventosRegistro
