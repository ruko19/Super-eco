import React from 'react'
import TipDay from '../TipDay/TipDay'


const TipDayList = () => {

    const infoTipDay = [
        {
            "id": 1,
            "img": "",
            "title": "Tip del dia"
        },
        {
            "id": 2,
            "img": "",
            "title": "Tip del dia"
        },
        {
            "id": 3,
            "img": "",
            "title": "Tip del dia"
        }
    ]


    return (
        <div className='grid lg:grid-cols-3 gap-28 sm:grid-cols-1'>

            {
                infoTipDay.map((e) => (

                    <TipDay key={e.id} />
                ))
            }

        </div>
    )
}

export default TipDayList