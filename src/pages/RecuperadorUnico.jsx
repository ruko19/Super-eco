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
        <div className='flex flex-col md:flex-row'>
            <div className='md:h-screen p-12 md:p-8 border-r border bg-gray-200 md:w-96 px-9'>
                <div>
                    <img className='hidden md:block' src={"https://res.cloudinary.com/dwvchf8al/image/upload/v1678477409/Demo_day_RROP/logo-super-eco_rxt0ic.png"} alt="" />

                    <div className='flex md:block items-center justify-between'>
                        <h3 className='mb-10 hidden md:block'>Menu</h3>

                        <nav className=''>
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


                            <div className='mb-9 cursor-pointer text-3xl'>
                                <button onClick={handleLogout} className='flex gap-9 items-center'>
                                    <div className='text-green-600'><BiLogOut /></div>
                                    <div className='text-green-600'>Logout</div>
                                </button>

                            </div>

                        </nav>

                        <div>
                            <img className='md:hidden' src={"https://res.cloudinary.com/dwvchf8al/image/upload/v1678477409/Demo_day_RROP/logo-super-eco_rxt0ic.png"} alt="" width="300" />
                        </div>


                    </div>
                </div>


            </div>
            <Outlet />
        </div>
    )
}

export default RecuperadorUnico
