import React from 'react'
import imgEvent from "../../../public/event1.jpg"
import EventTarget from '../EventTarget/EventTarget'

const EventsComponents = () => {
    return (
        <div className='grid grid-cols-2'>
            <figure>
                <img src={imgEvent} alt="" />
            </figure>
            <div className=' relative p-5'>
                <div className='absolute -left-14 flex gap-10 flex-col'>
                    <EventTarget />
                    <EventTarget />
                    <EventTarget />
                </div>

            </div>
        </div>

    )
}

export default EventsComponents