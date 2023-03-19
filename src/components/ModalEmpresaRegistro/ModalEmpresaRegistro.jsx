
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useAlianzas } from "../../hooks/useAlianzas"

const ModalEmpresaRegistro = ({ setModalAlianza }) => {

    const { createAlianza } = useAlianzas()



    const handleBorrarModalEmpresa = () => {
        setModalAlianza(false)
    }
    const matrizHorario = [

    ]

    const [name, setName] = useState("");
    const [rut, setRut] = useState("");
    const [correo, setCorreo] = useState("");
    const [contacto, setContacto] = useState("")

    const [horario1, sethorario1] = useState("")
    const [horario2, sethorario2] = useState("")

    const [direccion, setdireccion] = useState("")

    const [coordenada1, setCoordenada1] = useState("");
    const [coordenada2, setcoordenada2] = useState("")




    const newAlianza = {
        name,
        rut,
        correo,
        contacto,
        horario: [horario1, horario2],
        ubicacion: [direccion, [coordenada1, coordenada2]]
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            await createAlianza(newAlianza);


        } catch (error) {
            console.log(error.message);

        }

    }


    return (
        <div className="bg-black bg-opacity-90 h-screen w-full absolute top-0 bottom-0 left-0 right-0">

            <FaRegTimesCircle
                className="text-white text-4xl m-8 cursor-pointer"
                onClick={handleBorrarModalEmpresa}
            />
            <div className="w-1/2 mx-auto">
                <h3 className=" text-center  text-4xl font-bold text-white">Registrar Empresa</h3>

                <form onSubmit={handleSubmit}>

                    <input value={name} onChange={e => setName(e.target.value)} className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="text" placeholder='Nombre empresa' />
                    <input value={rut} onChange={e => setRut(e.target.value)} className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="number" placeholder='RUT de la empresa' />
                    <input value={correo} onChange={e => setCorreo(e.target.value)} className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="email" placeholder='Correo' />
                    <input value={contacto} onChange={e => setContacto(e.target.value)} className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="number" placeholder='Número de contacto' />
                    <input value={direccion} onChange={e => setdireccion(e.target.value)} className=' mt-9 mb-2 p-3 rounded-2xl outline-none w-full' type="string" placeholder='Direccion' />

                    <div className="mt-5">
                        <label htmlFor="horarios" className="text-white block mb-2">Horarios en las que el recuperador va por los residuos:</label>
                        <div className="md:flex gap-4">
                            <input value={horario1} onChange={e => sethorario1(e.target.value)} className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="text" placeholder='Horario 1' />
                            <input value={horario2} onChange={e => sethorario2(e.target.value)} className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="text" placeholder='Horario 2' />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="coordenadas" className="text-white block mb-2">Coordenadas:</label>
                        <div className="md:flex gap-4">
                            <input value={coordenada1} onChange={e => setCoordenada1(e.target.value)} className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="number" placeholder='Latitud' />
                            <input value={coordenada2} onChange={e => setcoordenada2(e.target.value)} className='mb-2 p-3 rounded-2xl outline-none w-1/2' type="number" placeholder='Longitud' />
                        </div>
                    </div>

                    <button type="submit" className='bg-green-600 rounded-2xl py-4 text-white mt-9 w-full'>Registrar empresa</button>

                </form>
            </div >
        </div>
    )
}

export default ModalEmpresaRegistro
