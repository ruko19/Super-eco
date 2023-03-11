import React from 'react'
import img1 from "../../../public/img 1.jpg"


{/*
<div className="border rounded-3xl overflow-hidden relative z-10 mb-32 ">
            <div>
                <figure>
                    <img className='w-full h-80' src={data.img} alt="" />
                </figure>
                <div className=" flex items-center p-24 bg-white">
                    <p className=" w-full h-24 text-green-600 text-4xl">{data.title}</p>
                </div>
            </div>
            <div>
                <p>hola</p>
            </div>
</div>*/}

const TipTarget = ({ data }) => {
    return (




        <div class="flex z-10 items-center justify-center mb-32">
            <div class="group h-[400px] w-full [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={data.img} alt="" />
                    </div>

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] text-left">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-bold mb-5">{data.title}</h1>
                            <p class="text-xl font-light mb-3"><strong>{data.subTitulo1}</strong>  {data.descripcion1}</p>
                            <p class="text-xl font-light mb-3"><strong>{data.subTitulo2}</strong>  {data.descripcion2}</p>
                            <p class="text-xl font-light mb-3"><strong>{data.subTitulo3}</strong>  {data.descripcion3}</p>
                            <p class="text-xl font-light"><strong>{data.subTitulo4}</strong>  {data.descripcion4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default TipTarget