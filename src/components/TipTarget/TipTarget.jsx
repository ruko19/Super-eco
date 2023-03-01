import React from 'react'
import img1 from "../../../public/img 1.jpg"

const TipTarget = ({ }) => {
    return (
        <div className="border rounded-3xl overflow-hidden relative z-10 mb-32">
            <figure>
                <img src={img1} alt="" />
            </figure>
            <div className=" flex items-center p-24 bg-white">
                <p className="text-lime-500 text-5xl">La importancia de saber separa.</p>
            </div>
        </div>
    )
}

export default TipTarget