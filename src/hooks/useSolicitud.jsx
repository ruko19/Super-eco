import { useContext } from "react";

import { SolicitudContext } from "../context/SolicitudContex";

const useSolicitud = () => {
    return (
        useContext(SolicitudContext)

    )
}

export default useSolicitud 