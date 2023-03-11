import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'




const Markers = ({ data }) => {

    const markers = data.map(u => (
        <Marker position={u.ubication} >
            <Popup>
                <h1 className='text-3xl font-extrabold'>{u.name}</h1>
                <img className='img1 w-full' src={u.img} alt="" />
                <p className='text-xl font-semibold'>{u.direccion}</p>

            </Popup>

        </Marker>

    ))


    return (

        markers


    )
}

export default Markers