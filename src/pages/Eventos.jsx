import { useEffect } from "react";
import { FaRecycle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventos } from "../api/firebaseConfig";


const Eventos = () => {

  const { eventosList: eventos } = useSelector(state => state.eventos)

  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(fetchEventos())

  }, [distpatch])


  return (
    <div className="container ">
      {
        eventos.map((e) => (
          <div key={e.id} className="mb-20 flex ">
            <figure className='inline-block bg-lime-500 p-5 rounded-full text-white border-8 border-white'>
              <FaRecycle className='text-7xl' />
            </figure>

            <div className="ml-10  ">
              <p className="text-lime-500 text-4xl  ">
                <span className="font-bold text-7xl">
                  {e.dia} <br />
                </span>
                {e.mes}
              </p>
            </div>
            <div className="border-l-4 ml-20 hover:bg-lime-500 w-full  rounded-lg ">
              <h6 className="ml-10 text-3xl text-gray-400">
                Organizador <span className="text-lime-500">{e.organizador}</span>
              </h6>
              <p className="text-4xl ml-10 font-bold text-black mt-1 uppercase">
                {e.titulo}
              </p>
              <p className=" ml-10 text-2xl text-gray-800 ">{e.lugar}</p>
            </div>
          </div>

        ))
      }






      {/* <div className="justify-center flex ">
          <button className="rounded-full border w-24 h-24 mr-8 border-gray-400 text-gray-400 hover:bg-gray-400">
            1
          </button>
          <button className="rounded-full border w-24 h-24 mr-8 border-gray-400 text-gray-400 hover:bg-gray-400 ">
            2
          </button>
          <button className="rounded-full border w-24 h-24 mr-8 border-gray-400 text-gray-400 hover:bg-gray-400">
            3
          </button>
          <button className="rounded-full border w-24 h-24 mr-8 border-gray-400 text-gray-400 hover:bg-gray-400">
            4
          </button>
        </div> */}

    </div>
  );
};

export default Eventos;
