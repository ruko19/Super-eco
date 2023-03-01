import React from 'react'
import TipTarget from '../TipTarget/TipTarget'

const TipsTargetList = () => {
    const infoTargetTips = [
        {
            "id": "1",
            "title": "La importancia de saber separar.",
            "img": "../../../public/img 1.jpg"
        },
        {
            "id": "2",
            "title": "La importancia de saber separar.",
            "img": "../../../public/img 1.jpg"
        },
        {
            "id": "3",
            "title": "La importancia de saber separar.",
            "img": "../../../public/img 1.jpg"
        }
    ]

    return (

        <div className='w-full grid lg:grid-cols-3 gap-40 sm:grid-cols-1'>
            {
                infoTargetTips.map((e) => (

                    <TipTarget key={e.id} />
                ))
            }

        </div>
    )
}

export default TipsTargetList