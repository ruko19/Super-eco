import React from 'react'
import TipTarget from '../TipTarget/TipTarget'

const TipsTargetList = () => {
    const infoTargetTips = [
        {
            "id": "1",
            "title": "¿QUE TIRAR EN CADA CONTENEDOR?",
            "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_300/v1677771246/recycle-g572ee4c4f_1280_frsols.jpg"
        },
        {
            "id": "2",
            "title": "LA IMPORTANCIA DE SABER SEPARAR",
            "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_400/v1677772970/hands-gaf2142a73_1280_o6jqi5.jpg"
        },
        {
            "id": "3",
            "title": "¿COMO AFECTA LA BASURA EN EL MEDIO AMBIENTE?",
            "img": "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,h_250,w_350/v1677773542/plastic-waste-g884b601d8_1280_evnuhv.jpg"
        }
    ]

    return (

        <div className='w-full grid lg:grid-cols-3 gap-40 sm:grid-cols-1'>
            {
                infoTargetTips.map((e) => (

                    <TipTarget key={e.id} data={e} />
                ))
            }

        </div>
    )
}

export default TipsTargetList