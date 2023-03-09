import React from 'react'

const FormularioContacto = () => {
    return (
        <div className="md:w-1/3">
            <div className='text-left mb-12'>
                <h3 className='text-green-600 font-bold text-5xl mb-3'>Contáctanos</h3>
                <p className='text-black'>Comparte tu sugerencia, queja, reclamo o ideas que tengas o para recibir información acerca de nuestros eventos.</p>
            </div>
            <form className='flex flex-col'>
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Nombre' />
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="email" placeholder='Correo' />
                <textarea className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-16' cols="30" rows="10" placeholder='Déjanos saber porque quieres contactar con nosotros'></textarea>
                <input className='mb-8 p-6 bg-green-600 cursor-pointer outline-none text-white rounded-lg hover:bg-white hover:border transition-all hover:border-green-600 hover:text-green-600' type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormularioContacto
