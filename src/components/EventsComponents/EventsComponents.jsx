import React, { useEffect, useState } from 'react'
import imgEvent from "../../../public/event1.jpg"
import EventTarget from '../EventTarget/EventTarget'
import { getData } from '../../api/firebaseConfig'

const EventsComponents = () => {

    const [evento, setEvento] = useState([]);

    const getEvento = async () => {
        try {
            const res = await getData();
            setEvento(res.data)
        } catch (error) {

        }
    }

    useEffect(() => {

        getEvento()

    }, [])



    console.log(evento);



    return (
        <div className='grid grid-cols-2'>
            <figure>
                <img src={imgEvent} alt="" />
            </figure>
            <div className=' relative p-5'>
                <div className='w-full  absolute -left-14 flex gap-10 flex-col'>

                    {
                        evento.map((e) => (

                            <EventTarget key={e.id} data={e} />
                        ))
                    }

                </div>

            </div>
        </div>

    )
}

export default EventsComponents