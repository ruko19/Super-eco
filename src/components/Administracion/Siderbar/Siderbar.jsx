import React from 'react'
import { VscHome } from "react-icons/vsc";
import { VscFolderOpened } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { FaRecycle } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useSolicitud from '../../../hooks/useSolicitud';
import useRecuperador from '../../../hooks/useRecuperador';
import { BiLogOut } from "react-icons/bi";
import { signOut } from 'firebase/auth';
import { auth } from '../../../api/firebaseConfig';
import { useAlianzas } from '../../../hooks/useAlianzas';


const Siderbar = () => {

    const navigate = useNavigate()

    function logout() {
        return signOut(auth)
    }

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }


    const { solicitud } = useSolicitud()
    const { recuperadores } = useRecuperador();
    const { alianzas } = useAlianzas()

    const num = solicitud.length
    const numRecuperador = recuperadores.length
    const numAlianzas = alianzas.length

    const menu = [

        { name: `Solicitudes(${num})`, icon: <VscFolderOpened />, id: "2", link: "/administracion/solicitudes" },
        { name: `Recuperadores(${numRecuperador})`, icon: <FaRecycle />, id: "3", link: "/administracion/recuperadores" },
        { name: `Alianzas(${numAlianzas})`, icon: <SlPeople />, id: "4", link: "/administracion/alianzas" },

    ]
    return (
        <div className='flex'>
            <div className='h-screen border-r border bg-gray-200 w-96 px-9'>
                <div>
                    <img className='' src={"https://res.cloudinary.com/dwvchf8al/image/upload/v1678477409/Demo_day_RROP/logo-super-eco_rxt0ic.png"} alt="" />
                    <div>
                        <h3 className='mb-10'>Menu</h3>
                        <ul>

                            {
                                menu.map((i) => (

                                    <li className='mb-9 cursor-pointer text-3xl' key={i.id}>
                                        <Link to={i.link}>
                                            <div className='flex gap-9 items-center'>
                                                <div className='text-green-600'>{i.icon}</div>
                                                <div>{i.name}</div>
                                            </div>
                                        </Link>
                                    </li>

                                ))
                            }
                        </ul>
                        <div className='mb-9 cursor-pointer text-3xl'>
                            <button onClick={handleLogout} className='flex gap-9 items-center'>
                                <div className='text-green-600'><BiLogOut /></div>
                                <div className='text-green-600'>Logout</div>
                            </button>

                        </div>

                    </div>
                </div>


            </div>
            <Outlet />
        </div>
    )
}

export default Siderbar