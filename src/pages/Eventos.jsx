import { useEffect } from "react";
import { FaRecycle } from "react-icons/fa";
import useEventos from "../hooks/useEventos";
import { Link } from "react-router-dom";



const Eventos = () => {

  const { eventos } = useEventos()

  return (
    <div className="container md:grid grid-cols-3 gap-12 items-center">

      {eventos.map(({ dia, mes, titulo, id, descripcion, organizador, lugar, image }) => (
        <Link to={`/evento/${id}`} key={id} state={{ dia, mes, titulo, descripcion, organizador, lugar, image }}>
          <div className="" >
            <figure>
              <img src={image} alt="imagen evento" className="w-full h-96 object-cover" />
            </figure>

            <figure className=" p-5 relative">
              <FaRecycle className='text-8xl absolute left-0 bottom-0 bg-green-600 rounded-full text-white border-4 border-white p-3' />
            </figure>

            <div className="mt-6">
              <h6 className="text-1xl text-gray-400 group-hover:text-white">
                Organizador <span className="text-green-600 group-hover:text-white">{organizador}</span>
              </h6>
              <div className="md:flex items-center mt-5">
                <div>
                  <p className="text-green-600 text-4xl  ">
                    <span className="font-bold text-5xl">
                      {dia} <br />
                    </span>
                    {mes}
                  </p>
                </div>
                <div>
                  <p className="text-2xl ml-10 font-medium text-black mt-1 uppercase group-hover:text-white">
                    {titulo}
                  </p>
                  <p className=" ml-10 text-md  text-gray-400 group-hover:text-white">{lugar}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Eventos;
{/*
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
          <div className="ml-20 group hover:bg-lime-500 w-full  rounded-lg py-3">
            <h6 className="ml-10 text-3xl text-gray-400 group-hover:text-white">
              Organizador <span className="text-lime-500 group-hover:text-white">{e.organizador}</span>
            </h6>
            <p className="text-4xl ml-10 font-bold text-black mt-1 uppercase group-hover:text-white">
              {e.titulo}
            </p>
            <p className=" ml-10 text-2xl text-gray-800 group-hover:text-white">{e.lugar}</p>
          </div>
        </div>
      */}