import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const FormularioContacto = () => {

    const refFomrContact = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_1vkmafj";
        const templateId = "template_t09qc1n";
        const apiKey = "EHCLJq_9bPGUMK81T"




        emailjs.sendForm(serviceId, templateId, refFomrContact.current, apiKey)
            .then(res => res.status === 200 ? Swal.fire(
                'Hola, hemos recibido tu mensaje, pronto te contactaremos',
                '',
                'success'
            ) : null)
            .catch(error => console.error(error))

        resetForm()
    }

    const resetForm = () => {
        document.getElementById("formContact").reset();
    }




    return (
        <div className="md:w-1/3">
            <div className='text-left mb-12'>
                <h3 className='text-green-600 font-bold text-5xl mb-3'>Contáctanos</h3>
                <p className='text-black'>Comparte tu sugerencia, queja, reclamo o ideas que tengas o para recibir información acerca de nuestros eventos.</p>
            </div>
            <form id='formContact' onSubmit={handleSubmit} ref={refFomrContact} className='flex flex-col'>
                <input name='nommbre' className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Nombre' />
                <input name='email' className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="email" placeholder='Correo' />
                <textarea name='message' className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-16' cols="30" rows="10" placeholder='Déjanos saber porque quieres contactar con nosotros'></textarea>
                <input className='mb-8 p-6 bg-green-600 cursor-pointer outline-none text-white rounded-lg hover:bg-white hover:border transition-all hover:border-green-600 hover:text-green-600' type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormularioContacto
