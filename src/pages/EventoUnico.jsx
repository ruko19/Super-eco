import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const EventoUnico = () => {
    const { id } = useParams()
    const location = useLocation()

    const { dia, mes, titulo, descripcion, organizador, lugar, image } = location.state

    return (
        <div className='container text-center'>
            <img src={image} alt="imagen evento" className='mx-auto w-1/2' />
            <h2 className='mt-5 font-bold text-4xl'>{titulo}</h2>
            <h3 className='text-green-600 mt-5'>{organizador} - {lugar}</h3>
            <p className='w-1/2 mx-auto font-medium mt-6'>{descripcion}</p>
            <div className='flex items-center justify-center'>
                <p className="text-white text-3xl mt-8 bg-green-600 p-3 px-6 rounded-full">
                    Evento: {dia} - {mes}
                </p>
            </div>
        </div>
    )
}

export default EventoUnico
