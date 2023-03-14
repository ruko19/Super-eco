import React from 'react'
import { FaRecycle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const EventTarget = ({ data }) => {
    const { dia, mes, titulo, id, descripcion, organizador, lugar, image } = data
    return (
        <Link to={"/eventos"} state={{ dia, mes, titulo, descripcion, organizador, lugar, image }}
        >
            <div className='flex flex-col md:flex-row items-center  gap-12  shadow-sm  rounded-lg  '>
                <figure className='inline-block bg-green-600 p-5 rounded-full text-white border-8 border-white'>
                    <FaRecycle className='text-7xl' />
                </figure>
                <div className=' group p-3 w-full flex  gap-12 hover:bg-green-600  hover:text-white rounded-xl'>
                    <div className='flex flex-col '>
                        <p className='text-green-600 text-6xl group-hover:text-white'>{dia}</p>
                        <p className='text-green-600 text-4xl group-hover:text-white'>{mes}</p>
                    </div>
                    <div className='text-left '>
                        <p className='font-light text-gray-400 group-hover:text-white'>Organizador <span className='text-green-600 font-bold group-hover:text-white'>{data.organizador}</span> </p>
                        <h3 className='text-3xl'>{titulo}</h3>
                        <div className='flex items-center'>
                            <figure>

                            </figure>
                            <p>{lugar}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventTarget;