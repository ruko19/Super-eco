import useEventos from "../hooks/useEventos";

const Eventos = () => {

  const { eventos } = useEventos()
  return (
    <div className="container ">
      {
        eventos.map((e) => (
          <div key={e.id} className="mb-20 flex ">
            <img
              className="bg-lime-500 rounded-full "
              src={
                "https://res.cloudinary.com/dvugueqo4/image/upload/c_scale,h_145,w_150/v1677626378/recycling-g1a554440e_1280_k1huzv.png"
              }
              alt="icono"
              width="70"
            />

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
