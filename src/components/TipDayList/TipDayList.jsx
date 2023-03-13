import React from 'react'
import TipDay from '../TipDay/TipDay'


const TipDayList = () => {

    const iniciativas = [
        {
            "id": "1",
            "titulo": "Caminata Ecológica.",
            "description": `caminata realizada con el fin de promover la valoracion y el cuidado del medio ambiente y la naturaleza 

            Se hacen recorridos en ecosistemas con gran variedad de fauna y flora
            Se aprecian hermosos paisajes desde la altura de las montañas hasta el ocaso de la llanura
            Se aprende a coexistir con el medio ambiente sin destruirlo
            Se reciben consejos útiles para aportarle al ambiente en la cotidianidad
            Se aprende a ser más consciente ambientalmente
            Se hace contemplación de la naturaleza y reconocimiento del territorio
            Se reducen los niveles de estrés
            Se realiza actividad cardiovascular
            Se promueven las actividades grupales`,
            "img": "../../../public/jake-melara-Yh6K2eTr_FY-unsplash.jpg"

        },
        {
            "id": "2",
            "titulo": "Taller para hacer productos reciclables.",
            "description": `Consistirá en hacer una campaña para fomentar el reciclaje y se dotará a las aulas con
            contenedores de reciclaje. Se procederá a la realización de manualidades a partir de
            residuos.`,
            "img": "../../../public/jas-min-CIItgnBEOgw-unsplash.jpg"
        },
        {
            "id": "3",
            "titulo": "Proyectos ambientales escolares.",
            "description": ` Concienciar a los pequeños de los problemas ambientales y mostrarse sensibles ante ellos.
            Fomentar interés en la participación y mejora del medio ambiente.
            Desarrollar la capacidad de los pequeños de informarse acerca de cosas que no saben acerca
            del reciclaje.
            Ampliar los conocimientos del entorno próximo. Es responsabilidad de nosotros, fomentar la educación
            de los niños ayudándoles a comprender el medio ambiente y realizando actividades entorno a el. `,
            "img": "../../../public/ismail-salad-osman-hajji-dirir-lXvMlLRhOi8-unsplash.jpg"
        }
    ]


    return (
        <div className='grid lg:grid-cols-3 gap-28 sm:grid-cols-1'>

            {
                iniciativas.map((e) => (

                    <TipDay key={e.id} data={e} />
                ))
            }

        </div>
    )
}

export default TipDayList