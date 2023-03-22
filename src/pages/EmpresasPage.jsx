import { useContext, useState } from "react";
import Swal from "sweetalert2";
import mascotaImg from "../../public/mascota_corregido.png"
import useSolicitud from "../hooks/useSolicitud";

const EmpresasPage = () => {

    const { RegistroEmpresa } = useSolicitud();



    const [name, setName] = useState("second");
    const [rut, setRut] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [solicitud, setSolicitud] = useState("")


    const regEmpresa = {
        name,
        rut,
        correo,
        telefono,
        solicitud

    };

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {

            await RegistroEmpresa(regEmpresa)
            document.getElementById("formInit").reset()
            Swal.fire({
                icon: 'success',
                title: 'Tu registro fue exitoso',
                text: 'Pronto un asesor de comunicará contigo',

            })



        } catch (error) {

        }

    }


    return (
        <div className="container">
            <h2 className="text-6xl font-bold mb-11">
                Registrate <span className="text-green-600">como empresa</span>
            </h2>
            <p className="font-light md:w-[992px]">
                Super Eco te ofrece la conexión con una persona encargada de tus
                residuos, la cual te ayudara a simplificar tu proceso en el manejo y
                control del reciclaje , así también te ayudaremos cumplir con toda la
                normatividad que tu empresa debe cumplir según las leyes de nuestro
                país , no solo contribuyendo con el planeta , sino tambien aportando a
                la economía del país y así mejorando las condiciones de las personas
                encargadas, Completa el siguiente formulario y nuestros asesores se
                pondrán en contacto contigo.
            </p>

            <div className="md:grid grid-cols-2 gap-8 items-center mt-36">
                <form onSubmit={handleSubmit} id='formInit' className='flex flex-col border p-10 rounded-lg shadow-md' action="">
                    <legend className="font-bold text-5xl">Solicita un convenio</legend>
                    <input onChange={e => setName(e.target.value)} name='Nombre_empresa' className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Nombre de la empresa' />
                    <input onChange={e => setRut(e.target.value)} name='rut' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='RUT' />
                    <input onChange={e => setCorreo(e.target.value)} name='correo' className='border mt-9 p-6 rounded-2xl outline-none' type="email" placeholder='Correo' />
                    <input onChange={e => setTelefono(e.target.value)} name='numero' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='+57 205446 5436' />
                    <textarea onChange={e => setSolicitud(e.target.value)} className='border mt-9 p-6 rounded-2xl outline-none' name="solicitud" id="" cols="30" rows="10" placeholder="Solicitud"></textarea>
                    <button type="submit" className='bg-green-600 rounded-2xl py-6 text-white mt-9'>Envía tu solicitud</button>
                </form>
                <div className="w-full h-full">
                    <img src="https://res.cloudinary.com/dwvchf8al/image/upload/v1679113983/Demo_day_RROP/photo-1521737604893-d14cc237f11d_hapub4.jpg" alt="mascota supereco" className="mx-auto h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default EmpresasPage
