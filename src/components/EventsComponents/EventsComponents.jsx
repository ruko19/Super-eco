import React, { useEffect, useState } from 'react'
import imgEvent from "../../../public/event1.jpg"
import EventTarget from '../EventTarget/EventTarget'

import useEventos from '../../hooks/useEventos'

const EventsComponents = () => {

    const { eventos } = useEventos();

    return (
        <div className='grid grid-cols-2'>
            <figure>
                <img src={imgEvent} alt="" />
            </figure>
            <div className=' relative p-5'>
                <div className='w-full  absolute -left-14 flex gap-10 flex-col'>

                    {
                        eventos.map((e) => (

                            <EventTarget key={e.id} data={e} />
                        ))
                    }

                </div>

            </div>
        </div>

    )
}

export default EventsComponents