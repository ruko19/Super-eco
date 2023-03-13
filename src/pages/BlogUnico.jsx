import { useParams, useLocation } from "react-router-dom"

const BlogUnico = () => {
    const { id } = useParams()
    const location = useLocation()

    const { image, dia, mes, titulo, descripcion } = location.state
    return (
        <div>
            <p>{descripcion}</p>
            sdfg
        </div>
    )
}

export default BlogUnico
