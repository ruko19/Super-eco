import React from 'react'
import RecycleTarget from '../RecycleTarget/RecycleTarget'


const RecycleTargetList = () => {
  const infoTarget = [
    {
      id: "1",
      icon: "../../../public/icono.png",
      title: "RECICLAR",
      description:
        "Reciclar es más que una acción, es el valor de la responsabilidad por preservar los recursos naturales.",
    },
    {
      id: "2",
      icon: "../../../public/icono.png",
      title: "REUTILIZAR",
      description:
        "Utiliza la creatividad y dales otro uso a los objetos que parecen no tenerlo.",
    },
    {
      id: "3",
      icon: "../../../public/icono.png",
      title: "SER UN CONSUMIDOR RESPONSABLE",
      description:
        "Consumir de forma responsable es más que un término que está de moda, es una forma de entender la vida.",
    },
    {
      id: "4",
      icon: "../../../public/icono.png",
      title: "REDUCCIÓN",
      description:
        "Toma conciencia, reduce tu consumo, piensa en los demás.",
    },
  ];
  return (
    <div className='w-full  bg-green-600 grid lg:grid-cols-2 mt-40 sm:grid-cols-1'>
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