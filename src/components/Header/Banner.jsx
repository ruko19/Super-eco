import Navegacion from "./Navegacion"

const Banner = () => {
    return (
        <div className="hero bg-cover bg-no-repeat bg-center flex flex-col justify-between items-center">
            <div className="h-full flex items-center justify-center">
                <h1 className="text-white text-8xl font-extrabold text-center">Reciclaje <br /> es reinventar</h1>
            </div>
            <Navegacion />
        </div>
    )
}

export default Banner
