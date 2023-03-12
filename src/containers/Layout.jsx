import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Administracion from "../pages/Administracion"
import { useLocation } from "react-router-dom"

const Layout = ({ children }) => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname.startsWith("/sadministracion") ? <Administracion /> : <Header />
            }
            {children}

            <Footer />
        </div>
    )
}

export default Layout
