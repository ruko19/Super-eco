import Navegacion from "./Navegacion"
import { Link } from "react-router-dom";
import { TbClick } from "react-icons/tb";

const Banner = () => {
    return (
        <div className="hero bg-cover bg-no-repeat bg-center flex flex-col justify-between items-center">
            <div className="h-full flex flex-col items-center justify-center">
                <h1 className="text-white text-8xl font-extrabold text-center">Reciclaje <br /> es reinventar</h1>
                <div className="bg-white w-full p-2 py-5 rounded-md text-green-600 flex justify-center gap-4 items-center mt-8 hover:text-white hover:bg-green-600 transition-all">
                    <Link
                        className="text-1xl"
                        to={"/recuperadores"}
                    >Inscríbete aquí</Link>
                    <TbClick className="text-4xl" />
                </div>
            </div>
            <Navegacion />
        </div>
    )
}

export default Banner
