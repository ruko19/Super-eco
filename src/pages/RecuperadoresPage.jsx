import { useState } from "react"
import mascotaImg from "../../public/mascota_corregido.png"
import { auth } from "../api/firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import useRecuperador from "../hooks/useRecuperador"
import Swal from 'sweetalert2'

const RecuperadoresPage = () => {

    const navigate = useNavigate();
    const { addRecuperador } = useRecuperador();
    const [registro, setRegistro] = useState(false);

    const [nombre, setNombre] = useState("");
    const [cedula, setCedula] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [celular, setCelular] = useState("");

    const [error, setError] = useState("");


    const datosRecuperador = {
        nombre,
        cedula,
        correo,
        password,
        celular,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            if (registro) {
                await createUserWithEmailAndPassword(auth, correo, password)
                await addRecuperador(datosRecuperador)
                Swal.fire({
                    icon: 'success',
                    title: 'Registrado con éxito',
                    text: 'Por favor inicia sesión',

                })
            }
            else {
                await signInWithEmailAndPassword(auth, correo, password)
                navigate("/recuperador/ubicaciones")
            }
            setNombre("")
            setCedula("")
            setCorreo("")
            setPassword("")
            setCelular("")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="container">
            <h2 className="text-6xl font-bold mb-11">
                Beneficios y <span className="text-green-600">¿cómo ser parte?</span>
            </h2>
            <p className="font-light md:w-[992px]">
                Super Eco te ofrece la facilidad de lograr acuerdos con las empresas
                que hacen parte de nuestra iniciativa , para que tengas mejores
                condiciones y facilidad a la hora de obtener los residuos reciclables
                , contamos con diferentes contenedores a lo largo de toda el área
                metropolitana , ademas de brindarte esta facilidad , también te
                brindamos incentivos en conjunto con las empresas que hacen parte de
                nuestro proyecto , para inscribirte con nosotros , completa y envia el
                siguiente formulario con todos tus datos y nuestros asesores se
                pondrán en contacto contigo.{" "}
            </p>

            <div className="md:flex justify-between items-center mt-36">
                <form onSubmit={handleSubmit} id='formInit' className=' mt-8 flex flex-col border p-10 rounded-lg md:w-1/2 shadow-md' action="">
                    {error && <p>{error}</p>}
                    <legend className="font-bold text-5xl">{registro ? 'Registrate' : 'Inicia sesión'}</legend>
                    {registro ? < input onChange={e => setNombre(e.target.value)} value={nombre} name='Nombre_completo' className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Nombre completo' /> : null}

                    {registro ? <input onChange={e => setCedula(e.target.value)} value={cedula} name='Cedula' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='Cédula' /> : null}

                    <input onChange={e => setCorreo(e.target.value)} value={correo} name='correo' className='border mt-9 p-6 rounded-2xl outline-none' type="email" placeholder='Correo' />

                    <input onChange={e => setPassword(e.target.value)} value={password} name='contraseña' className='border mt-9 p-6 rounded-2xl outline-none' type="password" placeholder='Contraseña' />

                    {registro ? <input onChange={e => setCelular(e.target.value)} value={celular} name='numero' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='+57 205446 5436' /> : null}

                    <button type="submit" className='bg-green-600 rounded-2xl py-6 text-white mt-9'>{registro ? 'Registrate' : 'Inicia sesión'}</button>

                    <button type="button" className="font-light text-center mt-5" onClick={() => setRegistro(!registro)}>
                        {registro ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes cuenta? Registrate'}
                    </button>

                </form>
                <div className="md:w-1/2">
                    <img src={mascotaImg} alt="mascota supereco" className="w-[450px] mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default RecuperadoresPage
