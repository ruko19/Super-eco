import { useEffect, useState } from "react"
import useEventos from "../../hooks/useEventos"

const ListaEventos = () => {

    const { eventos, eliminarEvento, getEventos, setId, setOrganizador, setDia, setMes, setTitulo, setLugar } = useEventos()

    const eventosReverse = [...eventos].reverse()
    useEffect(() => {
        eventos

    }, [eventos])

    const handleEliminar = (id) => {
        getEventos()
        eliminarEvento(id)
    }

    const handleEditar = (e) => {
        setId(e.id)
        setOrganizador(e.organizador)
        setDia(e.dia)
        setMes(e.mes)
        setTitulo(e.titulo)
        setLugar(e.lugar)
    }


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
                            <button className="bg-blue-500 p-3 rounded-lg text-white" onClick={() => { handleEditar(e) }}>Editar</button>{"  "}
                            <button className="bg-red-500 p-3 rounded-lg text-white" onClick={() => { handleEliminar(e.id) }}>Elimar</button>
                        </div>
                    </div>

                ))
            }



        </div >
    )
}

export default ListaEventos
