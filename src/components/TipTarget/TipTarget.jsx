import React from 'react'
import img1 from "../../../public/img 1.jpg"

const TipTarget = ({ data }) => {
    return (
        <div className="border rounded-3xl overflow-hidden relative z-10 mb-32">
            <figure>
                <img className='w-full h-80' src={data.img} alt="" />
            </figure>
            <div className=" flex items-center p-24 bg-white">
                <p className=" w-full h-24 text-lime-500 text-4xl">{data.title}</p>
            </div>
        </div>
    )
}

export default TipTarget