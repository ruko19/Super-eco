import { Navigate } from "react-router-dom";
import useRecuperador from "../hooks/useRecuperador";

const RutaProtegida = ({ children }) => {
    const { logueado } = useRecuperador();
    if (!logueado) {
        return <Navigate to="/" />
    }
    return children
}

export default RutaProtegida
