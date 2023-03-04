import React from 'react'
import RecycleTarget from '../RecycleTarget/RecycleTarget'


const RecycleTargetList = () => {
    const infoTarget = [
        {
            "id": "1",
            "icon": "../../../public/icono.png",
            "title": "RECICLAR",
            "description": "Cuando reciclamos tenemos el control sobre los desperdicios. Reciclemos el plástico, la ropa y otros objetos luego de ser clasificados y puestos en cada recipiente según el caso."
        },
        {
            "id": "2",
            "icon": "../../../public/icono.png",
            "title": "REUTILIZAR",
            "description": "Utiliza la creatividad y dales otro uso a los objetos que parecen no tenerlo, así evitaremos tirar todo a la basura."
        },
        {
            "id": "3",
            "icon": "../../../public/icono.png",
            "title": "SER UN CONSUMIDOR RESPONSABLE",
            "description": "Tenemos que ser conscientes de nuestras necesidades reales como consumidores. Cuando vayas de compras hazlo porque tienes la necesidad real,no por simple capricho."
        },
        {
            "id": "4",
            "icon": "../../../public/icono.png",
            "title": "REDUCCION",
            "description": "Toma conciencia, Para hacer un pequeño cambio que suponga una gran ayuda, puedes dejar de usar pajitas para tus bebidas, llevar tus propias bolsas al supermercado y comprar botellas de vidrio  y son mejores para reutilizar."
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