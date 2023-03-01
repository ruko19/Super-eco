import React from 'react'

const RecycleTarget = ({ icon, title, description }) => {

    return (
        <div className='container flex items-center text-white p-16'>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className='text-left'>
                <h2 className='text-4xl'>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default RecycleTarget