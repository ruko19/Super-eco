import React from 'react'
import img2 from "../../../public/img2.jpg"

const TipDay = () => {
    return (
        <div className='shadow-lg'>
            <figure>
                <img src={img2} alt="" />
            </figure>
            <div className='bg-lime-500 p-5'>
                <h3 className='text-white text-4xl'>Tip del Dia</h3>
            </div>
        </div>
    )
}

export default TipDay