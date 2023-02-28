import { Link } from "react-router-dom"

const LoginNav = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <img src={"https://res.cloudinary.com/dwvchf8al/image/upload/v1677613830/Demo_day_RROP/logo-RROP_xzyjzn.png"} alt="logo-RROP" width="200" />
                <Link
                    className="bg-primary py-2 px-12 text-white"
                    to={"/"}
                >Login</Link>
            </div>
        </div>
    )
}

export default LoginNav
