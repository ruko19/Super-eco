import { useContext } from "react";

import { AlianzasContext } from "../context/AlianzasContext";

const useAlianzas = () => {
    return (
        useContext(AlianzasContext)
    )
}


export { useAlianzas }