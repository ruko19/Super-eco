import React from 'react'
import img1 from "../../../public/img 1.jpg"



const TipTarget = ({ data }) => {
    return (
        <div className="flex z-10 items-center justify-center mb-32">
            <div className="group h-[400px] w-full [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={data.img} alt="" />
                    </div>

                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] text-left">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold mb-5">{data.title}</h1>
                            <p className="text-xl font-light mb-3"><strong>{data.subTitulo1}</strong>  {data.descripcion1}</p>
                            <p className="text-xl font-light mb-3"><strong>{data.subTitulo2}</strong>  {data.descripcion2}</p>
                            <p className="text-xl font-light mb-3"><strong>{data.subTitulo3}</strong>  {data.descripcion3}</p>
                            <p className="text-xl font-light"><strong>{data.subTitulo4}</strong>  {data.descripcion4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default TipTarget