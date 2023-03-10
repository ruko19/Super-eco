import React from 'react'
import TipTarget from '../TipTarget/TipTarget'

const TipsTargetList = () => {
    const infoTargetTips = [
        {
            "id": "1",
            "title": "¿QUE TIRAR EN CADA CONTENEDOR?",
            "img": "https://res.cloudinary.com/dwvchf8al/image/upload/v1678464856/Demo_day_RROP/pexels-photo-2682683_n8jrru.jpg",
            "subTitulo1": "CONTENEDOR AMARILLO :",
            "descripcion1": `Es el adecuado para el reciclaje de los diferentes tipos de plasticos. En el se depositan botellas, latas, envases de plastico, bolsas de plastico, cartones, latas, aerosoles, etc. 
            `,
            "subTitulo2": "CONTENEDOR VERDE :",
            "descripcion2": `Es el adecuado para el reciclaje del vidrio, como botellas, frascos y tarros. 
            `,
            "subTitulo3": "CONTENEDOR ROJO :",
            "descripcion3": `Es el adecuado para depositar desechos peligrosos, como restos hospitalarios, baterias e insecticidas. 
            `,
            "subTitulo4": "CONTENEDOR GRIS :",
            "descripcion4": `Es el adecuado para depositar aquellos residuos que no son reciclables ni pueden utilizarse como materia para hacer compost. 
            `

        },
        {
            "id": "2",
            "title": "LA IMPORTANCIA DE SABER SEPARAR",
            "img": "https://res.cloudinary.com/dwvchf8al/image/upload/v1678464988/Demo_day_RROP/pexels-photo-6963622_hztkom.jpg",
            "descripcion1": `La adecuada separacion de residuos en nuestros hogares, la reutilizacion de los elementos y el consumo responsable son muy importantes en terminos ambientales porque contribuyen al uso de menos recursos naturales para la elaboracion de materias primas, a la generacion de energia y a la produccion de abonos que sirven para enriquecer nuestros suelos. Si logramos reincorporar residuos y cambiamos nuestros habitos podemos disminuir la contaminacion en el planeta. `
        },
        {
            "id": "3",
            "title": "¿COMO AFECTA LA BASURA EN EL MEDIO AMBIENTE?",
            "img": "https://res.cloudinary.com/dwvchf8al/image/upload/v1678465040/Demo_day_RROP/pexels-photo-1108572_vdyopq.jpg",
            "descripcion1": `La gestión inadecuada de los desechos está produciendo la contaminación de los océanos del mundo, obstruyendo los drenajes y causando inundaciones, transmitiendo enfermedades, aumentando los afecciones respiratorias por causa de la quema, perjudicando a los animales que consumen desperdicios, y afectando el desarrollo. `
        }
    ]

    return (

        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-20 sm:grid-cols-1 '>
            {
                infoTargetTips.map((e) => (

                    <TipTarget key={e.id} data={e} />
                ))
            }

        </div>
    )
}

export default TipsTargetList