import React from 'react'
import TipTarget from '../TipTarget/TipTarget'

const TipsTargetList = () => {
    const infoTargetTips = [
        {
            "title": "La importancia de saber separar.",
            "img": "../../../public/img 1.jpg"
        },
        {
            "title": "La importancia de saber separar.",
            "img": "../../../public/img 1.jpg"
        },
        {
            "title": "La importancia de saber separar.",
            "img": "../../../public/img 1.jpg"
        }
    ]

    return (

        <div className='w-full grid grid-cols-3 gap-40'>
            {
                infoTargetTips.map((e) => (

                    <TipTarget />
                ))
            }

        </div>
    )
}

export default TipsTargetList