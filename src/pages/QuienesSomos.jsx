import ReactPlayer from "react-player"


const QuienesSomos = () => {
    return (
      <div className="container flex flex-col mx-auto items-center justify-center">
        <div>
          <ReactPlayer
            url="https://res.cloudinary.com/dwvchf8al/video/upload/v1677640667/Demo_day_RROP/pexels-pressmaster-9034146_1_xn1iwc.mp4"
            controls
            loop
            width="100%"
            height="100%"
          />
        </div>

        <div className="mt-24 md:w-1/2 font-light">
          <p className="mb-16">
            <span className="text-green-600 font-bold">Super Eco</span> es una
            organización que busca conectar a los recuperadores de residuos
            reciclables con las empresas que buscan que sus residuos sean
            aprovechados de una manera optima.
            <br />
            <br />
            <p>el objetivo de Super Eco ademas de lograr alianzas entre las personas que viven del reciclaje y las empresas que generan desechos, es poder contribuir con el sistema economico del pais , el cual no esta siendo utilizado de la mejor manera , por ende, alrededor de 2 billones de pesos se estarian perdiendo en colombia por no tener claro como funciona el reciclaje, ademas de contribuir con el medio ambiente y lograr un futuro sostenible  </p>{" "}
          </p>
        </div>
      </div>
    );
}

export default QuienesSomos
