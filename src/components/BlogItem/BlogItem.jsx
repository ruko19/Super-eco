import { Link } from "react-router-dom"


const BlogItem = ({ data }) => {
    const { image, dia, mes, id, titulo, descripcion } = data
    return (
        <div className="md:flex items-center gap-8 mb-6">
            <div>
                <img src={image} alt="imagen blog" className="w-[400px] h-[200px] object-cover" />
            </div>
            <div>
                <div className="">
                    <p className="text-green-600 text-4xl text-left mb-2">
                        <span className="font-bold text-5xl">
                            {dia} <br />
                        </span>
                        {mes}
                    </p>
                    <p className="text-gray-500 font-bold text-1xl">Fecha de publicación</p>
                    <p className="font-medium text-4xl mb-12">{titulo}</p>
                </div>
                <Link to={`/blog/${id}`} state={{ image, dia, mes, id, titulo, descripcion }} className="bg-green-600 text-white py-4 px-7 rounded-full" href="#">Detalle de este blog</Link>
            </div>
        </div>

    )
}

export default BlogItem
