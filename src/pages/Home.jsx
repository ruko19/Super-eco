import EventsComponents from "../components/EventsComponents/EventsComponents";
import RecycleTargetList from "../components/RecycleTargetList/RecycleTargetList";
import TipDayList from "../components/TipDayList/TipDayList";

import TipsTargetList from "../components/TipsTargetLis/TipsTargetList";
import { TbClick } from "react-icons/tb";
import FormInit from "../components/FormInit/FormInit";

import imgheroe from "../../public/mascotaHero.png"


const Home = () => {
    return (
        <>
            <div className="w-full text-center">
                <div className="max-w-screen-lg m-auto">
                    <h2 className="text-7xl font-bold mb-11">¿QUE HACEMOS <br />Y COMO LO <span className="text-lime-500">HACEMOS ?</span></h2>
                    <p className="leading-10"> <span className="text-lime-500">RROP</span>  es una organizacion sin animo de lucro que busca generar un cambio en las personas e influir en la sociedad,
                        su comportamiento y en su estilo de vida, a travez de la educacion, el arte y la cultura sobre la importancia del reciclaje
                        y el cuidado del medio ambiente para poder lograr un futuro sostenible  .
                    </p>
                </div>


                <section className="">
                    <RecycleTargetList />
                </section>


                <section className="relative" >
                    <h2 className=" mt-40 text-7xl font-bold mb-40 "><span className="text-lime-500">EL RECICLAJE </span>TODO <br /> LO QUE DEBES SABER</h2>

                    <div className="container">
                        <TipsTargetList />
                    </div>

                    <div className="w-full h-80 bg-lime-500 absolute z-0 bottom-2" ></div>
                </section>


                <section className="mb-40 ">
                    <h2 className="mt-40 text-7xl font-bold mb-40 "><span className="text-lime-500">EVENTOS</span> <br /> MÁS CERCANOS</h2>
                    <div className="  container relative">
                        <EventsComponents />
                    </div>
                </section>


                <section>
                    <h2 className="mt-40 text-7xl font-bold mb-40"><span className="text-lime-500" >BLOG</span> <br />ÚLTIMAS ENTRADA</h2>
                    <div className="container">
                        <TipDayList />
                    </div>
                    <button
                        className=" bg-lime-500 px-6 py-2 rounded-xl mt-14 text-white flex  items-center gap-4 mx-auto">Más articulos aquí <TbClick className="text-3xl" />
                    </button>
                </section>


                <section className="container grid grid-cols-2 gap-28 p-20">
                    <div>
                        <h2 className="text-6xl text-left font-bold"> <span className="text-lime-500">INICIATIVAS</span>  AMBIENTALES</h2>
                        <p className="text-left">Inscribete a nuestras iniciativas y recibe en tu correo electronico nuestros proximos eventos y contenido exclusivo sobre el reciclaje y el medio
                            ambiente.
                            JUNTOS LO PODEMOS LOGRAR </p>
                        <FormInit />
                    </div>
                    <div className="w-full grid place-items-center">
                        <img width="350" src={imgheroe} alt="" />

                    </div>

                </section>
            </div>
        </>
    )
}

export default Home
