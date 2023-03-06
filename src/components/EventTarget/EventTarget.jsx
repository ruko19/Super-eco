import React from 'react'
import { FaRecycle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const EventTarget = ({ data }) => {




    return (

        <div className='flex items-center  gap-12  shadow-sm  rounded-lg  '>
            <figure className='inline-block bg-lime-500 p-5 rounded-full text-white border-8 border-white'>
                <FaRecycle className='text-7xl' />
            </figure>
            <div className=' group p-3 w-full flex  gap-12 hover:bg-lime-500  hover:text-white rounded-xl'>
                <div className='flex flex-col '>
                    <p className='text-lime-500 text-6xl group-hover:text-white'>{data.dia}</p>
                    <p className='text-lime-500 text-4xl group-hover:text-white'>{data.mes}</p>
                </div>
                <div className='text-left '>
                    <p className='font-light text-gray-400 group-hover:text-white'>Organizador <span className='text-lime-500 font-bold group-hover:text-white'>{data.organizador}</span> </p>
                    <h3 className='text-3xl uppercase'>{data.titulo}</h3>
                    <div className='flex items-center'>
                        <figure>

                        </figure>
                        <p>{data.lugar}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventTarget;