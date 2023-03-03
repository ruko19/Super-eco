import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imgEvent from "../../../public/event1.jpg"
import { getData } from '../../api/firebaseConfig'
import { fetchEventos } from '../../features/eventos/eventosSlice'
import EventTarget from '../EventTarget/EventTarget'



const EventsComponents = () => {

    const { eventosList: eventos } = useSelector(state => state.eventos)


    const distpatch = useDispatch();

    useEffect(() => {
        distpatch(fetchEventos())

    }, [distpatch])




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