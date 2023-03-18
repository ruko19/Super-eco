import { Link, useNavigate } from "react-router-dom";
import useEventos from "../hooks/useEventos";
import { signOut } from "firebase/auth"
import { auth } from "../api/firebaseConfig";

const Administracion = () => {

    const navigate = useNavigate()

    function logout() {
        return signOut(auth)
    }

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='w-full mt-36'>
            <div className="container">
                <button className="className='mb-8 p-3 bg-gray-500 cursor-pointer outline-none text-white rounded-lg" onClick={handleLogout}>Salir del panel</button>
                <p className="text-center text-4xl font-thin">Bienvenido <span className="font-semibold"></span></p>
                <p className="text-center mt-4 mb-12 font-thin">Este es el panel administrativo en el cual puedes editar, eliminar o agregar un evento o blog nuevo.</p>


            </div>
        </div>
    )
}

export default Administracion
