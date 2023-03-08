import React from 'react'
import { useParams } from 'react-router-dom'

const EventoUnico = () => {
    const { id } = useParams()

    return (
        <div>
            hola evento
        </div>
    )
}

export default EventoUnico
