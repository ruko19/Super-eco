import { useEffect } from "react"
import useEventos from "../../hooks/useEventos"





const ListaEventos = () => {

    const { eventos } = useEventos()

    const eventosReverse = [...eventos].reverse()

    return (



        <div className='md:w-1/2 text-center md:h-96 overflow-y-scroll' >

            {
                eventosReverse.map((e) => (
                    <div className='text-left shadow-md max-w-xl p-8 rounded-lg' key={e.id}>
                        <p className='font-light'>id: <span className='font-medium uppercase'>{e.id}</span></p>
                        <p className='font-light'>Nombre evento: <span className='font-medium uppercase'>{e.titulo}</span></p>
                        <p className='font-light'>Organizador: <span className='font-medium uppercase'>{e.organizador}</span></p>
                        <p className='font-light'>Lugar: <span className='font-medium uppercase'>{e.lugar}</span></p>
                        <p className='font-light'>Dia: <span className='font-medium uppercase'>{e.dia}</span></p>
                        <p className='font-light'>Mes: <span className='font-medium uppercase'>{e.mes}</span></p>
                        <div className='mt-5'>
                            <button className="bg-blue-500 p-3 rounded-lg text-white">Editar</button>{"  "}
                            <button className="bg-red-500 p-3 rounded-lg text-white">Elimar</button>
                        </div>
                    </div>

                ))
            }



        </div >
    )
}

export default ListaEventos
