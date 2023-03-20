import Swal from "sweetalert2"
import useRecuperador from "../../../hooks/useRecuperador"


const BonosRecuperador = () => {


    const { puntos, setPuntos } = useRecuperador()

    const premios = [
        {
            nombre: " Iphone 13",
            puntosid: "15",
            img: "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,w_300/v1679340984/iphone-7477151_1280_urxpoc.jpg"
        }
    ]

    const handleredimir = (puntosid) => {

        if (puntos > puntosid) {
            console.log(true);
            Swal.fire(
                'Wow ',
                'Con este condigo puedes redimir tu premio en nuestras oficinas : 6546546546546546',
                'info'
            )
        } else {

            Swal.fire(
                'opps',
                'no puedes remidir sigue acumulando puntos',
                'warning'
            )
        }

        if (puntos === 0) {
            return;
        } else {

            setPuntos(puntos - puntosid)
        }


    }
    return (

        <div className="p-12">
            <div className="text-4xl font-extrabold flex justify-between">
                <h2>Premios</h2>
                <p>Puntos: <span>{puntos}</span> </p>
            </div>
            <div className='grid grid-cols-4 gap-2  w-full'>

                {
                    premios.map((p) => (

                        <div key={p.nombre}>
                            <div class="w-full max-w-sm border-gray-200 rounded-lg shadow bg-green-600">
                                <a href="#">
                                    <img class="p-8 rounded-t-lg" src={p.img} alt="product image" />
                                </a>
                                <div class="px-5 pb-5">
                                    <a href="#">
                                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {p.nombre}</h5>
                                    </a>

                                    <div class="flex items-center justify-between">
                                        <span class="text-3xl font-bold text-gray-900 dark:text-white">{p.puntosid}</span>
                                        <button onClick={() => handleredimir(p.puntosid)} href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Redime Ya !</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }




            </div>
        </div>
    )
}

export default BonosRecuperador
