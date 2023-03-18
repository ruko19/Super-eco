import React from 'react'
import { VscHome } from "react-icons/vsc";
import { VscFolderOpened } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { FaRecycle } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { Link, Outlet } from 'react-router-dom';
import useSolicitud from '../../../hooks/useSolicitud';


const Siderbar = () => {
    const { solicitud } = useSolicitud()
    const num = solicitud.length

    const menu = [
        { name: "Home", icon: <VscHome />, id: "1", link: "/administracion/dashboard" },
        { name: `Solicitudes(${num})`, icon: <VscFolderOpened />, id: "2", link: "/administracion/solicitudes" },
        { name: "Recuperadores", icon: <FaRecycle />, id: "3", link: "/administracion/recuperadores" },
        { name: "Alianzas", icon: <SlPeople />, id: "4", link: "/administracion/alianzas" },
        { name: "Settings", icon: <VscSettingsGear />, id: "5" },
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

                                    <li className='mb-9 cursor-pointer text-4xl' key={i.id}>
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

                    </div>
                </div>


            </div>
            <Outlet />
        </div>
    )
}

export default Siderbar