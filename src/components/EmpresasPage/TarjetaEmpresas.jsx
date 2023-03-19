import { Link } from "react-router-dom";
import { TbClick } from "react-icons/tb";

const TarjetaEmpresas = () => {
    return (
        <div className="shadow-md">
            <figure>
                <img src="https://res.cloudinary.com/dwvchf8al/image/upload/v1679113983/Demo_day_RROP/photo-1521737604893-d14cc237f11d_hapub4.jpg" alt="" className="w-full h-96 object-cover" />
            </figure>
            <div className='bg-green-600 p-8 text-white text-left'>
                <h3 className='text-3xl mb-8'>Empresas</h3>
                <p className="font-light text-1xl">Si estas interesado y deseas unirte a nuestra iniciativa, puedes solicitar mas informacion aqui </p>
                <div className="bg-white max-w-max p-2 rounded-md text-green-600 flex gap-8 items-center mt-8">
                    <Link
                        className="text-1xl"
                        to={"/empresas"}
                    >Solicita un convenio</Link>
                    <TbClick className="text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default TarjetaEmpresas
