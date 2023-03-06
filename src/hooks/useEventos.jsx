import { useContext } from "react";

import { EventosContext } from "../context/EventosContext";

const useEventos = () => {
    return (
        useContext(EventosContext)

    )
}

export default useEventos 