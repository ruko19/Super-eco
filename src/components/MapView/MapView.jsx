import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { Markers } from '../Markers'



const MapView = () => {

    const position = [6.2518400, -75.5635900]

    const ubications = [
        {
            "name": "Centro Comercial los Molinos",
            "ubication": [
                6.2325303,
                -75.6038790868728
            ],
            "img": "https://res.cloudinary.com/dvugueqo4/image/upload/v1678376506/IMG_0315-1024x640_g6qroz.jpg",
            "direccion": "Cl. 30A #82A-26, Medellín, Belén, Medellín, Antioquia",
            "id": "1"
        }
        // {
        //     "name": "Centro comercial Arkadia",
        //     "ubication": [
        //         6.21264705,
        //         -75.5946511285194
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678378448/arkadia-from-the-outside_w5yuxu.jpg",
        //     "direccion": "Cra. 70 #1-141,Belén, Medellín, Antioquia",
        //     "id": "2"
        // },
        // {
        //     "name": "Centro comercial Unicentro",
        //     "ubication": [
        //         6.2410415,
        //         -75.5857707
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678378566/unicentro-medellin-el_ipxoru.jpg",
        //     "direccion": "Cra. 66B #34A-76, Laureles - Estadio",
        //     "id": "3"
        // },
        // {
        //     "name": "Centro comercial Oviedo",
        //     "ubication": [
        //         6.19824095,
        //         -75.5751482373786
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678378769/5eS6QmHq5RlXlqMO0llM90gAnHPHQGpXF2Eqk4WMBTg_gkqzhj.jpg",
        //     "direccion": "Calle 30, Cra. 43A, Medellín, Antioquia",
        //     "id": "4"
        // },
        // {
        //     "name": "Centro comercial Fabricato",
        //     "ubication": [
        //         6.32615265,
        //         -75.5585864595439
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,h_200,w_320/v1678389344/parque_fabricato_hhhdy2.jpg",
        //     "direccion": "Cra. 50 #38a-185, Rincon Santos, Bello, Antioquia",
        //     "id": "5"
        // },
        // {
        //     "name": "Centro comercial Puerta del Norte ",
        //     "ubication": [
        //         6.3395956,
        //         -75.5432161382609
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389307/puerta-del-norte-170419_wfbade.jpg",
        //     "direccion": "Autopista Nte. #34-67, Hermosa Provincia, Bello, Antioquia",
        //     "id": "6"
        // },
        // {
        //     "name": "Centro comercial Santa Fe ",
        //     "ubication": [
        //         6.19644235,
        //         75.5738661019231
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389301/santafe_ozohld.jpg",
        //     "direccion": "Carrera 43A, Cl. 7 Sur ##170, El Poblado, Medellín, Antioquia",
        //     "id": "7"
        // },
        // {
        //     "name": "Centro comercial El Tesoro ",
        //     "ubication": [
        //         6.1985478,
        //         -75.5569319199386
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389267/el_tesoro_dfeibh.jpg",
        //     "direccion": "Carrera 25A # 1A Sur - 45",
        //     "id": "8"
        // },
        // {
        //     "name": "Centro comercial Viva Envigado",
        //     "ubication": [
        //         6.1763773,
        //         -75.5916529260532
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389251/viva_envigado_pf3gj9.jpg",
        //     "direccion": "ra. 48 #32B Sur-139, Zona 1, Envigado, Antioquia",
        //     "id": "9"
        // },
        // {
        //     "name": "Centro comercial Viva Laureles ",
        //     "ubication": [
        //         6.2460175,
        //         -75.601797860225
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389240/cc-viva-laureles-01-640x427_qgr5s6.jpg",
        //     "direccion": "Cra. 81 #37-100, Medellín, Laureles",
        //     "id": "10"
        // },
        // {
        //     "name": "Centro comercial San Diego",
        //     "ubication": [
        //         6.236876,
        //         -75.5691991
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389232/foto-centro-comercial-san-diego_zrldn7.jpg",
        //     "direccion": "Cl. 33 #42B-06, La Candelaria, Medellín, Antioquia ",
        //     "id": "11"
        // },
        // {
        //     "name": "Centro Comercial Mayorca",
        //     "ubication": [
        //         6.16036225,
        //         -75.6046704844713
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389224/mayorca_ryqrxo.jpg",
        //     "direccion": "Cl. 51 Sur #48-57, Sabaneta, Antioquia",
        //     "id": "12"
        // },
        // {
        //     "name": "Plaza Minorista",
        //     "ubication": [
        //         6.25757705,
        //         -75.573478470901
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678389219/plaza_minorista_medellin_1_0_pgwwiv.jpg",
        //     "direccion": "Cl. 55 #57-80, La Candelaria, Medellín, Antioquia",
        //     "id": "13"
        // },
        // {
        //     "name": "Centro Comercial Palacio Nacional",
        //     "ubication": [
        //         6.2488083,
        //         -75.5723797
        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391718/palacio_nacional_uvbhx0.jpg",
        //     "direccion": "Cra. 52 #48-45, La Candelaria, Medellín",
        //     "id": "14"
        // },
        // {
        //     "name": "Ciudad del rio. ",
        //     "ubication": [
        //         6.22310045,
        //         -75.5738670416617

        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391463/parques-ciudad-del-rio-head_k9skpd.jpg",
        //     "direccion": "# 43g, Cl. 19 #58155",
        //     "id": "15"
        // },
        // {
        //     "name": "Parque de los deseos",
        //     "ubication": [
        //         6.268333, -75.566111

        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391458/50MF045_PARQUE-DE-LOS-DESEOS_h6dsac.jpg",
        //     "direccion": "Cl. 71, Aranjuez, Medellín",
        //     "id": "16"
        // },
        // {
        //     "name": "Plaza de san antonio",
        //     "ubication": [
        //         6.246, -75.568


        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391453/BPARQUE-DE-SAN-ANTONIO-35.JPG1__khunuh.jpg",
        //     "direccion": "Cl 44 #50, La Candelaria, Medellín",
        //     "id": "17"
        // },
        // {
        //     "name": "Parque de bolivar",
        //     "ubication": [
        //         6.253892, -75.563986



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391436/parque_de_bolivar_lc9lpm.jpg",
        //     "direccion": "Cra. 49 #5596, La Candelaria, Medellín",
        //     "id": "18"
        // },
        // {
        //     "name": "Comuna 13",
        //     "ubication": [
        //         6.2562742, -75.6215434



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391424/comuna_13_jjs2z1.jpg",
        //     "direccion": "Cl. 39c #109-24, Veinte De Julio, Medellín, San Javier",
        //     "id": "19"
        // },
        // {
        //     "name": "Parque berrio",
        //     "ubication": [
        //         6.249722, -75.568056



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391376/parque_berrio_fx1gx9.jpg",
        //     "direccion": "Cl. 50, La Candelaria, Medellín",
        //     "id": "20"
        // },
        // {
        //     "name": "Cerro nutibara (pueblito paisa)",
        //     "ubication": [
        //         6.236667, -75.580278



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391369/pueblito_paisa_n4eect.jpg",
        //     "direccion": "Medellín, Belén",
        //     "id": "21"
        // },
        // {
        //     "name": "Museo el castillo",
        //     "ubication": [
        //         6.1901, -75.5696


        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391345/Museo_el_Castillo_1_fjeyev.jpg",
        //     "direccion": "Cl. 9 Sur #32-269, El Poblado, Medellín",
        //     "id": "22"
        // },
        // {
        //     "name": "Parque Norte",
        //     "ubication": [
        //         6.2723557, -75.5679465818133



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391340/parque_nrte_b3deqa.jpg",
        //     "direccion": "Cra. 53 #76-115, Aranjuez, Medellín",
        //     "id": "23"
        // },
        // {
        //     "name": "Parque del poblado",
        //     "ubication": [
        //         6.20965, -75.5721



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391329/parque-el-poblado_s2uxqa.jpg",
        //     "direccion": "El Poblado, Medellín",
        //     "id": "24"
        // },
        // {
        //     "name": "Centro comercial punto clave",
        //     "ubication": [
        //         6.22979605, -75.5737791091754



        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391597/PUNTO-CLAVE-52-1536x976_etgiyb.jpg",
        //     "direccion": "Cl. 27 #46-70, El Poblado, Medellín",
        //     "id": "25"
        // },
        // {
        //     "name": "Villa de aburra",
        //     "ubication": [
        //         6.2356571, -75.604301


        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391585/villa_de_aburra_pcaz5v.jpg",
        //     "direccion": "#32-, Cra. 80A #32b26, Medellín, Antioquia",
        //     "id": "26"
        // },
        // {
        //     "name": "Parque de botero ",
        //     "ubication": [
        //         6.2524424, -75.5708302


        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391525/plaza-botero_eplxbg.jpg",
        //     "direccion": "Av. Carabobo, La Candelaria, Medellín",
        //     "id": "27"
        // },
        // {
        //     "name": "Aeroparque Juan pablo 2 ",
        //     "ubication": [
        //         6.22460395, -75.5909480613364


        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391512/juan_pablo_2_njyvic.jpg",
        //     "direccion": "Cra. 70 #16, Guayabal, Medellín",
        //     "id": "28"
        // },
        // {
        //     "name": "Parque explora ",
        //     "ubication": [
        //         6.270556, -75.565556


        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391509/Parque_Explora__Medell%C3%ADn__Colombia_vumfuy.jpg",
        //     "direccion": "Cra. 52 #73-75, Aranjuez, Medellín",
        //     "id": "29"
        // },
        // {
        //     "name": "Jardin botanico",
        //     "ubication": [
        //         6.270833, -75.564167

        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391503/bjardin-botanico-51-jpg_39891650_20220430172149_s1qbng.jpg",
        //     "direccion": "Cl. 73 #51d-14, Aranjuez, Medellín",
        //     "id": "30"
        // },
        // {
        //     "name": "Parque arvi",
        //     "ubication": [
        //         6.270833, -75.564167

        //     ],
        //     "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_320/v1678391499/cparque-arvi12-23_37413650_20210324185015_seadw8.jpg ",
        //     "direccion": "Via a Piedras Blancas, Medellín, Antioquia ",
        //     "id": "31"
        // }

    ]




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