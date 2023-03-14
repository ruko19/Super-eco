import React, { useRef } from 'react'

import emailjs from "@emailjs/browser";
import { Result } from 'postcss';
import Swal from 'sweetalert2';

const FormInit = () => {

    const refForm = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_wx7r1ri";
        const templateId = "template_mum6kbs";

        const apiKey = "EHCLJq_9bPGUMK81T"

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(res => res.status === 200 ? Swal.fire(
                'Hola tu registro se ha enviado a tu correo',
                'por favor revisalo',
                'success'
            ) : null)
            .catch(error => console.error(error))



    }
    return (

        <form ref={refForm} onSubmit={handleSubmit} className=' mt-8 flex flex-col border p-10 rounded-lg ' action="">
            <input name='username' className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Nombre' />
            <input name='email' className='border mt-9 p-6 rounded-2xl outline-none' type="email" placeholder='Correo' />
            <input name='iniciativa' className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Selecciona la Iniciativa' />
            <button className='bg-green-600 rounded-2xl py-6 text-white mt-9'>Inscribirse</button>
        </form>

    )
}

export default FormInit