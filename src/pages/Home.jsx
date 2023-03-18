import TipsTargetList from "../components/TipsTargetLis/TipsTargetList";
import { Link } from "react-router-dom";
import { TbClick } from "react-icons/tb";
import TarjetaRecuperadores from "../components/RecuperadoresPage/TarjetaRecuperadores";
import TarjetaEmpresas from "../components/EmpresasPage/TarjetaEmpresas";

const Home = () => {
  return (
    <>
      <div className="w-full text-center">
        <div className="container m-auto">
          <section className="md:grid grid-cols-3 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-6xl font-bold mb-11">
                ¿Qué hacemos <br />y cómo lo{" "}
                <span className="text-green-600">hacemos ?</span>
              </h2>
              <p className="leading-10 px-10 md:px-0 mb-8 text-1xl font-light">
                {" "}
                <span className="text-green-600 font-bold ">Super Eco</span> es una
                organización sin ánimo de lucro que busca generar un cambio en las
                personas e influir en la sociedad, su comportamiento y en su
                estilo de vida, a través de la educación, el arte y la cultura
                sobre la importancia del reciclaje y el cuidado del medio ambiente
                para poder lograr un futuro sostenible.
              </p>
              <div className="bg-green-600 max-w-max p-2 rounded-md text-white flex gap-8 items-center mt-8">
                <Link
                  className="text-1xl"
                  to={"/quienes-somos"}
                >Conoce más sobre Super eco</Link>
                <TbClick className="text-4xl" />
              </div>
            </div>

            <div>
              <TarjetaRecuperadores />
            </div>

            <div>
              <TarjetaEmpresas />
            </div>
          </section>
        </div>
        <section className="relative">
          <h2 className=" mt-40 text-6xl font-bold mb-40 ">
            <span className="text-green-600">
              El reciclaje <br />{" "}
            </span>
            algunos tips y consejos.
          </h2>

          <div className="container">
            <TipsTargetList />
          </div>

          <div className="w-full h-80 bg-green-600 absolute z-0 bottom-2"></div>
        </section>
        <hr />
      </div>
    </>
  );
}

export default Home
