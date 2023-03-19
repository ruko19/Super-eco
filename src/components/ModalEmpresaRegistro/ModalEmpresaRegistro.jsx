import { FaRegTimesCircle } from "react-icons/fa";

const ModalEmpresaRegistro = ({ setModalAlianza }) => {

    const handleBorrarModalEmpresa = () => {
        setModalAlianza(false)
    }


    return (
        <div className="bg-black bg-opacity-90 h-screen w-full absolute top-0 bottom-0 left-0 right-0">

            <FaRegTimesCircle
                className="text-white text-4xl m-8 cursor-pointer"
                onClick={handleBorrarModalEmpresa}
            />
            <div className="w-1/2 mx-auto">
                <h3 className=" text-center  text-4xl font-bold text-white">Registrar Empresa</h3>

                <form>
                    <input className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="text" placeholder='Nombre empresa' />
                    <input className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="number" placeholder='RUT de la empresa' />
                    <input className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="email" placeholder='Correo' />
                    <input className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="number" placeholder='Número de contacto' />

                    <div className="mt-5">
                        <label htmlFor="horarios" className="text-white block mb-2">Horarios en las que el recuperador va por los residuos:</label>
                        <div className="md:flex gap-4">
                            <input className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="text" placeholder='Horario 1' />
                            <input className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="text" placeholder='Horario 2' />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="coordenadas" className="text-white block mb-2">Coordenadas:</label>
                        <div className="md:flex gap-4">
                            <input className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="number" placeholder='Latitud' />
                            <input className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="number" placeholder='Longitud' />
                        </div>
                    </div>

                    <button type="submit" className='bg-green-600 rounded-2xl py-4 text-white mt-9 w-full'>Registrar empresa</button>

                </form>
            </div >
        </div>
    )
}

export default ModalEmpresaRegistro
