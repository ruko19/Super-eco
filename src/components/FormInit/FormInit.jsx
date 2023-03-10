import React from 'react'

const FormInit = () => {
    return (

        <form className=' mt-8 flex flex-col border p-10 rounded-lg ' action="">
            <input className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Nombre' />
            <input className='border mt-9 p-6 rounded-2xl outline-none' type="email" placeholder='Correo' />
            <input className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Selecciona la Iniciativa' />
            <button className='bg-green-600 rounded-2xl py-6 text-white mt-9'>Inscribirse</button>
        </form>

    )
}

export default FormInit