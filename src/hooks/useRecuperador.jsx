import { useContext } from "react";
import { RecuperadoresContext } from "../context/RecuperadoresContext";

const useRecuperador = () => {
    return (
        useContext(RecuperadoresContext)

    )
}

export default useRecuperador 