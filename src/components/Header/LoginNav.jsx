import { Link } from "react-router-dom"
import { FaUserLock } from "react-icons/fa";

const LoginNav = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <img src={"https://res.cloudinary.com/dwvchf8al/image/upload/v1678477409/Demo_day_RROP/logo-super-eco_rxt0ic.png"} width="150" />

                <Link
                    className="bg-green-600 py-2 px-12 text-white"
                    to={"/login-admin"}
                ><FaUserLock /></Link>

            </div>
        </div>
    )
}

export default LoginNav
