import imgheroe from "../../public/mascota_corregido.png"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapView from "../components/MapView/MapView"

const Ubicaciones = () => {
    return (
      <div className="">
        <h2 className="text-7xl font-bold mb-11 text-center">
          Encuentra <br /> tu <span className="text-green-600">Super Eco </span>
          más cercano
        </h2>
        <div className="bg-green-600 w-full">
          <div className="container mx-auto pb-36">
            <div className="mt-36  md:flex items-center pt-36">
              <div className="md:w-1/2 text-white">
                <h2 className=" font-bold text-4xl">Ubicaciones Super Eco</h2>
                <p className="font-bold text-7xl">Valle de Aburrá</p>
                <p className="font-light mb-8 mt-8">
                  {" "}
                  Estamos ubicados en todo el Valle de Aburra, en diferentes
                  puntos estrategicos y de alta afluencia de personas ,
                  encuentra tu punto mas cercano y contribuye con tu grano de
                  arena.
                  <br /> <strong>¡ JUNTOS LO PODEMOS LOGRAR !</strong>
                </p>
              </div>
              <div className="md:w-1/3 mx-auto">
                <img src={imgheroe} alt="mascota" width="450" />
              </div>
            </div>
            <MapView />
          </div>
        </div>
      </div>
    );
}

export default Ubicaciones
