import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useAlianzas } from '../../hooks/useAlianzas'
import IconLocation from './IconLocation'



const Markers = ({ data }) => {

    const { alianzas } = useAlianzas()
    console.log(alianzas);

    const markers = alianzas.map(u => (
        // [u.ubicacion[1].coordenada1, u.ubicacion[1].coordenada2]

        // [6.21264705, -75.5946511285194]

        < Marker Marker position={[u.ubicacion[1].coordenada1, u.ubicacion[1].coordenada2]} key={u.id} icon={IconLocation} >
            {/* {console.log(u.ubicacion[1].coordenada1)} */}
            < Popup >
                <h1 className='text-3xl font-extrabold'>{u.name}</h1>
                <p className='text-xl font-semibold'>{u.ubicacion[0]}</p>
                <div>
                    <h3 className='text-3xl'>Horarios:</h3>
                    <ul>
                        <li className='text-2xl'>{u.horario[0]}</li>
                        <li className='text-2xl'>{u.horario[1]}</li>
                    </ul>
                </div>



            </ Popup >

        </Marker >

    ))


    return (

        markers


    )
}

export default Markers