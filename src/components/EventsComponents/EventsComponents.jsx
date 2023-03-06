import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imgEvent from "../../../public/event1.jpg"
import useEventos from '../../hooks/useEventos'


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

                            <EventTarget key={e.id} data={e} />
                        ))
                    }



                </div>

            </div>
        </div>

    )
}

export default EventsComponents