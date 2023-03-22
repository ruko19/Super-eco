import { Link } from "react-router-dom";
import { TbClick } from "react-icons/tb";

const TarjetaRecuperadores = () => {
    return (
        <div className="shadow-md">
            <figure>
                <img src="https://res.cloudinary.com/dwvchf8al/image/upload/v1679113821/Demo_day_RROP/photo-1610141160723-d2d346e73766_yjsbuw.jpg" alt="" className="w-full h-96 object-cover" />
            </figure>
            <div className='bg-green-600 p-8 text-white text-left'>
                <h3 className='text-3xl mb-8'>Recuperadores</h3>
                <p className="font-light text-1xl">Si quieres hacer parte de nuestra iniciativa y conocer todos los beneficios que te podemos ofrecer </p>
                <div className="bg-white max-w-max p-2 rounded-md text-green-600 flex gap-8 items-center mt-8">
                    <Link
                        className="text-1xl"
                        to={"/recuperadores"}
                    >Inscríbete aquí</Link>
                    <TbClick className="text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default TarjetaRecuperadores
