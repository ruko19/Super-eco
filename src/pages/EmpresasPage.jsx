import mascotaImg from "../../public/mascota_corregido.png"

const EmpresasPage = () => {
    return (
        <div className="container">
            <h2 className="text-6xl font-bold mb-11">
                Registrate {" "}
                <span className="text-green-600">como empresa</span>
            </h2>
            <p className="font-light w-[992px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel veniam vero minus ut dignissimos aliquid rem quidem eveniet sint mollitia ducimus magnam minima at cupiditate commodi, temporibus ullam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel veniam vero minus ut dignissimos aliquid rem quidem eveniet sint mollitia ducimus magnam minima at cupiditate commodi, temporibus ullam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel veniam vero minus ut dignissimos aliquid rem quidem eveniet sint mollitia ducimus magnam minima at cupiditate commodi, temporibus ullam sunt.</p>


            <div className="md:grid grid-cols-2 gap-8 items-center mt-36">
                <form id='formInit' className='flex flex-col border p-10 rounded-lg shadow-md' action="">
                    <legend className="font-bold text-5xl">Solicita un convenio</legend>
                    <input name='Nombre_empresa' className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Nombre de la empresa' />
                    <input name='rut' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='RUT' />
                    <input name='correo' className='border mt-9 p-6 rounded-2xl outline-none' type="email" placeholder='Correo' />
                    <input name='numero' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='+57 205446 5436' />
                    <textarea className='border mt-9 p-6 rounded-2xl outline-none' name="solicitud" id="" cols="30" rows="10" placeholder="Solicitud"></textarea>
                    <button type="submit" className='bg-green-600 rounded-2xl py-6 text-white mt-9'>Envía tu solicitud</button>
                </form>
                <div className="w-full h-full">
                    <img src="https://res.cloudinary.com/dwvchf8al/image/upload/v1679113983/Demo_day_RROP/photo-1521737604893-d14cc237f11d_hapub4.jpg" alt="mascota supereco" className="mx-auto h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default EmpresasPage
