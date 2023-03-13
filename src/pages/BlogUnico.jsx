import { useParams, useLocation } from "react-router-dom"

const BlogUnico = () => {
    const { id } = useParams()
    const location = useLocation()

    const { image, dia, mes, titulo, descripcion } = location.state
    return (
        <div className="container text-center">
            <p className="text-gray-500 font-bold text-1xl">{dia} - {mes} | Fecha de publicación</p>
            <h3 className="text-5xl">{titulo}</h3>
            <img src={image} alt="imagen blog" className="w-1/2 h-full object-cover mx-auto my-36" />
            <p className="font-normal w-1/2 mx-auto">{descripcion}</p>
        </div>
    )
}

export default BlogUnico
