import React from 'react'
import { Link } from 'react-router-dom'
import img2 from "../../../public/img2.jpg"

const TipDay = ({ data }) => {
    const { id, img, titulo, description } = data

    return (
        <Link to={`iniciativa/${id}`} state={{ img, titulo, description }}>
            <div className='shadow-lg'>
                <figure>
                    <img src={img} alt="" />
                </figure>
                <div className='bg-green-600 p-5'>
                    <h3 className='text-white text-2xl'>{titulo}</h3>
                </div>
            </div>
        </Link>
    )
}

export default TipDay