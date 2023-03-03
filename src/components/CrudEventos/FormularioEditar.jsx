

const FormularioEditar = () => {
    return (
        <div className="md:w-1/3 text-center">
            <form className='flex flex-col'>
                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="text" placeholder='Organizador' />

                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="date" placeholder='Fecha' />

                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Lugar' />

                <input className='p-6 border border-gray-300 outline-none text-gray-600 rounded-lg mb-8' type="string" placeholder='Nombre evento' />



                <input className='mb-8 p-6 bg-blue-500 cursor-pointer outline-none text-white rounded-lg hover:bg-transparent hover:border transition-all hover:border-blue-500 hover:text-blue-500' type="submit" value="Editar evento" />
            </form>
        </div>
    )
}

export default FormularioEditar
