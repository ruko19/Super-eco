import { useEffect, useState } from "react"
import { useBlogs } from "../../hooks/useBlogs"



const ListaBlog = () => {

    const { blogs, fechDataBlogs, eliminarBlog,
        setId, setDia, setTitulo, setImage, setMes, setDescripcion } = useBlogs()

    const blosgReverse = [...blogs].reverse()

    useEffect(() => {

        blogs

    }, [blogs])

    const handleEliminar = async (id) => {
        await eliminarBlog(id)
        fechDataBlogs()
    }

    const handleEditar = async (e) => {
        setId(e.id)

        setDia(e.dia)
        setMes(e.mes)
        setTitulo(e.titulo)

        setImage(e.image)
        setDescripcion(e.descripcion)
    }


    return (

        <div className='md:w-1/2 text-center md:h-[400px] overflow-y-scroll' >

            {
                blosgReverse.map((e) => (
                    <div className='text-left shadow-md w-full p-8 rounded-lg' key={e.id}>
                        <p className='font-light'>id: <span className='font-medium'>{e.id}</span></p>
                        <p className='font-light'>Nombre evento: <span className='font-medium'>{e.titulo}</span></p>
                        <p className='font-light'>Dia: <span className='font-medium'>{e.dia}</span></p>
                        <p className='font-light'>Mes: <span className='font-medium'>{e.mes}</span></p>
                        <p className='font-light'>Descripcion: <span className='font-medium'>{e.descripcion}</span></p>
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

export default ListaBlog
