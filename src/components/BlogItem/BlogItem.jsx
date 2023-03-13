import React from 'react'

const BlogItem = ({ data }) => {
    return (
        <div className="md:flex items-center gap-8 mb-6">
            <div>
                <img src={data.image} alt="imagen blog" />
            </div>
            <div>
                <div className="md:flex items-center gap-6">
                    <p className="text-green-600 text-4xl text-center">
                        <span className="font-bold text-5xl">
                            {data.dia} <br />
                        </span>
                        {data.mes}
                    </p>
                    <p className="font-medium text-4xl">{data.titulo}</p>
                </div>
                <p className="font-light mb-6">{data.descripcion}</p>
                <a className="bg-green-600 text-white py-4 px-7 rounded-full" href="#">Detalle de este blog</a>
            </div>
        </div>
    )
}

export default BlogItem