import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { Markers } from '../Markers'
import { ubications } from "../../../ubication.json"


const MapView = () => {

    const position = [6.2518400, -75.5635900]




    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={position1}>
                <Popup>
                    <h1>Centro Comercial Premium Plaza</h1>
                    <img className='img1' src={img1} alt="" />

                </Popup>

            </Marker> */}

            <Markers data={ubications} />
        </MapContainer>
    )

}

export default MapView