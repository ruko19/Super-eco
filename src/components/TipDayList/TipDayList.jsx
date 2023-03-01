import React from 'react'
import TipDay from '../TipDay/TipDay'


const TipDayList = () => {

    const infoTipDay = [
        {
            "img": "",
            "title": "Tip del dia"
        },
        {
            "img": "",
            "title": "Tip del dia"
        },
        {
            "img": "",
            "title": "Tip del dia"
        }
    ]


    return (
        <div className='grid lg:grid-cols-3 gap-28 sm:grid-cols-1'>

            {
                infoTipDay.map((e) => (

                    <TipDay />
                ))
            }

        </div>
    )
}

export default TipDayList