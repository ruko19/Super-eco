import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8  mt-36">
            <div className="sm:flex sm:items-center sm:justify-between container">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                    <img
                        src="https://res.cloudinary.com/dwvchf8al/image/upload/v1678390296/Demo_day_RROP/logo-mejorado_cxgilo.png"
                        alt="RROP Logo"
                        width="250"
                        className="mx-auto"
                    />
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-2xl text-black sm:mb-0 justify-center">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/quienes-somos" className="mr-4 hover:underline md:mr-6">
                            Quienes somos
                        </Link>
                    </li>
                    <li>
                        <Link to="/eventos" className="mr-4 hover:underline md:mr-6 ">
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="mr-4 hover:underline md:mr-6">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contacto" className="hover:underline">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-2xl text-black text-center">
                © 3{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                    RROP
                </a>
                . Todos los derechos reservados.
            </span>
        </footer>
    );
};

export default Footer;
