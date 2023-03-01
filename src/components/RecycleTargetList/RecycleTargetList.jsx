import React from 'react'
import RecycleTarget from '../RecycleTarget/RecycleTarget'


const RecycleTargetList = () => {
    const infoTarget = [
        {
            "id": "1",
            "icon": "../../../public/icono.png",
            "title": "Recycling",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusantium facere maiores, inventore ratione aliquid."
        },
        {
            "id": "2",
            "icon": "../../../public/icono.png",
            "title": "Recycling",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusantium facere maiores, inventore ratione aliquid."
        },
        {
            "id": "3",
            "icon": "../../../public/icono.png",
            "title": "Recycling",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusantium facere maiores, inventore ratione aliquid."
        },
        {
            "id": "4",
            "icon": "../../../public/icono.png",
            "title": "Recycling",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusantium facere maiores, inventore ratione aliquid."
        }


    ]
    return (
        <div className='w-full  bg-lime-500 grid lg:grid-cols-2 mt-40 sm:grid-cols-1'>
            {
                infoTarget.map((e) => (
                    <RecycleTarget key={e.id} icon={e.icon} title={e.title} description={e.description}
                    />
                ))
            }
        </div>

    )
}

export default RecycleTargetList