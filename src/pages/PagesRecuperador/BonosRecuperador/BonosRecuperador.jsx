import { useEffect } from "react"
import Swal from "sweetalert2"
import useRecuperador from "../../../hooks/useRecuperador"


const BonosRecuperador = () => {

    const { puntos, setPuntos } = useRecuperador()

    const puntosObtener = JSON.parse(localStorage.getItem('puntos'))
    if (puntosObtener) {
        setPuntos(puntosObtener)
    }

    useEffect(() => {
        localStorage.setItem('puntos', JSON.stringify(puntos));
    }, [puntos])

    const premios = [
        {
            nombre: " Huawei ",
            puntosid: "45",
            img: "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,h_200,w_300/v1679342121/honor-2631271_1280_pdmqwv.jpg"
        },
        {
            nombre: " Mercado",
            puntosid: "35",
            img: "https://res.cloudinary.com/dwvchf8al/image/upload/v1679447350/Demo_day_RROP/1_mercado_nsah8g.png"
        },
        {
            nombre: "Cubiertos",
            puntosid: "20",
            img: "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,h_200,w_300/v1679342365/cutlery-377700_1280_pxo82d.jpg"
        },

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
                <h2 className="text-4">Premios</h2>
                <p>Puntos: <span>{puntos}</span> </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2  w-full'>

                {
                    premios.map((p) => (

                        <div key={p.nombre}>
                            <div className="w-full max-w-sm border-gray-200 rounded-lg shadow bg-green-600">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg h-[200px]" src={p.img} alt="product image" />
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {p.nombre}</h5>
                                    </a>

                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{p.puntosid}</span>
                                        <button onClick={() => handleredimir(p.puntosid)} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Redime Ya !</button>
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
