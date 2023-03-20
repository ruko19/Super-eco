import { FaRoute } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { signOut } from 'firebase/auth';
import { auth } from "../api/firebaseConfig";



const RecuperadorUnico = () => {

    const navigate = useNavigate()

    const menu = [

        { name: `Ubicaciones`, icon: <FaRoute />, id: "2", link: "/recuperador/ubicaciones" },
        { name: `Horarios empresas`, icon: <FaClock />, id: "3", link: "/recuperador/empresas" },
        { name: `Bonos`, icon: <FaRegMoneyBillAlt />, id: "4", link: "/recuperador/bonos" },

    ]

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

    return (
        <div className='flex container'>
            <div className='h-screen border-r border bg-gray-200 w-96 px-9'>
                <div>
                    <img className='' src={"https://res.cloudinary.com/dwvchf8al/image/upload/v1678477409/Demo_day_RROP/logo-super-eco_rxt0ic.png"} alt="" />
                    <div>
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

export default RecuperadorUnico
