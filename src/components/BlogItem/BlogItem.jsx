import { Link } from "react-router-dom"

const BlogItem = ({ data }) => {
    const { image, dia, mes, id, titulo, descripcion } = data
    return (
        <div className="md:flex items-center gap-8 mb-6">
            <div>
                <img src={image} alt="imagen blog" className="w-[500px] h-[200px] object-cover" />
            </div>
            <div>
                <div className="md:flex items-center gap-6">
                    <p className="text-green-600 text-4xl text-center">
                        <span className="font-bold text-5xl">
                            {dia} <br />
                        </span>
                        {mes}
                    </p>
                    <p className="font-medium text-4xl">{titulo}</p>
                </div>
                <p className="font-light mb-6">{descripcion}</p>
                <Link to={`/blog/${id}`} state={{ image, dia, mes, id, titulo, descripcion }} className="bg-green-600 text-white py-4 px-7 rounded-full" href="#">Detalle de este blog</Link>
            </div>
        </div>
    )
}

export default BlogItem
