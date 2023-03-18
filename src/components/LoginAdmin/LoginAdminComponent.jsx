import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { auth } from '../../api/firebaseConfig';
import { signInWithEmailAndPassword, } from "firebase/auth"

import { useState } from 'react';

const LoginAdminComponent = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState("")
        ;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const onSubmit = async (data) => {
        setError("")
        try {
            await login(data.email, data.password)
            navigate("/administracion")
            setIsAdmin(true)
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <>
            <form className='flex flex-col w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                {error && <p>{error}</p>}
                {errors.email && <span className='bg-red-700 p-5 rounded-lg text-center text-white mb-5'>El campo correo es requerido</span>}
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="email" {...register("email", {
                    required: "required",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} placeholder='Correo' />
                {errors.password && <span className='bg-red-700 p-5 rounded-lg text-center text-white mb-5'>El campo contraseña es requerido</span>}
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="password" {...register("password", { required: true })} placeholder='Contraseña' />
                <input className='mb-8 p-6 bg-green-600 cursor-pointer outline-none text-white rounded-lg hover:bg-white hover:border transition-all hover:border-green-600 hover:text-green-600' type="submit" value="Ingresar al panel de administración" />

            </form>
        </>
    )
}
export default LoginAdminComponent

//<Link to={"/administracion"}>