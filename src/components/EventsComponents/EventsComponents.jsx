import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imgEvent from "../../../public/event1.jpg"
import useEventos from '../../hooks/useEventos'
import { Link } from 'react-router-dom'

import EventTarget from '../EventTarget/EventTarget'



const EventsComponents = () => {
    const { eventos } = useEventos()
    const eventosUtimos3 = eventos.slice(-3)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <figure>
                <img src={imgEvent} alt="" />
            </figure>
            <div className=' relative p-5'>
                <div className='w-full  md:absolute  -left-14 flex gap-10 flex-col'>

                    {
                        eventosUtimos3.map((e) => (

                            <EventTarget
                                key={e.id}
                                data={e}
                            />
                        ))
                    }

                    <Link className='bg-green-600 w-96 p-3 rounded-lg text-white mx-auto' to={"/eventos"}>Ver más eventos quí</Link>
                </div>

            </div>
        </div>

    )
}

export default EventsComponents