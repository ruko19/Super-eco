import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import useEventos from '../../hooks/useEventos';

const LoginAdminComponent = () => {

    const { userAdmin, setUserAdmin } = useEventos();

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const administradores = [
        {
            "nombre": "Alejandro",
            "correo": "alejandro.supereco@gmail.com",
            "password": "SuperEco2023",
        }, {
            "nombre": "Sara",
            "correo": "sara.supereco@gmail.com",
            "password": "SuperEco2023"
        }
    ]


    const onSubmit = data => {
        setUserAdmin({
            nombre: data.nombre,
            correo: data.email,
            password: data.password
        })
    };


    administradores.forEach((administrador) => {
        if (administrador.nombre === userAdmin.nombre && administrador.correo === userAdmin.correo && administrador.password === userAdmin.password) {
            navigate("/administracion")
            return;
        }
    })


    return (
        <>
            <form className='flex flex-col w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                {errors.nombre && <span className='bg-red-700 p-5 rounded-lg text-center text-white mb-5'>El campo Nombre es requerido</span>}
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8'  {...register("nombre", { required: true, maxLength: 20 })} type="text" placeholder='Nombre' />
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