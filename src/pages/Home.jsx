import EventsComponents from "../components/EventsComponents/EventsComponents";
import RecycleTargetList from "../components/RecycleTargetList/RecycleTargetList";

import TipsTargetList from "../components/TipsTargetLis/TipsTargetList";


const Home = () => {
    return (
        <>
            <div className="w-full text-center">
                <div className="max-w-screen-lg m-auto">
                    <h2 className="text-7xl font-bold mb-11">¿QUE HACEMOS <br />Y COMO LO <span className="text-lime-500">HACEMOS ?</span></h2>
                    <p className="leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi optio iusto tempore minima quam expedita? Autem molestiae architecto quis adipisci est! Repellendus, fugit accusamus. Alias, eaque unde? Laudantium, voluptas.</p>
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
            </div>
        </>
    )
}

export default Home
