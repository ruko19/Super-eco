import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginAdminComponent = () => {
    return (
        <>
            <form className='flex flex-col w-1/2 mx-auto'>
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Nombre' />
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="email" placeholder='Correo' />
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="password" placeholder='Contraseña' />
                <Link to={"/administracion"}>
                    <input className='mb-8 p-6 bg-green-600 cursor-pointer outline-none text-white rounded-lg hover:bg-white hover:border transition-all hover:border-green-600 hover:text-green-600' type="submit" value="Ingresar al panel de administración" />
                </Link>
            </form>
        </>
    )
}

export default LoginAdminComponent
