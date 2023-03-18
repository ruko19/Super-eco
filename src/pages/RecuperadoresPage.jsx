import mascotaImg from "../../public/mascota_corregido.png"

const RecuperadoresPage = () => {
    return (
        <div className="container">
            <h2 className="text-6xl font-bold mb-11">
                Beneficios y {" "}
                <span className="text-green-600">¿cómo ser parte?</span>
            </h2>
            <p className="font-light w-[992px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel veniam vero minus ut dignissimos aliquid rem quidem eveniet sint mollitia ducimus magnam minima at cupiditate commodi, temporibus ullam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel veniam vero minus ut dignissimos aliquid rem quidem eveniet sint mollitia ducimus magnam minima at cupiditate commodi, temporibus ullam sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel veniam vero minus ut dignissimos aliquid rem quidem eveniet sint mollitia ducimus magnam minima at cupiditate commodi, temporibus ullam sunt.</p>


            <div className="md:flex justify-between items-center mt-36">
                <form id='formInit' className=' mt-8 flex flex-col border p-10 rounded-lg w-1/2 shadow-md' action="">
                    <legend className="font-bold text-5xl">Inicia sesión</legend>
                    <input name='Nombre_completo' className='border mt-9 p-6 rounded-2xl outline-none' type="text" placeholder='Nombre completo' />
                    <input name='Cedula' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='Cédula' />
                    <input name='correo' className='border mt-9 p-6 rounded-2xl outline-none' type="email" placeholder='Correo' />
                    <input name='contraseña' className='border mt-9 p-6 rounded-2xl outline-none' type="password" placeholder='Contraseña' />
                    <input name='numero' className='border mt-9 p-6 rounded-2xl outline-none' type="number" placeholder='+57 205446 5436' />
                    <button type="submit" className='bg-green-600 rounded-2xl py-6 text-white mt-9'>Inicia sesión</button>
                    <p className="font-light text-center mt-5">¿no tienes una cuenta? registrate</p>
                </form>
                <div className="w-1/2">
                    <img src={mascotaImg} alt="mascota supereco" className="w-[450px] mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default RecuperadoresPage
