import EventosComponente from "../components/CrudEventos/EventosComponente"
// import { getData } from "../api/firebaseConfig";
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchEventos } from "../features/eventos/eventosSlice";



const Administracion = () => {

    const distpatch = useDispatch();

    useEffect(() => {
        distpatch(fetchEventos())

    }, [distpatch])

    return (
        <div className='w-full h-screen mt-36'>
            <div className="container">
                <EventosComponente />
            </div>
        </div>
    )
}

export default Administracion
