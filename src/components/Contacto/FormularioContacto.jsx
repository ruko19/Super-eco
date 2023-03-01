import React from 'react'

const FormularioContacto = () => {
    return (
        <div className="w-1/3">
            <div className='text-left mb-12'>
                <h3 className='text-lime-500 font-bold uppercase text-5xl mb-3'>Contáctanos</h3>
                <p className='text-black font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            </div>
            <form className='flex flex-col'>
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Nombre' />
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="email" placeholder='Correo' />
                <textarea className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-16' cols="30" rows="10" placeholder='Déjanos saber porque quieres contactar con nosotros'></textarea>
                <input className='p-6 bg-lime-500 cursor-pointer outline-none text-white rounded-lg hover:bg-white hover:border transition-all hover:border-lime-500 hover:text-lime-500' type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormularioContacto
