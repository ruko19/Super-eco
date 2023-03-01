import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaStream } from "react-icons/fa";

const Navegacion = () => {

    const [menu, setMenu] = useState(false)
    return (
        <>
            <FaStream className="md:hidden bottom-10 fixed left-10 bg-lime-500 text-5xl p-2 rounded-full text-white" onClick={() => setMenu(!menu)} />
            <nav className={` ${menu ? "block" : "hidden"}  w-screen md:block md:container bg-white text-center txt-primary md:relative absolute`}>
                <ul className="grid md:grid-cols-5 text-3xl">
                    <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/quienes-somos"}>Quienes somos</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/eventos"}>Eventos</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/Blog"}>Blog</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "bg-lime-500 p-12 text-white" : "p-12")} to={"/Contacto"}>Contacto</NavLink>
                </ul>
            </nav>
        </>
    )
}

export default Navegacion
