import { NavLink } from "react-router-dom"

"hover:bg-lime-500 p-12 hover:text-white"
const Navegacion = () => {
    return (
        <nav className="container bg-white text-center txt-primary">
            <ul className="grid md:grid-cols-5 text-3xl">
                <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/"}>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/quienes-somos"}>Quienes somos</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/eventos"}>Eventos</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/Blog"}>Blog</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/Contacto"}>Contacto</NavLink>
            </ul>
        </nav>
    )
}

export default Navegacion
