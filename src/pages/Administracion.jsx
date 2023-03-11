import BlogComponente from "../components/CrudBlog/BlogComponente";
import EventosComponente from "../components/CrudEventos/EventosComponente"
import useEventos from "../hooks/useEventos";

const Administracion = () => {

    const { userAdmin } = useEventos();

    return (
        <div className='w-full mt-36'>
            <div className="container">
                <p className="text-center text-4xl font-thin">Bienvenid@ <span className="font-semibold">{userAdmin.nombre}</span></p>
                <p className="text-center mt-4 mb-12 font-thin">Este es el panel administrativo en el cual puedes editar, eliminar o agregar un evento o blog nuevo.</p>
                <EventosComponente />
                <BlogComponente />
            </div>
        </div>
    )
}

export default Administracion
