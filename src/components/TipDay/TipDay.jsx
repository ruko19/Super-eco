import React from 'react'
import img2 from "../../../public/img2.jpg"

const TipDay = ({ data }) => {


    return (
        <div className='shadow-lg'>
            <figure>
                <img src={data.img} alt="" />
            </figure>
            <div className='bg-green-600 p-5'>
                <h3 className='text-white text-2xl'>{data.titulo}</h3>
            </div>
        </div>
    )
}

export default TipDay