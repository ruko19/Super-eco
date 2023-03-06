import React from 'react'

const RecycleTarget = ({ icon, title, description }) => {

    return (
        <div className='container  text-white grid grid-cols-12 items-center p-8 '>
            <figure className='col-span-2'>
                <img className='w-full ' src={icon} alt="" />
            </figure>
            <div className='text-left col-span-10'>
                <h2 className='text-4xl mb-7'>{title}</h2>
                <p className='md:text-3xl text-md'>{description}</p>
            </div>

        </div>
    )
}

export default RecycleTarget