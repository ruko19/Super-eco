import L from "leaflet"
import iconMap from "../../../public/location-map.svg"

const IconLocation = L.icon({
    iconUrl: iconMap,
    iconRetinaUrl: iconMap,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [55, 55],
    className: "leaflet-venue-icon",
});

export default IconLocation
