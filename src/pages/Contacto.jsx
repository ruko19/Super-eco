import FormularioContacto from "../components/Contacto/FormularioContacto"
import ImgContacto from "../components/Contacto/ImgContacto"


const Contacto = () => {
    return (
        <div className="container flex items-center justify-between gap-8 text-center">
            <FormularioContacto />
            <ImgContacto />
        </div>
    )
}

export default Contacto
