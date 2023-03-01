import ReactPlayer from "react-player"

const QuienesSomos = () => {
    return (
        <div className="container flex flex-col mx-auto items-center justify-center">
            <div>
                <ReactPlayer
                    url="https://res.cloudinary.com/dwvchf8al/video/upload/v1677640667/Demo_day_RROP/pexels-pressmaster-9034146_1_xn1iwc.mp4"
                    controls
                    loop
                />
            </div>

            <div className="mt-24 w-1/2 font-light">
                <p className="mb-16">Las montañas han dejado de ser un límite para ser una posibilidad de desarrollo y sostenibilidad, su verde intenso nos ha seducido, y queremos compartir contigo, que haces parte del corazón de nuestra Fundación, esta alegría.</p>
                <p className="mb-16">La Fundación Compás Urbano, en un deseo por expandir su alcance geográfico y democratizar el acceso al Arte y la Cultura como vehículos de trasformación del Ser y el Territorio, está lista para llegar a nuevos lugares con Al Compás de Antioquia. En esta aventura no estamos solos, pues sabemos que el trabajo en red amplia y potencializa el impacto. Nuestros nuevos aliados son Peréz Y Cardona y Tierragro, y no podemos estar más felices de trabajar con empresas que, como ellos, nos inspiran y nos llenan de confianza para cumplir nuestros sueños.</p>
                <p><strong>Queremos poner en valor el patrimonio de las regiones y generar un excedente educacional a partir del turismo cultural y comunitario, de 17 municipios de Antioquia</strong> (Santa Rosa de Osos, San Pedro de los Milagros, Santa Fe de Antioquia, Olaya, Venecia, Támesis, Jardín, Jericó, Urrao, Caldas, El Carmen de Viboral, El Retiro, Sonsón, Marinilla, La Unión, Concepción y La Ceja), todo esto con la intención de dar unos primeros y poderosos pasos a nivel departamental.</p>
            </div>
        </div>
    )
}

export default QuienesSomos
