import { useEffect, useState } from "react"
import useEventos from "../../hooks/useEventos"

const ListaEventos = () => {

    const { eventos, eliminarEvento, getEventos, setId, setOrganizador, setDia, setMes, setTitulo, setLugar, image, setImage, descripcion,
        setDescripcion } = useEventos()

    const eventosReverse = [...eventos].reverse()
    useEffect(() => {
        eventos

    }, [eventos])

    const handleEliminar = async (id) => {
        await eliminarEvento(id)
        getEventos()
    }

    const handleEditar = async (e) => {
        setId(e.id)
        setOrganizador(e.organizador)
        setDia(e.dia)
        setMes(e.mes)
        setTitulo(e.titulo)
        setLugar(e.lugar)
        setImage(e.image)
        setDescripcion(e.descripcion)
    }


    return (



        <div className='md:w-1/2 text-center md:h-[400px] overflow-y-scroll' >

            {
                eventosReverse.map((e) => (
                    <div className='text-left shadow-md w-full p-8 rounded-lg' key={e.id}>
                        <p className='font-light'>id: <span className='font-medium '>{e.id}</span></p>
                        <p className='font-light'>Nombre evento: <span className='font-medium '>{e.titulo}</span></p>
                        <p className='font-light'>Organizador: <span className='font-medium '>{e.organizador}</span></p>
                        <p className='font-light'>Lugar: <span className='font-medium '>{e.lugar}</span></p>
                        <p className='font-light'>Dia: <span className='font-medium '>{e.dia}</span></p>
                        <p className='font-light'>Mes: <span className='font-medium '>{e.mes}</span></p>
                        <p className='font-light'>Descripcion: <span className='font-medium '>{e.descripcion}</span></p>
                        <img src={e.image} alt="imagen evento" width="150" />
                        <div className='mt-5'>
                            <button className="bg-gray-500 p-3 rounded-lg text-white" onClick={() => { handleEditar(e) }}>Editar</button>{"  "}
                            <button className="bg-red-500 p-3 rounded-lg text-white" onClick={() => { handleEliminar(e.id) }}>Elimar</button>
                        </div>
                    </div>

                ))
            }



        </div >
    )
}

export default ListaEventos
