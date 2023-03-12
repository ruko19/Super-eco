import { Navigate } from "react-router-dom";
import useEventos from "../hooks/useEventos"

const RutaProtegida = ({ children }) => {
    const { isAdmin } = useEventos();
    if (!isAdmin) {
        return <Navigate to="/" />
    }
    return children
}

export default RutaProtegida
